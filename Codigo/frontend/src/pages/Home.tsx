import { useLanguage } from "../contexts/LanguageContext";
import { TechCarousel } from "../components/TechCarousel";

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

      <TechCarousel />
    </>
  );
}
