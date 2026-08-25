import { useLanguage } from "../contexts/LanguageContext";

export function About() {
  const { t } = useLanguage();

  return (
    <main className="flex-1 flex flex-col justify-center px-10 md:px-20 pb-20">
      <p className="text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed">
        {t.about.description}
      </p>
    </main>
  );
}
