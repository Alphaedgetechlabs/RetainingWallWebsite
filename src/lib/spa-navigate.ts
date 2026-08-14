// Lightweight bridge that lets non-router code perform instant, client-side
// navigation instead of a full page reload (window.location.href).

type NavigateFn = (to: string) => void;

let spaNavigate: NavigateFn | null = null;

export const setSpaNavigate = (fn: NavigateFn | null) => {
  spaNavigate = fn;
};

export const navigateTo = (url: string) => {
  // Only internal, same-origin paths can be handled by the router.
  const isInternal = url.startsWith("/") && !url.startsWith("//");
  if (isInternal && spaNavigate) {
    spaNavigate(url);
    return;
  }
  window.location.href = url;
};
