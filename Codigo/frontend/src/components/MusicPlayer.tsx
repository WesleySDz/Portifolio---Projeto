import { useLanguage } from "../contexts/LanguageContext";

export function MusicPlayer() {
  const { t } = useLanguage();

  return (
    <button
      aria-label={t.home.musicPlayer}
      className="absolute bottom-10 right-10 md:right-20 border-[2.5px] border-[#8e24aa] rounded-full p-1.5 cursor-pointer flex items-center justify-center w-17.5 h-17.5 transition-transform duration-300 hover:scale-110 z-20"
    >
      <img
        src="/vinyl-icon.svg"
        alt={t.vinyl.title}
        className="w-full h-full rounded-full"
      />
    </button>
  );
}
