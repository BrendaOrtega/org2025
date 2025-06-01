import { useEffect, useState } from "react";

export const useMatchMedia = (
  maxWidthString: string = "(max-width: 500px)"
) => {
  const [isMatching, setIsMatching] = useState(false);
  useEffect(() => {
    if (!window) return;

    const handler = function (mm: unknown & { matches: boolean }) {
      if (mm.matches) {
        setIsMatching(true);
      } else {
        setIsMatching(false);
      }
    };

    const matchMedia = window.matchMedia(maxWidthString);
    matchMedia.addEventListener("change", handler);
    return () => {
      matchMedia.removeEventListener("change", handler);
    };
  }, []);
  return isMatching;
};
