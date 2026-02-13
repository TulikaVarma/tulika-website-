function MainBackground() {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      {/* Animated gradient background */}
      <div 
        className="animated-gradient"
      />
      
      <style dangerouslySetInnerHTML={{__html: `
        .animated-gradient {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(0deg, #0a0f1a, #141923, #1e232d);
          background-size: 400% 400%;
          animation: BackgroundGradient 10s ease infinite;
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