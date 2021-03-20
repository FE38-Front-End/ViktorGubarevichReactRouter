import { useState, useEffect } from "react";

const useMouseTracker = function () {
  let [mouseTracker, setMouseTracker] = useState({ x: 0, y: 0 });
  const handleMouseMove = (event) =>
    setMouseTracker({ x: event.clientX, y: event.clientY });

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return mouseTracker;
};

export { useMouseTracker };
