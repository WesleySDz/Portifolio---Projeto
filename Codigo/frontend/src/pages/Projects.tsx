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
      <div className="absolute inset-0 bg-linear-to-r from-transparent via-purple-950/20 to-transparent pointer-events-none opacity-60 blur-3xl"></div>

      <div className="relative z-10 max-w-5xl mt-4">
        {/* Parágrafo descritivo no topo */}
        <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl leading-relaxed mb-8 md:mb-12">
          {t.projects.description}
        </p>

        {/* Linha do Tempo de Projetos */}
        <div className="relative pl-5 sm:pl-8 md:pl-10 border-l border-white/20 flex flex-col gap-8 md:gap-10">
          {t.projects.items.map((item) => {
            const isOpen = !!openItems[item.id];
            return (
              <div key={item.id} className="relative group">
                {/* Indicador de Bolinha na linha do tempo */}
                <div
                  className={`absolute -left-[27px] sm:-left-[39px] md:-left-[47px] top-6 w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 transition-all duration-300 ${
                    isOpen
                      ? "bg-purple-600 border-purple-400 shadow-[0_0_12px_#a824b3]"
                      : "bg-[#241729] border-gray-400"
                  }`}
                />

                {/* Data com ícone de Calendário acima do Card */}
                <div className="flex items-center gap-2 text-purple-400 font-medium mb-3">
                  <Calendar size={20} />
                  <span className="text-base md:text-lg tracking-wide">{item.date}</span>
                </div>

                {/* Card de Projeto */}
                <div className="bg-[#180d1b]/70 border border-[#a824b3] rounded-2xl p-4 sm:p-6 md:p-8 transition-all duration-300 shadow-xl hover:border-purple-400">
                  <div
                    onClick={() => toggleItem(item.id)}
                    className="flex justify-between items-center cursor-pointer select-none gap-2"
                  >
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-serif font-normal text-white">
                      {item.title}
                    </h3>
                    <button
                      className="bg-transparent border-none text-purple-300 cursor-pointer p-1 shrink-0"
                      aria-label="Expand project"
                    >
                      {isOpen ? <ChevronUp size={22} /> : <ChevronDown size={22} />}
                    </button>
                  </div>

                  {/* Conteúdo Expandido do Projeto */}
                  {isOpen && (
                    <div className="mt-4 sm:mt-6 pt-4 border-t border-white/10 flex flex-col md:flex-row gap-6 md:gap-8 items-start justify-between animate-fadeIn">
                      <div className="flex-1 flex flex-col justify-between h-full w-full">
                        <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed mb-6">
                          {item.description}
                        </p>

                        {/* Badges de Tecnologias */}
                        <div className="flex flex-wrap gap-2 sm:gap-3">
                          {item.tags.map((tag, idx) => (
                            <span
                              key={idx}
                              className="flex items-center gap-1.5 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-purple-950/80 border border-purple-800/60 text-purple-200 text-xs sm:text-sm md:text-base font-medium"
                            >
                              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-purple-500"></span>
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Mockup do Computador/Preview */}
                      <div className="relative flex flex-col items-center justify-center bg-[#25152a]/60 border border-white/10 rounded-xl p-4 md:p-6 min-w-full md:min-w-[280px] w-full md:w-auto h-36 md:h-44 group-hover:border-purple-400/50 transition-colors shrink-0">
                        <Monitor size={64} className="text-purple-900/60" />
                        
                        {/* Ícone de Link Externo */}
                        {item.link && (
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="absolute top-3 right-3 text-purple-400 hover:text-white transition-colors"
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
