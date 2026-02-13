import React, { useState, useEffect, useRef } from 'react';

const StarCharacter = ({ top, left, size = 1, rotation = 0, scrollY, speed = 0.5 }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Star Movement speed 
  const pixelOffset = scrollY * speed;
  // Stars fade away 
  const initialTopPx = (window.innerHeight * parseFloat(top)) / 100;
  const currentPosPx = initialTopPx - pixelOffset;
  const opacity = Math.max(0, Math.min(1, currentPosPx / 200)); 

  const calculateEyeMove = (xBase, yBase) => {
    const xPx = (window.innerWidth * parseFloat(xBase)) / 100;
    const yPx = (window.innerHeight * parseFloat(yBase)) / 100;
    const angle = Math.atan2(mousePos.y - yPx, mousePos.x - xPx);
    const dist = 1.5;
    return {
      transform: `translate(${Math.cos(angle) * dist}px, ${Math.sin(angle) * dist}px)`
    };
  };

  return (
    <div 
      className="absolute" 
      style={{ 
        left: left,
        top: top,
        opacity: opacity,
        transform: `translate3d(-50%, calc(-50% - ${pixelOffset}px), 0) scale(${size}) rotate(${rotation}deg)`, 
        transformOrigin: 'center center',
        display: 'inline-block',
        willChange: 'transform, opacity'
      }}
    >
      <svg 
        width="80" 
        height="80" 
        viewBox="0 0 24 24" 
        style={{ overflow: 'visible' }} 
        className="drop-shadow-[0_0_10px_rgba(255,230,100,0.4)]"
      >
        <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.857 1.4-8.168L.132 9.21l8.2-1.192L12 .587z" fill="#ffeaac" />
        <circle cx="9" cy="11.5" r="2.5" fill="white" />
        <circle cx="9" cy="11.5" r="1.8" fill="black" style={calculateEyeMove(left, top)} />
        <circle cx="15" cy="11.5" r="2.5" fill="white" />
        <circle cx="15" cy="11.5" r="1.8" fill="black" style={calculateEyeMove(left, top)} />
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

  // starData with added 'speed' property for depth
  const starData = [
    // Stars above title 
    { top: "10%", left: "8%", size: 0.4, rotation: -20, speed: 0.3 },
    { top: "15%", left: "30%", size: 0.6, rotation: 10, speed: 0.4 },
    { top: "13%", left: "55%", size: 0.3, rotation: 15, speed: 0.3 },
    { top: "16%", left: "85%", size: 0.4, rotation: -10, speed: 0.2 },
    //Stars on the sides
    { top: "45%", left: "7%", size: 0.5, rotation: -10, speed: 0.7 },
    { top: "50%", left: "88%", size: 0.5, rotation: 20, speed: 0.6 },
    //Stars below title 
    { top: "80%", left: "14%", size: 0.7, rotation: -10, speed: 0.8 },
    { top: "95%", left: "35%", size: 0.3, rotation: -10, speed: 0.5 },
    { top: "90%", left: "75%", size: 0.7, rotation: 20, speed: 0.9 },
    { top: "75%", left: "92%", size: 0.3, rotation: -30, speed: 0.4 },
    
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