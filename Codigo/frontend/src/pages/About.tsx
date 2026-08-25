import { useLanguage } from "../contexts/LanguageContext";

export function About() {
  const { t } = useLanguage();

  return (
    <main className="flex-1 flex flex-col justify-center px-10 md:px-24 py-20 relative z-10">
      <div className="max-w-5xl mx-auto w-full">

        {/* Description */}
        <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-20 max-w-4xl">
          {t.about.description}
        </p>

        {/* Objective Cards */}
        <div className="flex flex-row items-stretch justify-between gap-1 md:gap-2 h-32 md:h-44 w-full">
          {/* Card 1 */}
          <div className="flex-1 bg-[#3f2e46]/80 backdrop-blur-sm rounded-xl border border-white/5 flex items-center justify-center">
            <span className="text-lg md:text-xl text-white">Objective</span>
          </div>
          
          {/* Spacer */}
          {/* <div className="w-8 md:w-16 bg-[#55405c]/80 backdrop-blur-sm rounded-xl border border-white/5"></div> */}
          
          {/* Card 2 */}
          <div className="flex-1 bg-[#3f2e46]/80 backdrop-blur-sm rounded-xl border border-white/5 flex items-center justify-center">
            <span className="text-lg md:text-xl text-white">Objective</span>
          </div>
          
          {/* Spacer */}
          {/* <div className="w-8 md:w-16 bg-[#55405c]/80 backdrop-blur-sm rounded-xl border border-white/5"></div> */}
          
          {/* Card 3 */}
          <div className="flex-1 bg-[#3f2e46]/80 backdrop-blur-sm rounded-xl border border-white/5 flex items-center justify-center">
            <span className="text-lg md:text-xl text-white">Objective</span>
          </div>
        </div>
      </div>
    </main>
  );
}
