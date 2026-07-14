import { useEffect } from "react";

const usePrefetch = () => {
  useEffect(() => {
    // Prefetch common routes for faster navigation
    const routes = [
      "/colorbond-fencing",
      "/timber-fencing",
      "/pool-fencing",
      "/aluminium-fencing"
    ];

    // Simple prefetch by creating link elements
    routes.forEach((route) => {
      const link = document.createElement("link");
      link.rel = "prefetch";
      link.href = route;
      document.head.appendChild(link);
    });
  }, []);
};

export default usePrefetch;
