import { useEffect } from "react";

const prefetched = new Set<string>();

const addLink = (rel: string, href: string, as?: string, crossOrigin?: boolean) => {
  const link = document.createElement("link");
  link.rel = rel;
  link.href = href;
  if (as) link.setAttribute("as", as);
  if (crossOrigin) link.crossOrigin = "anonymous";
  document.head.appendChild(link);
};

const prefetchRoute = (href: string) => {
  if (!href || prefetched.has(href)) return;
  prefetched.add(href);
  addLink("prefetch", href, "document");
};

const isInternalLink = (a: HTMLAnchorElement) => {
  const href = a.getAttribute("href");
  if (!href) return false;
  if (a.target === "_blank" || a.hasAttribute("download")) return false;
  return href.startsWith("/") && !href.startsWith("//");
};

const usePrefetch = () => {
  useEffect(() => {
    // 1. Warm up the connection to the origin (and any CDN assets).
    addLink("preconnect", window.location.origin);
    addLink("dns-prefetch", window.location.origin);

    // 2. Prefetch links as they scroll near the viewport.
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const a = entry.target as HTMLAnchorElement;
          if (isInternalLink(a)) prefetchRoute(a.getAttribute("href")!);
          observer.unobserve(a);
        });
      },
      { rootMargin: "100px" }
    );

    const observeAll = () => {
      document.querySelectorAll<HTMLAnchorElement>("a[href^='/']").forEach((a) => {
        if (!prefetched.has(a.getAttribute("href") || "")) observer.observe(a);
      });
    };
    observeAll();

    // Re-scan when the DOM changes (route changes, lazy sections).
    const mo = new MutationObserver(() => observeAll());
    mo.observe(document.body, { childList: true, subtree: true });

    // 3. Prefetch on hover / touch — feels instant on click.
    const onHover = (e: Event) => {
      const target = e.target as HTMLElement | null;
      const a = target?.closest?.("a") as HTMLAnchorElement | null;
      if (a && isInternalLink(a)) prefetchRoute(a.getAttribute("href")!);
    };
    document.addEventListener("mouseover", onHover, { passive: true });
    document.addEventListener("touchstart", onHover, { passive: true });

    // 4. Warm the browser image cache for images already on the page.
    const warmImages = () => {
      document.querySelectorAll<HTMLImageElement>("img[src]").forEach((img) => {
        const src = img.currentSrc || img.src;
        if (!src || prefetched.has(src)) return;
        prefetched.add(src);
        const preloader = new Image();
        preloader.src = src;
      });
    };
    const idle =
      (window as unknown as { requestIdleCallback?: (cb: () => void) => number })
        .requestIdleCallback || ((cb: () => void) => window.setTimeout(cb, 200));
    idle(warmImages);

    return () => {
      observer.disconnect();
      mo.disconnect();
      document.removeEventListener("mouseover", onHover);
      document.removeEventListener("touchstart", onHover);
    };
  }, []);
};

export default usePrefetch;
