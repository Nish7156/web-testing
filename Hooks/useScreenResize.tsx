import { useState, useEffect } from "react";

const useScreenResize = (minWidth: any, maxWidth: any) => {
  const [shouldRemoveMargin, setShouldRemoveMargin] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth >= minWidth && screenWidth <= maxWidth) {
        setShouldRemoveMargin(true);
      } else {
        setShouldRemoveMargin(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [minWidth, maxWidth]);

  return shouldRemoveMargin;
};

export default useScreenResize;
