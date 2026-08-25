import { useLanguage } from "../contexts/LanguageContext";

export function MusicPlayer() {
  const { t } = useLanguage();

  return (
    <button
      aria-label={t.home.musicPlayer}
      className="fixed bottom-6 right-6 md:bottom-10 md:right-20 border-[2.5px] border-[#8e24aa] rounded-full p-1.5 cursor-pointer flex items-center justify-center w-14 h-14 md:w-17.5 md:h-17.5 transition-transform duration-300 hover:scale-110 z-40 bg-[#180d1a]"
    >
      <img
        src="/vinyl-icon.svg"
        alt={t.vinyl.title}
        className="w-full h-full rounded-full"
      />
    </button>
  );
}
