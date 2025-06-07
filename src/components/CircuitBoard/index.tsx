'use client';

import { useEffect, useRef, useState } from 'react';

export function CircuitBoard() {
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: '50%', y: '50%' });
  const [scrollY, setScrollY] = useState(0);
  const boardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
    setIsMobile(
      window.matchMedia('(max-width: 768px), (pointer: coarse)').matches
    );
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (isMobile) return;

      requestAnimationFrame(() => {
        setCursorPos({
          x: `${e.clientX}px`,
          y: `${e.clientY}px`,
        });
      });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [mounted, isMobile]);

  if (!mounted) return null;

  // Calculate position based on scroll to create parallax effect
  // Using negative value so the board moves up (appears to stay behind) as you scroll down
  const offsetY = isMobile ? 0 : -Math.min(scrollY * 0.2, 400);

  return (
    <>
      <div
        ref={boardRef}
        className="fixed inset-0"
        style={{
          zIndex: 0,
          backgroundImage: 'url("/images/circuit-board.svg")',
          backgroundSize: '1600px',
          backgroundRepeat: 'repeat',
          backgroundPosition: `center ${offsetY}px`,
          opacity: isMobile ? 0.3 : 0.6,
          filter: 'brightness(1.1)',
          maskImage: !isMobile
            ? `radial-gradient(circle 400px at ${cursorPos.x} ${cursorPos.y}, white 0%, transparent 100%)`
            : undefined,
          WebkitMaskImage: !isMobile
            ? `radial-gradient(circle 400px at ${cursorPos.x} ${cursorPos.y}, white 0%, transparent 100%)`
            : undefined,
        }}
      />
      {!isMobile && (
        <div
          className="fixed inset-0 pointer-events-none"
          style={{
            zIndex: 1,
            background: `radial-gradient(circle 400px at ${cursorPos.x} ${cursorPos.y}, #04D1CE 0%, transparent 70%)`,
            opacity: 0.35,
            maskImage: `radial-gradient(circle 400px at ${cursorPos.x} ${cursorPos.y}, white 0%, transparent 100%)`,
            WebkitMaskImage: `radial-gradient(circle 400px at ${cursorPos.x} ${cursorPos.y}, white 0%, transparent 100%)`,
          }}
        />
      )}
    </>
  );
}
