import { useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { ExternalLink, ChevronDown } from "lucide-react";

/* ─── Ícone do Calendário ─── */
const CalendarCustomIcon = ({
  size = 26,
  className = "",
}: {
  size?: number;
  className?: string;
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Contorno do Calendário */}
    <rect
      x="2.5"
      y="4"
      width="19"
      height="17"
      rx="3.5"
      stroke="currentColor"
      strokeWidth="2.1"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Anéis superiores do fichário */}
    <line
      x1="7.5"
      y1="2"
      x2="7.5"
      y2="5"
      stroke="currentColor"
      strokeWidth="2.1"
      strokeLinecap="round"
    />
    <line
      x1="16.5"
      y1="2"
      x2="16.5"
      y2="5"
      stroke="currentColor"
      strokeWidth="2.1"
      strokeLinecap="round"
    />
    {/* Linha separadora do cabeçalho */}
    <line
      x1="2.5"
      y1="8.5"
      x2="21.5"
      y2="8.5"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    {/* Grade de dias */}
    <circle cx="7.5" cy="12.5" r="1" fill="currentColor" />
    <circle cx="12" cy="12.5" r="1" fill="currentColor" />
    <circle cx="16.5" cy="12.5" r="1" fill="currentColor" />
    <circle cx="7.5" cy="16.5" r="1" fill="currentColor" />
    <circle cx="12" cy="16.5" r="1" fill="currentColor" />
    <circle cx="16.5" cy="16.5" r="1" fill="currentColor" />
  </svg>
);

/* ─── Mockup do Monitor ─── */
interface MonitorMockupProps {
  image?: string;
  title?: string;
  link?: string;
}

