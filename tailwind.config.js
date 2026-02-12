function MountainBackground() {
  return (
    <svg
      className="absolute inset-0 w-full h-full"
      viewBox="0 0 1440 800"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Sky Gradient: Deep navy-purple to teal-purple */}
        <linearGradient id="skyPurple" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#1a1540" />
          <stop offset="50%" stopColor="#2d4a5c" />
          <stop offset="100%" stopColor="#3a6b73" />
        </linearGradient>

        {/* Sun Glow: Warm white to purple-teal */}
        <radialGradient id="sunGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8" />
          <stop offset="30%" stopColor="#d4e8e8" stopOpacity="0.4" />
          <stop offset="60%" stopColor="#7aa9b3" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#3a6b73" stopOpacity="0" />
        </radialGradient>

        {/* Atmospheric haze */}
        <linearGradient id="haze" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#5a8a93" stopOpacity="0" />
          <stop offset="100%" stopColor="#4a7580" stopOpacity="0.4" />
        </linearGradient>
      </defs>

      {/* 1. Background sky */}
      <rect width="1440" height="800" fill="url(#skyPurple)" />
      
      {/* 2. Sun glow circles (layered for depth) */}
      <circle cx="720" cy="550" r="350" fill="url(#sunGlow)" opacity="0.6" />
      <circle cx="720" cy="550" r="180" fill="#a8d4d9" opacity="0.5" />
      <circle cx="720" cy="550" r="90" fill="#ffffff" opacity="0.85" />

      {/* 3. Furthest mountain ridge (lightest purple-blue) */}
      <path
        d="M0 520 L180 460 L360 500 L540 440 L720 480 L900 420 L1080 460 L1260 430 L1440 470 V800 H0 Z"
        fill="#5a7a9a"
        opacity="0.4"
      />

      {/* 4. Second ridge (medium purple-blue) */}
      <path
        d="M0 600 L240 520 L480 570 L720 500 L960 560 L1200 510 L1440 550 V800 H0 Z"
        fill="#3d5873"
        opacity="0.6"
      />

      {/* 5. Third ridge (darker blue-purple) */}
      <path
        d="M0 650 L300 580 L600 630 L900 570 L1200 620 L1440 590 V800 H0 Z"
        fill="#2a4059"
        opacity="0.75"
      />

      {/* 6. Left foreground peak (darkest) */}
      <path
        d="M-50 800 L120 550 L180 500 L280 580 L350 520 L450 640 L550 800 Z"
        fill="#1a2840"
      />

      {/* 7. Right foreground peak (darkest) */}
      <path
        d="M900 800 L1000 620 L1080 580 L1160 500 L1220 540 L1300 580 L1380 520 L1500 800 Z"
        fill="#152033"
      />

      {/* 8. Atmospheric haze layer */}
      <rect width="1440" height="250" y="550" fill="url(#haze)" />

      {/* 9. Star sparkles */}
      <g fill="white" opacity="0.9">
        {/* Left cluster */}
        <circle cx="80" cy="60" r="2.5" />
        <circle cx="120" cy="40" r="2" />
        <circle cx="140" cy="80" r="1.5" />
        <path d="M100 50 L102 44 L104 50 L110 52 L104 54 L102 60 L100 54 L94 52 Z" />
        
        {/* Right cluster */}
        <circle cx="1340" cy="70" r="2.5" />
        <circle cx="1300" cy="50" r="2" />
        <circle cx="1380" cy="90" r="1.5" />
        <path d="M1360 60 L1363 53 L1366 60 L1373 63 L1366 66 L1363 73 L1360 66 L1353 63 Z" />

        {/* Additional stars */}
        <circle cx="50" cy="100" r="1" />
        <circle cx="1400" cy="110" r="1" />
        <circle cx="90" cy="130" r="1.2" />
        <circle cx="1320" cy="120" r="1.2" />
      </g>
    </svg>
  );
}

export default MountainBackground;