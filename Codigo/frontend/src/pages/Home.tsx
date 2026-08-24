import { useLanguage } from "../contexts/LanguageContext";

export function Home() {
  const { t } = useLanguage();

  return (
    <>
      <main className="flex-1 flex flex-col justify-center px-10 md:px-20 pb-48">
        <p className="text-3xl md:text-4xl m-0 leading-tight">{t.home.im}</p>
        <h1 className="text-5xl md:text-6xl m-0 font-normal leading-tight mt-1">
          Wesley Domingos
        </h1>
        <h2 className="text-4xl md:text-5xl m-0 font-normal leading-tight text-gray-300 mt-2">
          {t.home.role}
        </h2>
      </main>

      <section className="absolute bottom-30 w-full bg-black/40 py-5">
        <ul className="flex list-none p-0 m-0 gap-12 md:gap-16 pl-10 md:pl-20 items-center overflow-x-hidden">
          <li>
            <img src="/java-icon.svg" alt="Java" className="h-[50px] w-auto" />
          </li>
          <li>
            <img src="/react-icon.svg" alt="React" className="h-12.5 w-auto" />
          </li>
          <li>
            <img src="/cpp-icon.svg" alt="C++" className="h-12.5 w-auto" />
          </li>
          <li>
            <img
              src="/ts-icon.svg"
              alt="TypeScript"
              className="h-12.5 w-auto"
            />
          </li>
          <li>
            <img src="/java-icon.svg" alt="Java" className="h-12.5 w-auto" />
          </li>
          <li>
            <img src="/react-icon.svg" alt="React" className="h-12.5 w-auto" />
          </li>
          <li>
            <img src="/cpp-icon.svg" alt="C++" className="h-12.5 w-auto" />
          </li>
          <li>
            <img
              src="/ts-icon.svg"
              alt="TypeScript"
              className="h-12.5 w-auto"
            />
          </li>
        </ul>
      </section>

      <button
        aria-label={t.home.musicPlayer}
        className="absolute bottom-10 right-10 md:right-20 border-[2.5px] border-[#8e24aa] rounded-full p-1.5 cursor-pointer flex items-center justify-center w-17.5 h-17.5 transition-transform duration-300 hover:scale-110"
      >
        <img
          src="/vinyl-icon.svg"
          alt="Vinyl Record Player"
          className="w-full h-full rounded-full"
        />
      </button>
    </>
  );
}
