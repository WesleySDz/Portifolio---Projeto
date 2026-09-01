import { useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { ChevronDown } from "lucide-react";
import { CalendarCustomIcon } from "../components/projects/CalendarCustomIcon";
import { ProjectBackground } from "../components/projects/ProjectBackground";
import { ProjectPreview } from "../components/projects/ProjectPreview";
import { ProjectLightbox } from "../components/projects/ProjectLightbox";

export function Projects() {
  const { t } = useLanguage();
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
                  className={`absolute -left-[39px] sm:-left-[51px] md:-left-[59px] transition-all duration-300 flex items-center justify-center ${
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

                        {/* Lado Direito: Preview da Imagem do Projeto com Lightbox */}
                        <ProjectPreview
                          image={(item as { image?: string }).image}
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
      `}</style>
    </div>
  );
}
