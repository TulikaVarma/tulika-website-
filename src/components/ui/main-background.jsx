function MainBackground() {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      {/* Animated gradient background */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{
          background: 'linear-gradient(132deg, #1D1A39, #451952, #662549, #AE445A, #F39F5A, #EBBCB9)',
          backgroundSize: '400% 400%',
          animation: 'BackgroundGradient 15s ease infinite'
        }}
      />

      <style jsx>{`
        @keyframes BackgroundGradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </div>
  );
}

export default MainBackground;