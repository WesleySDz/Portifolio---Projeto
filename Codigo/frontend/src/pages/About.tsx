import { useLanguage } from "../contexts/LanguageContext";

export function About() {
  const { t } = useLanguage();

  return (
    <main className="flex-1 flex flex-col justify-center px-10 md:px-24 py-20 relative z-10 overflow-hidden">
      {/* Background glow sutil */}
      <div className="absolute inset-0 bg-linear-to-r from-transparent via-accent-secondary/15 to-transparent pointer-events-none opacity-50 blur-3xl" />

      <div className="max-w-5xl mx-auto w-full relative z-10">
        {/* Description */}
        <p className="text-lg md:text-xl text-(--text-secondary) leading-relaxed mb-20 max-w-4xl font-sans font-light">
          {t.about.description}
        </p>

        {/* Objective Cards */}
        <div className="flex flex-row items-stretch justify-between gap-3 md:gap-4 h-32 md:h-44 w-full">
          {/* Card 1 */}
          <div className="flex-1 card-surface-muted flex items-center justify-center cursor-default">
            <span className="text-lg md:text-xl text-(--text-primary) font-serif font-medium">Objective</span>
          </div>
          
          {/* Card 2 */}
          <div className="flex-1 card-surface-muted flex items-center justify-center cursor-default">
            <span className="text-lg md:text-xl text-(--text-primary)-serif font-medium">Objective</span>
          </div>
          
          {/* Card 3 */}
          <div className="flex-1 card-surface-muted flex items-center justify-center cursor-default">
            <span className="text-lg md:text-xl text-(--text-primary) font-serif font-medium">Objective</span>
          </div>
        </div>
      </div>
    </main>
  );
}
