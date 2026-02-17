import React, { useEffect, useRef } from "react";
import Scrollbar from "smooth-scrollbar";

const ScrollbarWrapper = ({ children, options }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      // Initialize smooth-scrollbar on the container element
      const scrollbar = Scrollbar.init(containerRef.current, options);

      return () => {
        scrollbar.destroy();
      };
    }
  }, []);

  return <div ref={containerRef}>{children}</div>;
};

export default ScrollbarWrapper;
