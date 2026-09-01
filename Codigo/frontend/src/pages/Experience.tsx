import { useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { ChevronDown, Calendar } from "lucide-react";
import { ExperienceBackground } from "../components/experience/ExperienceBackground";

export function Experience() {
  const { t } = useLanguage();
  // Começa com o primeiro item aberto por padrão
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
      {/* ─── Fundo Único ─── */}
      <ExperienceBackground />

      {/* ─── Conteúdo Principal ───────────────────────────────────────── */}
      <main className="flex-1 flex flex-col justify-start px-6 sm:px-12 md:px-20 lg:px-24 pt-2 pb-24 relative z-10 max-w-5xl">
        {/* Parágrafo descritivo no topo */}
        <section
          className="mb-10 md:mb-12"
          style={{
            animation: "expFadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) both",
          }}
        >
          <p className="text-base sm:text-lg md:text-[1.2rem] text-white/95 leading-relaxed md:leading-8 font-serif font-normal tracking-wide max-w-4xl drop-shadow-[0_2px_15px_rgba(0,0,0,0.6)]">
            {t.experience.description}
          </p>
        </section>

        {/* Lista de Experiências (Accordion Cards) */}
        <div
          className="flex flex-col gap-5 md:gap-6 w-full"
          style={{
            animation: "expFadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) both",
            animationDelay: "0.15s",
          }}
        >
          {t.experience.items.map((item) => {
            const isOpen = !!openItems[item.id];
            return (
              <div
                key={item.id}
                className="group rounded-2xl md:rounded-3xl bg-[#160a1a]/85 hover:bg-[#200e28]/90 border border-[#9315dc]/40 hover:border-[#d946ef] backdrop-blur-xl shadow-[0_8px_25px_rgba(0,0,0,0.55)] transition-all duration-300 overflow-hidden"
              >
                {/* Cabeçalho Clicável do Card */}
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center text-left bg-transparent border-none cursor-pointer p-6 sm:p-7 md:p-8 gap-4 select-none focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex flex-col gap-1.5">
                    <h3 className="text-xl sm:text-2xl font-serif font-normal text-white group-hover:text-[#e4a5ff] transition-colors">
                      {item.title}
                    </h3>
                    <span className="text-[#d946ef] text-base sm:text-lg font-sans font-medium tracking-wide">
                      {item.company}
                    </span>
                  </div>

                  <div className="flex items-center gap-4 text-white/80 self-end sm:self-center">
                    <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#2a0e36]/80 border border-[#a824b3]/40 text-xs sm:text-sm font-sans font-normal text-white/80">
                      <Calendar size={14} className="text-[#d946ef]" />
                      <span>{item.period}</span>
                    </div>

                    <div
                      className={`p-1.5 rounded-full text-[#d946ef] transition-transform duration-300 ${
                        isOpen
                          ? "rotate-180 text-white"
                          : "group-hover:translate-y-0.5"
                      }`}
                    >
                      <ChevronDown size={22} />
                    </div>
                  </div>
                </button>

                {/* Conteúdo Expandido */}
                {isOpen && (
                  <div
                    className="px-6 sm:px-7 md:px-8 pb-6 sm:pb-7 md:pb-8 pt-2 border-t border-[#9315dc]/20"
                    style={{
                      animation: "expContentFade 0.35s ease-out forwards",
                    }}
                  >
                    <p className="text-white/85 text-sm sm:text-base md:text-[1.05rem] leading-relaxed font-sans font-light m-0">
                      {item.description}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </main>

      {/* ─── Animações CSS ────────────────────────────────────────────── */}
      <style>{`
        @keyframes expFadeIn {
          from {
            opacity: 0;
            transform: translateY(16px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes expContentFade {
          from {
            opacity: 0;
            transform: translateY(-6px);
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
