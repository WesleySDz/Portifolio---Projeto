import { useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { ChevronDown, ChevronUp } from "lucide-react";

export function Experience() {
  const { t } = useLanguage();
  // Começa com o primeiro item aberto por padrão (como na imagem)
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({ "1": true });

  const toggleItem = (id: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <main className="flex-1 flex flex-col justify-center px-10 md:px-20 relative overflow-hidden pb-32">
      {/* Background glow sutil */}
      <div className="absolute inset-0 bg-linear-to-r from-transparent via-accent-secondary/15 to-transparent pointer-events-none opacity-50 blur-3xl" />

      <div className="relative z-10 max-w-4xl mt-4">
        <p className="text-lg md:text-xl text-(--text-secondary) max-w-3xl leading-relaxed mb-12 font-sans font-light">
          {t.experience.description}
        </p>

        {/* Lista de Experiências Accordion/Card */}
        <div className="flex flex-col gap-6 w-full">
          {t.experience.items.map((item) => {
            const isOpen = !!openItems[item.id];
            return (
              <div
                key={item.id}
                className="card-interactive p-6 md:p-8"
              >
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full flex justify-between items-start text-left bg-transparent border-none cursor-pointer p-0 group"
                  aria-expanded={isOpen}
                >
                  <div className="flex flex-col gap-1">
                    <h3 className="text-xl md:text-2xl font-semibold text-(--text-primary) tracking-wide font-serif">
                      {item.title}
                    </h3>
                    <span className="text-accent-light text-lg font-light">
                      {item.company}
                    </span>
                  </div>

                  <div className="flex items-center gap-4 text-(--text-muted)">
                    <span className="text-base md:text-lg font-light text-(--text-subtle)">
                      {item.period}
                    </span>
                    {isOpen ? (
                      <ChevronUp size={24} className="text-accent-light" />
                    ) : (
                      <ChevronDown size={24} className="text-accent-light group-hover:translate-y-0.5 transition-transform" />
                    )}
                  </div>
                </button>

                {isOpen && (
                  <div className="mt-4 pt-4 border-t border-(--border-subtle) animate-fadeIn">
                    <p className="text-(--text-secondary) text-base md:text-lg leading-relaxed m-0 font-sans">
                      {item.description}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
