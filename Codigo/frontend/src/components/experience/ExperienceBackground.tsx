export function ExperienceBackground() {
  return (
    <div
      className="absolute inset-0 pointer-events-none overflow-hidden z-0"
      aria-hidden="true"
    >
      {/* ─── 1. Nebulosas de Luz em Pontos Estratégicos de Ascensão ─── */}
      {/* Glow Topo-Direito (Meta / Futuro) */}
      <div
        className="absolute -top-12 right-[8%] w-137.5 h-137.5"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(217, 70, 239, 0.22) 0%, rgba(147, 21, 220, 0.12) 40%, rgba(53, 5, 72, 0.05) 65%, transparent 80%)",
          filter: "blur(55px)",
        }}
      />

      {/* Glow Meio-Esquerdo (Base da Jornada) */}
      <div
        className="absolute top-[45%] left-[-10%] w-125 h-125"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(106, 0, 200, 0.18) 0%, rgba(76, 13, 117, 0.08) 50%, transparent 75%)",
          filter: "blur(60px)",
        }}
      />

      {/* ─── 2. Trajetória Ascendente: Curvas de Energia e Vetores de Carreira ─── */}
      <svg
        className="absolute inset-0 w-full h-full opacity-60 transition-opacity duration-1000"
        viewBox="0 0 1440 900"
        fill="none"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Gradientes dos Fluxos Ascendentes */}
          <linearGradient
            id="expAscendGrad1"
            x1="0%"
            y1="100%"
            x2="100%"
            y2="0%"
          >
            <stop offset="0%" stopColor="#1e072b" stopOpacity="0.8" />
            <stop offset="45%" stopColor="#530f7e" stopOpacity="0.35" />
            <stop offset="85%" stopColor="#9315dc" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#d946ef" stopOpacity="0.05" />
          </linearGradient>

          <linearGradient
            id="expAscendGrad2"
            x1="10%"
            y1="100%"
            x2="90%"
            y2="0%"
          >
            <stop offset="0%" stopColor="#0d0314" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#3d0961" stopOpacity="0.3" />
            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
          </linearGradient>

          <linearGradient
            id="expStrokeTrajectory"
            x1="0%"
            y1="100%"
            x2="100%"
            y2="0%"
          >
            <stop offset="0%" stopColor="rgba(176, 38, 255, 0.05)" />
            <stop offset="35%" stopColor="rgba(217, 70, 239, 0.4)" />
            <stop offset="70%" stopColor="rgba(244, 114, 182, 0.65)" />
            <stop offset="100%" stopColor="rgba(176, 38, 255, 0.1)" />
          </linearGradient>

          <linearGradient
            id="expGridStroke"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="rgba(217, 70, 239, 0.3)" />
            <stop offset="100%" stopColor="rgba(106, 0, 200, 0.05)" />
          </linearGradient>
        </defs>

        {/* Fitas Orgânicas de Fluxo Ascendente */}
        <path
          d="M-100,850 C200,800 450,550 780,480 C1100,420 1280,200 1550,120 L1550,900 L-100,900 Z"
          fill="url(#expAscendGrad1)"
        />

        <path
          d="M-50,950 C300,750 600,680 950,420 C1200,240 1350,150 1550,50 L1550,900 L-50,900 Z"
          fill="url(#expAscendGrad2)"
        />

        {/* Linhas de Trajetória / Guias de Ascensão com Ondulações Elegantes */}
        <path
          d="M-50,780 C280,680 560,540 880,430 C1200,320 1380,180 1550,90"
          stroke="url(#expStrokeTrajectory)"
          strokeWidth="2.5"
          fill="none"
        />

        <path
          d="M50,860 C380,740 680,600 980,480 C1280,360 1420,240 1600,140"
          stroke="url(#expStrokeTrajectory)"
          strokeWidth="1.6"
          strokeOpacity="0.5"
          fill="none"
        />

        <path
          d="M-80,620 C220,540 500,420 820,330 C1120,240 1340,110 1520,30"
          stroke="url(#expStrokeTrajectory)"
          strokeWidth="1.2"
          strokeDasharray="6 6"
          strokeOpacity="0.4"
          fill="none"
        />

        {/* ─── 3. Nós de Marcos e Conexões (Milestone Constellation Nodes) ─── */}
        {/* Nó 1 - Ponto Inicial */}
        <circle cx="340" cy="650" r="3" fill="#e4a5ff" opacity="0.8" />
        <circle
          cx="340"
          cy="650"
          r="10"
          stroke="#b026ff"
          strokeWidth="1"
          opacity="0.3"
        />

        {/* Nó 2 - Meio da Trajetória */}
        <circle cx="680" cy="500" r="3.5" fill="#f472b6" opacity="0.85" />
        <circle
          cx="680"
          cy="500"
          r="14"
          stroke="#d946ef"
          strokeWidth="1"
          opacity="0.35"
        />

        {/* Nó 3 - Ponto Elevado */}
        <circle cx="1040" cy="380" r="4" fill="#ffffff" opacity="0.9" />
        <circle
          cx="1040"
          cy="380"
          r="18"
          stroke="#f472b6"
          strokeWidth="1.2"
          opacity="0.45"
        />

        {/* Nó 4 - Topo / Futuro */}
        <circle cx="1320" cy="210" r="4.5" fill="#ffffff" opacity="0.95" />
        <circle
          cx="1320"
          cy="210"
          r="22"
          stroke="#e4a5ff"
          strokeWidth="1.5"
          opacity="0.5"
        />

        {/* Linhas Sutis de Conexão entre os Nós de Marcos */}
        <line
          x1="340"
          y1="650"
          x2="680"
          y2="500"
          stroke="url(#expGridStroke)"
          strokeWidth="1"
          strokeDasharray="4 4"
        />
        <line
          x1="680"
          y1="500"
          x2="1040"
          y2="380"
          stroke="url(#expGridStroke)"
          strokeWidth="1"
          strokeDasharray="4 4"
        />
        <line
          x1="1040"
          y1="380"
          x2="1320"
          y2="210"
          stroke="url(#expGridStroke)"
          strokeWidth="1"
          strokeDasharray="4 4"
        />
      </svg>
    </div>
  );
}
