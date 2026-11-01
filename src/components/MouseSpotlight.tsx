"use client";

import { useEffect, useState } from "react";

export function MouseSpotlight() {
  const [mousePosition, setMousePosition] = useState({ x: -500, y: -500 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-10 transition-opacity duration-300"
      style={{
        background: `radial-gradient(650px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(99, 102, 241, 0.08), transparent 80%)`,
      }}
    />
  );
}
