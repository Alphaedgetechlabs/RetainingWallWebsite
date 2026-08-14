import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { setSpaNavigate } from "@/lib/spa-navigate";

/**
 * Registers the router's navigate function for non-router code and upgrades
 * plain <a href="/..."> clicks to instant client-side navigations.
 */
const InstantNavigation = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setSpaNavigate((to) => navigate(to));

    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0) return;
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const target = e.target as HTMLElement | null;
      const a = target?.closest?.("a") as HTMLAnchorElement | null;
      if (!a) return;
      if (a.target === "_blank" || a.hasAttribute("download")) return;
      const href = a.getAttribute("href");
      if (!href || !href.startsWith("/") || href.startsWith("//")) return;
      if (a.dataset.noSpa !== undefined) return;
      e.preventDefault();
      navigate(href);
    };

    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("click", onClick);
      setSpaNavigate(null);
    };
  }, [navigate]);

  return null;
};

export default InstantNavigation;
