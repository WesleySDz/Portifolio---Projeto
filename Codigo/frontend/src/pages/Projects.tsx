import { useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { useViewMode } from "../contexts/ViewModeContext";
import {
  ChevronDown,
  ChevronRight,
  Database,
  Server,
  Globe,
  Shield,
  Layers,
} from "lucide-react";
import { CalendarCustomIcon } from "../components/projects/CalendarCustomIcon";
import { ProjectBackground } from "../components/projects/ProjectBackground";
import { ProjectPreview } from "../components/projects/ProjectPreview";
import { ProjectLightbox } from "../components/projects/ProjectLightbox";

/* ─── GitHub SVG Icon ─── */
const GithubIcon = ({ size = 17 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.207 11.387.6.11.793-.26.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
);

/* ─── Tipos ─── */
interface TechDetails {
  stack: string;
  frontend: string;
  backend: string;
  database: string;
  architecture: string;
  highlights: string[];
}

interface ProjectItem {
  id: string;
  title: string;
  date: string;
  description: string;
  tags: string[];
  link: string;
  image?: string;
  techDetails?: TechDetails;
}

/* ─── Camada Técnica (modo Developer) ─── */
function TechDetailsPanel({
  details,
  link,
}: {
  details: TechDetails;
  link: string;
}) {
  return (
    <div
      className="mt-6 pt-6 border-t border-[#9315dc]/30"
      style={{
        animation: "techExpand 0.4s cubic-bezier(0.16, 1, 0.3, 1) both",
      }}
    >
      {/* CTA GitHub de alta prioridade */}
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2.5 mb-6 px-5 py-2.5 rounded-xl text-sm font-medium font-sans no-underline transition-all duration-300 hover:scale-105"
        style={{
          background:
            "linear-gradient(135deg, rgba(176,38,255,0.2) 0%, rgba(106,0,200,0.15) 100%)",
          border: "1px solid rgba(176,38,255,0.5)",
          color: "#e4a5ff",
          boxShadow: "0 0 20px rgba(176,38,255,0.15)",
        }}
      >
        <GithubIcon size={17} />
        <span>Ver repositório no GitHub</span>
        <ChevronRight size={14} className="opacity-70" />
      </a>

      {/* Stack */}
      <div className="mb-4">
        <div className="flex items-center gap-2 mb-2">
          <Layers size={14} className="text-[#d946ef]" />
          <span className="text-[10px] uppercase tracking-widest text-white/40 font-sans">
            Stack
          </span>
        </div>
        <p className="text-sm font-mono text-[#e4a5ff] leading-relaxed pl-5">
          {details.stack}
        </p>
      </div>

      {/* Grid de detalhes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
        <TechDetailBlock
          icon={Globe}
          label="Frontend"
          value={details.frontend}
        />
        <TechDetailBlock
          icon={Server}
          label="Backend"
          value={details.backend}
        />
        <TechDetailBlock
          icon={Database}
          label="Persistência"
          value={details.database}
        />
        <TechDetailBlock
          icon={Shield}
          label="Arquitetura"
          value={details.architecture}
        />
      </div>

      {/* Highlights */}
      <div>
        <span className="text-[10px] uppercase tracking-widest text-white/40 font-sans block mb-2">
          Destaques de implementação
        </span>
        <ul className="flex flex-col gap-1.5 pl-0 m-0 list-none">
          {details.highlights.map((h, i) => (
            <li key={i} className="flex items-start gap-2.5">
              <span
                className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                style={{ background: "#b026ff", boxShadow: "0 0 6px #b026ff" }}
              />
              <span className="text-white/75 text-xs sm:text-sm font-sans leading-relaxed">
                {h}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function TechDetailBlock({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof Globe;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-xl p-3.5 bg-[#0e0515]/60 border border-[#9315dc]/20">
      <div className="flex items-center gap-1.5 mb-1.5">
        <Icon size={13} className="text-[#d946ef]" />
        <span className="text-[10px] uppercase tracking-widest text-white/40 font-sans">
          {label}
        </span>
      </div>
      <p className="text-white/70 text-xs font-sans leading-relaxed m-0">
        {value}
      </p>
    </div>
  );
}

export function Projects() {
  const { t } = useLanguage();
  const { viewMode } = useViewMode();
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({
    "1": true,
  });
  const [lightboxImage, setLightboxImage] = useState<{
    src: string;
    title: string;
    link?: string;
  } | null>(null);

  const toggleItem = (id: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleOpenImage = (image: string, title: string, link?: string) => {
    setLightboxImage({ src: image, title, link });
  };

  /* Dados adaptativos por perfil */
  const profileData = t.projects[viewMode];
  const items = profileData.items as ProjectItem[];

  const isDeveloper = viewMode === "developer";

  return (
    <div className="relative flex-1 flex flex-col justify-between overflow-hidden">
      {/* ─── Efeitos de Iluminação e Ondas de Fundo (Silk Mesh) ─── */}
      <ProjectBackground />

      {/* ─── Conteúdo Principal da Página ─────────────────────────────── */}
      <main className="flex-1 flex flex-col justify-start px-6 sm:px-12 md:px-20 lg:px-24 pt-2 pb-24 relative z-10">
        {/* Parágrafo descritivo no topo */}
        <div
          className="max-w-4xl mb-10 md:mb-12"
          style={{
            animation: "projFadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) both",
          }}
        >
          <p className="text-base sm:text-lg md:text-[1.18rem] text-white/90 leading-relaxed md:leading-8 font-serif font-normal tracking-wide transition-all duration-500">
            {profileData.description}
          </p>
        </div>

        {/* Linha do Tempo Vertical de Projetos */}
        <div className="relative pl-7 sm:pl-10 md:pl-12 border-l-[2.5px] border-white/20 flex flex-col gap-6 md:gap-8 max-w-5xl">
          {items.map((item) => {
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

                          <p className="text-white/85 text-base sm:text-[1.12rem] leading-relaxed md:leading-8 font-serif font-normal mb-8 max-w-2xl transition-all duration-500">
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

                          {/* CTA GitHub para não-developer */}
                          {!isDeveloper && item.link && (
                            <a
                              href={item.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 mt-6 text-sm text-white/50 hover:text-[#e4a5ff] no-underline transition-colors font-sans"
                            >
                              <GithubIcon size={15} />
                              <span>GitHub</span>
                            </a>
                          )}

                          {/* Camada técnica — modo Developer */}
                          {isDeveloper && item.techDetails && (
                            <TechDetailsPanel
                              details={item.techDetails}
                              link={item.link}
                            />
                          )}
                        </div>

                        {/* Lado Direito: Preview da Imagem do Projeto com Lightbox */}
                        <ProjectPreview
                          image={item.image}
                          title={item.title}
                          link={item.link}
                          onOpenImage={handleOpenImage}
                        />
                      </div>
                    </div>
                  </div>
                ) : (
                  /* ─── ITEM RECOLHIDO ─── */
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

      {/* ─── Lightbox Modal para Visualização em Tela Cheia ─── */}
      <ProjectLightbox
        image={lightboxImage}
        onClose={() => setLightboxImage(null)}
      />

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
        @keyframes techExpand {
          from {
            opacity: 0;
            transform: translateY(10px);
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
