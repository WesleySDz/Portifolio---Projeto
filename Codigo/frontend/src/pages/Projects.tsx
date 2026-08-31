import { useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { Calendar, ExternalLink, ChevronDown, ChevronUp, Monitor } from "lucide-react";

export function Projects() {
  const { t } = useLanguage();
  // Primeiro item expandido por padrão conforme o design enviado
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({ "1": true });

  const toggleItem = (id: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <main className="flex-1 flex flex-col justify-center px-4 sm:px-10 md:px-20 relative overflow-hidden pb-36">
      {/* Background glow com linhas/ondas roxas sutis */}
      <div className="absolute inset-0 bg-linear-to-r from-transparent via-accent-secondary/15 to-transparent pointer-events-none opacity-60 blur-3xl" />

      <div className="relative z-10 max-w-5xl mt-4">
        {/* Parágrafo descritivo no topo */}
        <p className="text-base sm:text-lg md:text-xl text-(--text-secondary) max-w-3xl leading-relaxed mb-8 md:mb-12 font-sans font-light">
          {t.projects.description}
        </p>

        {/* Linha do Tempo de Projetos */}
        <div className="relative pl-5 sm:pl-8 md:pl-10 border-l border-(--border-subtle) flex flex-col gap-8 md:gap-10">
          {t.projects.items.map((item) => {
            const isOpen = !!openItems[item.id];
            return (
              <div key={item.id} className="relative group">
                {/* Indicador de Bolinha na linha do tempo */}
                <div
                  className={`absolute -left-6.75 sm:-left-9.75 md:-left-11.75 top-6 w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 transition-all duration-300 ${
                    isOpen
                      ? "bg-accent border-accent-light shadow-[0_0_12px_var(--color-accent)]"
                      : "bg-(--bg-page-from) border-(--border-subtle)"
                  }`}
                />

                {/* Data com ícone de Calendário acima do Card */}
                <div className="flex items-center gap-2 text-accent-light font-medium mb-3">
                  <Calendar size={20} />
                  <span className="text-base md:text-lg tracking-wide">{item.date}</span>
                </div>

                {/* Card de Projeto */}
                <div className="card-interactive p-4 sm:p-6 md:p-8">
                  <div
                    onClick={() => toggleItem(item.id)}
                    className="flex justify-between items-center cursor-pointer select-none gap-2"
                  >
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-serif font-normal text-(--text-primary)">
                      {item.title}
                    </h3>
                    <button
                      className="bg-transparent border-none text-accent-light cursor-pointer p-1 shrink-0"
                      aria-label="Expand project"
                    >
                      {isOpen ? <ChevronUp size={22} /> : <ChevronDown size={22} />}
                    </button>
                  </div>

                  {/* Conteúdo Expandido do Projeto */}
                  {isOpen && (
                    <div className="mt-4 sm:mt-6 pt-4 border-t border-(--border-subtle) flex flex-col md:flex-row gap-6 md:gap-8 items-start justify-between animate-fadeIn">
                      <div className="flex-1 flex flex-col justify-between h-full w-full">
                        <p className="text-(--text-secondary)-sm sm:text-base md:text-lg leading-relaxed mb-6 font-sans">
                          {item.description}
                        </p>

                        {/* Badges de Tecnologias */}
                        <div className="flex flex-wrap gap-2 sm:gap-3">
                          {item.tags.map((tag, idx) => (
                            <span
                              key={idx}
                              className="badge-tech text-xs sm:text-sm md:text-base"
                            >
                              <span className="badge-tech-dot"></span>
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Mockup do Computador/Preview */}
                      <div className="relative flex flex-col items-center justify-center bg-(--bg-surface-elevated) border border-(--border-subtle) rounded-xl p-4 md:p-6 min-w-full md:min-w-70 w-full md:w-auto h-36 md:h-44 group-hover:border-(--border-accent) transition-colors shrink-0">
                        <Monitor size={64} className="text-accent-secondary/50" />
                        
                        {/* Ícone de Link Externo */}
                        {item.link && (
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="absolute top-3 right-3 text-accent-light hover:text-white transition-colors"
                            title="Ver projeto"
                          >
                            <ExternalLink size={22} />
                          </a>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
