import React, { useState, useEffect, useRef } from 'react';

const StarCharacter = ({ top, left, size = 1, rotation = 0, scrollY, speed = 0.5 }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const responsiveSize = `clamp(20px, calc(${size} * 4vw), 70px)`;

  // Parallax logic
  const pixelOffset = scrollY * speed;
  
  // Fade logic based on scroll position
  const initialTopPx = (typeof window !== 'undefined' ? window.innerHeight : 800) * (parseFloat(top) / 100);
  const currentPosPx = initialTopPx - pixelOffset;
  const opacity = Math.max(0, Math.min(1, currentPosPx / 200)); 

  // Eye tracking logic
  const calculateEyeMove = (xBase, yBase) => {
    const xPx = (typeof window !== 'undefined' ? window.innerWidth : 1200) * (parseFloat(xBase) / 100);
    const yPx = (typeof window !== 'undefined' ? window.innerHeight : 800) * (parseFloat(yBase) / 100);
    const angle = Math.atan2(mousePos.y - yPx, mousePos.x - xPx);
    const dist = 1.2; 
    return {
      transform: `translate(${Math.cos(angle) * dist}px, ${Math.sin(angle) * dist}px)`
    };
  };

  return (
    <div 
      className="absolute flex items-center justify-center" 
      style={{ 
        left: left,
        top: top,
        opacity: opacity,
        transform: `translate3d(-50%, calc(-50% - ${pixelOffset}px), 0) rotate(${rotation}deg)`, 
        width: responsiveSize,
        height: responsiveSize,
        transformOrigin: 'center center',
        willChange: 'transform, opacity'
      }}
    >
      <svg 
        viewBox="0 0 24 24" 
        style={{ width: '100%', height: '100%', overflow: 'visible' }} 
        className="drop-shadow-[0_0_8px_rgba(255,230,100,0.3)]"
      >
        {/* Star Body */}
        <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.857 1.4-8.168L.132 9.21l8.2-1.192L12 .587z" fill="#ffeaac" />
        {/* Eyes */}
        <circle cx="9" cy="11.5" r="2.5" fill="white" />
        <circle cx="9" cy="11.5" r="1.8" fill="black" style={calculateEyeMove(left, top)} />
        <circle cx="15" cy="11.5" r="2.5" fill="white" />
        <circle cx="15" cy="11.5" r="1.8" fill="black" style={calculateEyeMove(left, top)} />
        {/* Smile */}
        <path d="M10 15 Q12 16.5 14 15" stroke="black" strokeWidth="0.8" fill="none" strokeLinecap="round" />
      </svg>
    </div>
  );
};

export const StarBackground = () => {
  const [scrollY, setScrollY] = useState(0);
  const requestRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      cancelAnimationFrame(requestRef.current);
      requestRef.current = requestAnimationFrame(() => {
        setScrollY(window.scrollY);
      });
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(requestRef.current);
    };
  }, []);

  const starData = [
    // Top Row (Above Name)
    { top: "12%", left: "8%", size: 0.7, rotation: -15, speed: 0.2 },
    { top: "18%", left: "30%", size: 0.9, rotation: 10, speed: 0.3 },
    { top: "14%", left: "55%", size: 0.5, rotation: 15, speed: 0.2 },
    { top: "20%", left: "85%", size: 0.6, rotation: -10, speed: 0.4 },
    // Middle Row (Sides)
    { top: "45%", left: "10%", size: 0.8, rotation: -20, speed: 0.5 },
    { top: "52%", left: "88%", size: 0.7, rotation: 25, speed: 0.6 },
    // Bottom Row 
    { top: "78%", left: "15%", size: 1.0, rotation: -10, speed: 0.8 },
    { top: "92%", left: "35%", size: 0.4, rotation: -5, speed: 0.5 },
    { top: "88%", left: "75%", size: 0.9, rotation: 15, speed: 0.7 },
    { top: "72%", left: "92%", size: 0.4, rotation: -25, speed: 0.3 },
  ];

  return (
    <div className="fixed inset-0 z-10 pointer-events-none overflow-hidden">
      {starData.map((star, index) => (
        <StarCharacter 
          key={index}
          top={star.top} 
          left={star.left} 
          size={star.size} 
          rotation={star.rotation} 
          speed={star.speed}
          scrollY={scrollY}
        />
      ))}
    </div>
  );
};