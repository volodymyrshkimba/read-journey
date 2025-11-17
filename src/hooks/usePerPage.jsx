import { useState, useEffect } from "react";

export function usePerPage() {
  const [perPage, setPerPage] = useState(getPerPage(window.innerWidth));

  function getPerPage(width) {
    if (width <= 767) return 2;
    if (width <= 1279) return 8;
    return 10;
  }

  useEffect(() => {
    const handler = () => {
      setPerPage(getPerPage(window.innerWidth));
    };

    window.addEventListener("resize", handler);

    return () => window.removeEventListener("resize", handler);
  }, []);

  return perPage;
}
