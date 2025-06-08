'use client';

import { useEffect, useRef, useState } from 'react';

export function CircuitBoard() {
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: '50%', y: '50%' });
  const [scrollY, setScrollY] = useState(0);
  const [isProjectsSectionVisible, setIsProjectsSectionVisible] =
    useState(false);
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

      // Check if projects section is visible
      const projectsSection = document.getElementById('projects');
      if (projectsSection) {
        const rect = projectsSection.getBoundingClientRect();
        // Consider the section visible when it's about to enter the viewport (100px before)
        const isVisible = rect.top <= window.innerHeight - 100;
        setIsProjectsSectionVisible(isVisible);
      }
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

    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [mounted, isMobile]);

  if (!mounted || isMobile) return null;

  // Calculate position based on scroll to create parallax effect
  // Using negative value so the board moves up (appears to stay behind) as you scroll down
  const offsetY = -Math.min(scrollY * 0.2, 400);

  // Compute opacity based on projects section visibility
  const opacity = isProjectsSectionVisible ? 0 : 0.6;
  const glowOpacity = isProjectsSectionVisible ? 0 : 0.35;

  return (
    <>
      <div
        ref={boardRef}
        className="fixed inset-0 transition-opacity duration-700"
        style={{
          zIndex: 0,
          backgroundImage: 'url("/images/circuit-board.svg")',
          backgroundSize: '1600px',
          backgroundRepeat: 'repeat',
          backgroundPosition: `center ${offsetY}px`,
          opacity: opacity,
          filter: 'brightness(1.1)',
          maskImage: `radial-gradient(circle 400px at ${cursorPos.x} ${cursorPos.y}, white 0%, transparent 100%)`,
          WebkitMaskImage: `radial-gradient(circle 400px at ${cursorPos.x} ${cursorPos.y}, white 0%, transparent 100%)`,
        }}
      />
      <div
        className="fixed inset-0 pointer-events-none transition-opacity duration-700"
        style={{
          zIndex: 1,
          background: `radial-gradient(circle 400px at ${cursorPos.x} ${cursorPos.y}, #00D1B2 0%, transparent 70%)`,
          opacity: glowOpacity,
          maskImage: `radial-gradient(circle 400px at ${cursorPos.x} ${cursorPos.y}, white 0%, transparent 100%)`,
          WebkitMaskImage: `radial-gradient(circle 400px at ${cursorPos.x} ${cursorPos.y}, white 0%, transparent 100%)`,
        }}
      />
    </>
  );
}
