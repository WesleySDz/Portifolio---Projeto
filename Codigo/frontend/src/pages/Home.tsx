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

    </>
  );
}
