export function ProjectBackground() {
  return (
    <div
      className="absolute inset-0 pointer-events-none overflow-hidden z-0"
      aria-hidden="true"
    >
      {/* Glow difuso atmosférico superior-direito */}
      <div
        className="absolute -top-10 right-[5%] w-162.5 h-137.5"
        style={{
          background:
            "radial-gradient(ellipse 65% 55% at 65% 35%, rgba(168, 36, 179, 0.22) 0%, rgba(106, 0, 200, 0.12) 45%, transparent 75%)",
          filter: "blur(50px)",
        }}
      />

      {/* Ondas e fitas de seda violeta ondulantes no fundo */}
      <svg
        className="absolute top-0 right-0 w-full h-[90%] opacity-65 transition-opacity duration-1000"
        viewBox="0 0 1440 900"
        fill="none"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient
            id="projWaveGrad1"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#1a0729" stopOpacity="0.8" />
            <stop offset="40%" stopColor="#4c0d75" stopOpacity="0.35" />
            <stop offset="80%" stopColor="#7a1ba8" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#180d1a" stopOpacity="0" />
          </linearGradient>
          <linearGradient
            id="projWaveGrad2"
            x1="100%"
            y1="0%"
            x2="0%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#681596" stopOpacity="0.35" />
            <stop offset="50%" stopColor="#350548" stopOpacity="0.15" />
            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
          </linearGradient>
          <linearGradient
            id="projStrokeGrad1"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="50%"
          >
            <stop offset="0%" stopColor="rgba(176, 38, 255, 0)" />
            <stop offset="30%" stopColor="rgba(217, 70, 239, 0.45)" />
            <stop offset="70%" stopColor="rgba(168, 85, 247, 0.6)" />
            <stop offset="100%" stopColor="rgba(176, 38, 255, 0.05)" />
          </linearGradient>
          <linearGradient
            id="projStrokeGrad2"
            x1="100%"
            y1="0%"
            x2="0%"
            y2="100%"
          >
            <stop offset="0%" stopColor="rgba(236, 72, 153, 0.5)" />
            <stop offset="60%" stopColor="rgba(147, 21, 220, 0.3)" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>

        {/* Fitas e malhas de seda */}
        <path
          d="M300,120 C650,60 1050,220 1450,140 L1450,550 C1100,420 700,600 300,380 Z"
          fill="url(#projWaveGrad1)"
        />
        <path
          d="M200,180 C600,100 950,260 1450,160"
          stroke="url(#projStrokeGrad1)"
          strokeWidth="2.5"
          fill="none"
        />
        <path
          d="M350,220 C750,140 1100,300 1500,200"
          stroke="url(#projStrokeGrad1)"
          strokeWidth="1.8"
          strokeOpacity="0.6"
          fill="none"
        />
        <path
          d="M500,280 C900,190 1200,340 1550,250"
          stroke="url(#projStrokeGrad2)"
          strokeWidth="1.5"
          strokeOpacity="0.4"
          fill="none"
        />
        <path
          d="M100,340 C550,240 950,480 1450,300 L1450,750 C1050,650 650,800 100,620 Z"
          fill="url(#projWaveGrad2)"
        />
        <path
          d="M150,420 C600,310 1050,520 1500,360"
          stroke="url(#projStrokeGrad1)"
          strokeWidth="2"
          fill="none"
        />
      </svg>
    </div>
  );
}