const MonitorMockup = ({ image, title, link }: MonitorMockupProps) => (
  <div className="relative flex flex-col items-center justify-center min-w-56 sm:min-w-64 md:min-w-72 lg:min-w-80 select-none shrink-0 group/monitor">
    {/* Corpo do Monitor */}
    <div className="relative w-full max-w-72 aspect-16/10 bg-[#261033] border-[3.5px] border-[#591873] rounded-xl p-2 shadow-[0_10px_30px_rgba(0,0,0,0.65)] flex items-center justify-center overflow-hidden">
      {/* Tela Interna */}
      <div className="relative w-full h-full bg-[#14061a] border border-[#410f54] rounded-md overflow-hidden flex items-center justify-center">
        {image ? (
          <img
            src={image}
            alt={title || "Project Preview"}
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover/monitor:scale-105"
          />
        ) : (
          /* Placeholder */
          <div className="w-full h-full relative flex items-center justify-center bg-linear-to-br from-[#b026ff]/20 via-[#6a00c8]/10 to-[#14061a]">
            <div className="w-12 h-12 rounded-full bg-[#b026ff]/15 border border-[#b026ff]/35 flex items-center justify-center">
              <div className="w-4 h-4 rounded-full bg-[#b026ff] shadow-[0_0_12px_#b026ff]" />
            </div>
          </div>
        )}
      </div>
    </div>

    {/* Haste e Base do Monitor */}
    <div className="w-8 h-3.5 bg-[#321142] border-x border-[#591873] -mt-px" />
    <div className="w-24 h-2 bg-[#45145c] border border-[#6d1e8c] rounded-full shadow-[0_4px_10px_rgba(0,0,0,0.5)]" />

    {/* Ícone de Link Externo */}
    {link && (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute top-1 right-1 sm:top-2 sm:right-2 text-[#a855f7] hover:text-[#e879f9] transition-all hover:scale-115 p-2 cursor-pointer z-10"
        title="Abrir Projeto"
        onClick={(e) => e.stopPropagation()}
      >
        <ExternalLink
          size={24}
          className="text-[#a855f7] hover:text-[#e879f9] drop-shadow-[0_0_8px_rgba(217,70,239,0.6)]"
        />
      </a>
    )}
  </div>
);

export function Projects() {
  const { t } = useLanguage();
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({
    "1": true,
  });

  const toggleItem = (id: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="relative flex-1 flex flex-col justify-between overflow-hidden">
      {/* ─── Efeitos de Iluminação e Ondas  ─── */}
      <div
        className="absolute inset-0 pointer-events-none overflow-hidden z-0"
        aria-hidden="true"
      >
        {/* Glow difuso atmosférico */}
        <div
          className="absolute -top-10 right-[5%] w-162.5-[550px]"
          style={{
            background:
              "radial-gradient(ellipse 65% 55% at 65% 35%, rgba(168, 36, 179, 0.22) 0%, rgba(106, 0, 200, 0.12) 45%, transparent 75%)",
            filter: "blur(50px)",
          }}
        />

        {/* Ondas e fitas*/}
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

          {/* Fitas e malhas */}
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

      {/* ─── Conteúdo Principal ───────────────────────────────────────── */}
      <main className="flex-1 flex flex-col justify-start px-6 sm:px-12 md:px-20 lg:px-24 pt-2 pb-24 relative z-10">
        {/* Parágrafo descritivo no topo */}
        <div
          className="max-w-4xl mb-10 md:mb-12"
          style={{
            animation: "projFadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) both",
          }}
        >
          <p className="text-base sm:text-lg md:text-[1.18rem] text-white/90 leading-relaxed md:leading-8 font-serif font-normal tracking-wide">
            {t.projects.description}
          </p>
        </div>

        {/* Linha do Tempo Vertical de Projetos */}
        <div className="relative pl-7 sm:pl-10 md:pl-12 border-l-[2.5px] border-white/20 flex flex-col gap-6 md:gap-8 max-w-5xl">
          {t.projects.items.map((item) => {
            const isOpen = !!openItems[item.id];
            return (
              <div
                key={item.id}
                className="relative"
                style={{
                  animation:
                    "projFadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) both",
                }}
              >
                {/* ─── Indicador Circular na Linha do Tempo ─── */}
                <div
                  className={`absolute -left-9.75 sm:-left-12.75 md:-left-14.75 transition-all duration-300 flex items-center justify-center ${
                    isOpen
                      ? "top-1 w-7 h-7 rounded-full bg-[#8c1ea8] border-[3px] border-[#e4a5ff] shadow-[0_0_18px_rgba(176,38,255,0.9)] z-20"
                      : "top-5 w-5 h-5 rounded-full bg-white/90 shadow-[0_0_10px_rgba(255,255,255,0.4)] z-20"
                  }`}
                />

                {isOpen ? (
                  /* ─── ITEM EXPANDIDO ─── */
                  <div className="flex flex-col">
                    {/* Data acima do Card Aberto */}
                    <div className="flex items-center gap-2.5 text-[#d946ef] font-sans font-medium mb-3.5 pl-1">
                      <CalendarCustomIcon
                        size={26}
                        className="text-[#d946ef] drop-shadow-[0_0_8px_rgba(217,70,239,0.5)]"
                      />
                      <span className="text-base sm:text-lg tracking-wide">
                        {item.date}
                      </span>
                    </div>

                    {/* Card Aberto com Borda Roxa Neon */}
                    <div className="relative rounded-2xl md:rounded-3xl border border-[#9315dc]/70 hover:border-[#d946ef] transition-colors duration-300 p-6 sm:p-8 md:p-10 bg-[#160a1a]/90 backdrop-blur-xl shadow-[0_12px_40px_rgba(0,0,0,0.65)]">
                      <div className="flex flex-col lg:flex-row gap-6 md:gap-10 items-start justify-between">
                        {/* Lado Esquerdo: Título, Descrição e Tags */}
                        <div className="flex-1 flex flex-col justify-between">
                          <div
                            onClick={() => toggleItem(item.id)}
                            className="cursor-pointer select-none mb-4 group"
                          >
                            <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-normal text-white group-hover:text-[#e4a5ff] transition-colors">
                              {item.title}
                            </h3>
                          </div>

                          <p className="text-white/85 text-base sm:text-[1.12rem] leading-relaxed md:leading-8 font-serif font-normal mb-8 max-w-2xl">
                            {item.description}
                          </p>

                          {/* Pílulas de Tecnologias */}
                          <div className="flex flex-wrap gap-2.5 sm:gap-3">
                            {item.tags.map((tag, idx) => (
                              <span
                                key={idx}
                                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2a0e36]/90 border border-[#a824b3]/60 text-white font-sans text-sm sm:text-base font-normal shadow-[0_0_10px_rgba(176,38,255,0.15)] hover:border-[#d946ef] transition-colors"
                              >
                                <span className="w-2.5 h-2.5 rounded-full bg-[#b026ff] shadow-[0_0_8px_#b026ff]" />
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Lado Direito: Mockup do Monitor Desktop */}
                        <MonitorMockup
                          image={(item as { image?: string }).image}
                          title={item.title}
                          link={item.link}
                        />
                      </div>
                    </div>
                  </div>
                ) : (
                  /* ─── ITEM RECOLHIDO (Collapsed Horizontal Pill Card) ─── */
                  <div
                    onClick={() => toggleItem(item.id)}
                    className="flex items-center justify-between p-4 sm:p-5 md:p-6 rounded-2xl md:rounded-3xl border border-[#9315dc]/50 hover:border-[#d946ef] bg-[#160a1a]/80 hover:bg-[#200e28]/90 transition-all duration-300 cursor-pointer shadow-[0_8px_25px_rgba(0,0,0,0.5)] group select-none"
                  >
                    {/* Lado Esquerdo: Ícone de Calendário + Data + Título do Projeto */}
                    <div className="flex items-center gap-4 sm:gap-6 md:gap-8">
                      <div className="flex items-center gap-3 text-white/90">
                        <CalendarCustomIcon
                          size={26}
                          className="text-white/90 group-hover:text-[#e4a5ff] transition-colors"
                        />
                        <span className="text-base sm:text-lg font-sans font-normal tracking-wide text-white/70">
                          {item.date}
                        </span>
                      </div>

                      <h3 className="text-xl sm:text-2xl md:text-3xl font-serif font-normal text-white group-hover:text-[#e4a5ff] transition-colors">
                        {item.title}
                      </h3>
                    </div>

                    {/* Lado Direito: Seta Chevron Down */}
                    <div className="text-white/80 group-hover:text-[#e4a5ff] group-hover:translate-y-0.5 transition-all pr-2">
                      <ChevronDown size={22} />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </main>

      {/* ─── Animações CSS ────────────────────────────────────────────── */}
      <style>{`
        @keyframes projFadeIn {
          from {
            opacity: 0;
            transform: translateY(14px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
