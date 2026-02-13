import React, { useState, useEffect } from 'react';

function MainBackground() {
  const [scrollOpacity, setScrollOpacity] = useState(0);

  useEffect(() => {
    // Darkens background based on scroll
    const handleScroll = () => {
      const winHeight = window.innerHeight;
      const scrollY = window.scrollY;
      const opacity = Math.min(scrollY / (winHeight * 0.8), 1);
      setScrollOpacity(opacity);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      {/* Animated Background*/}
      <div className="animated-gradient" />
      {/* Blends into Next page for scroll */}
      <div 
        className="absolute inset-0 pointer-events-none transition-opacity duration-75"
        style={{ 
          backgroundColor: '#040409',
          opacity: scrollOpacity 
        }} 
      />
      
      <style dangerouslySetInnerHTML={{__html: `
        .animated-gradient {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          /* Swapped order: Lightest color (#061558) is prominent at start */
          background: linear-gradient(180deg, #061558, #050e39, #040409);
          background-size: 100% 200%;
          animation: BackgroundGradient 15s ease-in-out infinite;
        }
        
        @keyframes BackgroundGradient {
          0% { background-position: 50% 0%; }
          50% { background-position: 50% 100%; }
          100% { background-position: 50% 0%; }
        }
      `}} />
    </div>
  );
}

export default MainBackground;