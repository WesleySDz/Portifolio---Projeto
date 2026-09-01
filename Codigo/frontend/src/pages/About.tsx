import { useLanguage } from "../contexts/LanguageContext";
import { useViewMode } from "../contexts/ViewModeContext";
import {
  Target,
  Sparkles,
  TrendingUp,
  Cpu,
  LayoutTemplate,
  Terminal,
  Briefcase,
  Users,
  Lightbulb,
  Code2,
  Server,
  BookOpen,
} from "lucide-react";

/* ─── Ícones dos Cards por Perfil ─── */
const visitorIcons = [
  <LayoutTemplate size={24} className="text-[#e4a5ff]" />,
  <Sparkles size={24} className="text-[#e4a5ff]" />,
  <TrendingUp size={24} className="text-[#e4a5ff]" />,
];

const recruiterIcons = [
  <Users size={24} className="text-[#e4a5ff]" />,
  <Briefcase size={24} className="text-[#e4a5ff]" />,
  <Lightbulb size={24} className="text-[#e4a5ff]" />,
];

const developerIcons = [
  <Cpu size={24} className="text-[#e4a5ff]" />,
  <Server size={24} className="text-[#e4a5ff]" />,
  <BookOpen size={24} className="text-[#e4a5ff]" />,
];

export function About() {
  const { t } = useLanguage();
  const { viewMode } = useViewMode();

  /* Dados adaptativos por perfil */
  const profileData = t.about[viewMode];
  const icons =
    viewMode === "visitor"
      ? visitorIcons
      : viewMode === "recruiter"
      ? recruiterIcons
      : developerIcons;

  /* Label da seção de cards */
  const cardsTitle =
    viewMode === "visitor"
      ? (profileData as typeof t.about.visitor).objectivesTitle
      : (profileData as typeof t.about.recruiter).highlightsTitle;

  /* Items dos cards */
  const cards =
    viewMode === "visitor"
      ? (profileData as typeof t.about.visitor).objectives
      : (profileData as typeof t.about.recruiter).highlights;

  /* Label e items das tags/interesse */
  const tagsTitle = profileData.interestsTitle;
  const tags = profileData.interests;

  /* Ícone do overview muda por perfil */
  const OverviewIcon =
    viewMode === "visitor"
      ? Terminal
      : viewMode === "recruiter"
      ? Briefcase
      : Code2;

  const overviewLabel =
    viewMode === "visitor"
      ? "Overview"
      : viewMode === "recruiter"
      ? "Perfil Profissional"
      : "Tech Profile";

  return (
    <div className="relative flex-1 flex flex-col justify-between overflow-hidden">
      {/* ─── Fundo Atmosférico com Glow e Ondas de Seda ─── */}
      <div
        className="absolute inset-0 pointer-events-none overflow-hidden z-0"
        aria-hidden="true"
      >
        {/* Glow Superior */}
        <div
          className="absolute -top-20 left-[15%] w-150 h-125"
          style={{
            background:
              "radial-gradient(ellipse 65% 55% at 50% 40%, rgba(168, 36, 179, 0.2) 0%, rgba(106, 0, 200, 0.08) 50%, transparent 75%)",
            filter: "blur(50px)",
          }}
        />

        {/* Curvas de Seda Violeta em SVG */}
        <svg
          className="absolute bottom-0 right-0 w-full h-[70%] opacity-45 transition-opacity duration-1000"
          viewBox="0 0 1440 700"
          fill="none"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              id="aboutWaveGrad1"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#2c0848" stopOpacity="0.75" />
              <stop offset="60%" stopColor="#4e0e78" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#180d1a" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="aboutStrokeGrad"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="rgba(176, 38, 255, 0)" />
              <stop offset="40%" stopColor="rgba(217, 70, 239, 0.4)" />
              <stop offset="80%" stopColor="rgba(168, 85, 247, 0.55)" />
              <stop offset="100%" stopColor="rgba(176, 38, 255, 0.05)" />
            </linearGradient>
          </defs>
          <path
            d="M-50,600 C300,480 600,620 980,460 C1220,360 1380,400 1550,300 L1550,750 L-50,750 Z"
            fill="url(#aboutWaveGrad1)"
          />
          <path
            d="M0,640 C350,420 750,540 1150,340 C1320,260 1440,290 1550,230"
            stroke="url(#aboutStrokeGrad)"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </div>

      {/* ─── Conteúdo Principal ───────────────────────────────────────── */}
      <main className="flex-1 flex flex-col justify-start px-6 sm:px-12 md:px-20 lg:px-24 pt-1 pb-16 md:pb-20 relative z-10 max-w-6xl">
        {/* ─── 1. Breve Descrição (Bio) ─── */}
        <section
          className="mb-8 md:mb-10"
          style={{
            animation: "aboutFadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) both",
          }}
        >
          <div className="flex items-center gap-3 mb-3 text-[#d946ef]">
            <OverviewIcon
              size={20}
              className="text-[#d946ef] drop-shadow-[0_0_8px_rgba(217,70,239,0.6)]"
            />
            <span className="text-xs sm:text-sm uppercase tracking-widest font-sans font-medium text-white/60">
              {overviewLabel}
            </span>
          </div>

          <p className="text-base sm:text-lg md:text-[1.2rem] text-white/95 leading-relaxed md:leading-8 font-serif font-normal tracking-wide max-w-4xl drop-shadow-[0_2px_15px_rgba(0,0,0,0.6)] transition-all duration-500">
            {profileData.description}
          </p>
        </section>

        {/* ─── 2. Cards (Objetivos / Destaques) ─── */}
        <section
          className="mb-8 md:mb-10"
          style={{
            animation: "aboutFadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) both",
            animationDelay: "0.15s",
          }}
        >
          <div className="flex items-center gap-3 mb-5 text-[#d946ef]">
            <Target
              size={20}
              className="text-[#d946ef] drop-shadow-[0_0_8px_rgba(217,70,239,0.6)]"
            />
            <h2 className="text-lg sm:text-xl md:text-2xl font-serif text-white tracking-wide">
              {cardsTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {cards.map((card, idx) => (
              <div
                key={card.id}
                className="group relative flex flex-col justify-between p-5 sm:p-6 rounded-2xl md:rounded-3xl bg-[#160a1a]/85 hover:bg-[#200e28]/90 border border-[#9315dc]/40 hover:border-[#d946ef] backdrop-blur-xl shadow-[0_8px_25px_rgba(0,0,0,0.55)] transition-all duration-300 hover:-translate-y-1"
              >
                <div>
                  {/* Ícone com Glow */}
                  <div className="w-11 h-11 rounded-2xl bg-[#2a0e36] border border-[#a824b3]/50 group-hover:border-[#d946ef] flex items-center justify-center mb-4 transition-colors shadow-[0_0_15px_rgba(176,38,255,0.2)]">
                    {icons[idx % icons.length]}
                  </div>

                  {/* Título */}
                  <h3 className="text-lg sm:text-xl font-serif font-normal text-white group-hover:text-[#e4a5ff] transition-colors mb-2.5">
                    {card.title}
                  </h3>

                  {/* Descrição */}
                  <p className="text-white/80 text-xs sm:text-sm leading-relaxed font-sans font-light">
                    {card.description}
                  </p>
                </div>

                {/* Linha decorativa inferior no hover */}
                <div className="w-8 h-1 bg-[#a824b3]/40 group-hover:w-full group-hover:bg-[#d946ef] rounded-full mt-5 transition-all duration-500" />
              </div>
            ))}
          </div>
        </section>

        {/* ─── 3. Tags de Interesses / Stack ─── */}
        <section
          style={{
            animation: "aboutFadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) both",
            animationDelay: "0.25s",
          }}
        >
          <div className="flex items-center gap-3 mb-4 text-[#d946ef]">
            <Sparkles
              size={20}
              className="text-[#d946ef] drop-shadow-[0_0_8px_rgba(217,70,239,0.6)]"
            />
            <h2 className="text-lg sm:text-xl md:text-2xl font-serif text-white tracking-wide">
              {tagsTitle}
            </h2>
          </div>

          <div className="flex flex-wrap gap-2.5 sm:gap-3">
            {tags.map((tag, idx) => (
              <div
                key={idx}
                className="group flex items-center gap-2.5 px-4 sm:px-4.5 py-2 rounded-full bg-[#180a1d]/80 hover:bg-[#280e32]/95 border border-[#9315dc]/40 hover:border-[#d946ef] backdrop-blur-md transition-all duration-300 hover:scale-105 shadow-[0_4px_15px_rgba(0,0,0,0.4)] cursor-default"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-[#b026ff] group-hover:bg-[#d946ef] group-hover:shadow-[0_0_10px_#d946ef] transition-all" />
                <span className="text-xs sm:text-sm font-sans font-normal text-white/90 group-hover:text-white transition-colors">
                  {tag}
                </span>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* ─── Animações CSS ────────────────────────────────────────────── */}
      <style>{`
        @keyframes aboutFadeIn {
          from {
            opacity: 0;
            transform: translateY(16px);
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
