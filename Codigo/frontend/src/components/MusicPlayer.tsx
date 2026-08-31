import { useState, useRef, useEffect } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Volume2,
  Volume,
  ListMusic,
  X,
  Shuffle,
  Repeat,
  MoreVertical,
  Music,
} from "lucide-react";
import { TRACKS } from "../data/tracks";

export function MusicPlayer() {
  const { t } = useLanguage();

  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.5);
  const [isMuted, setIsMuted] = useState(false);
  const [isShuffle, setIsShuffle] = useState(false);
  const [isRepeat, setIsRepeat] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);

  // Fechar menu ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  // Gerenciamento de volume
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume;
    }
  }, [volume, isMuted]);

  // Reprodução quando a faixa muda
  useEffect(() => {
    if (audioRef.current && isPlaying) {
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) =>
          console.error("Playback interrupted:", error),
        );
      }
    }
  }, [currentTrackIndex, isPlaying]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current
        .play()
        .catch((e) => console.error("Playback failed:", e));
    }
    setIsPlaying(!isPlaying);
  };

  const toggleShuffle = () => setIsShuffle(!isShuffle);
  const toggleRepeat = () => setIsRepeat(!isRepeat);

  const playNext = () => {
    if (isRepeat) {
      if (audioRef.current) {
        audioRef.current.currentTime = 0;
        audioRef.current.play().catch((e) => console.error(e));
      }
      return;
    }

    if (isShuffle) {
      if (TRACKS.length <= 1) return;
      let nextIndex = currentTrackIndex;
      while (nextIndex === currentTrackIndex) {
        nextIndex = Math.floor(Math.random() * TRACKS.length);
      }
      setCurrentTrackIndex(nextIndex);
    } else {
      setCurrentTrackIndex((prev) => (prev + 1) % TRACKS.length);
    }
  };

  const handleAudioEnded = () => {
    if (isRepeat) {
      if (audioRef.current) {
        audioRef.current.currentTime = 0;
        audioRef.current.play().catch((e) => console.error(e));
      }
    } else {
      playNext();
    }
  };

  const playPrev = () => {
    setCurrentTrackIndex((prev) => (prev - 1 + TRACKS.length) % TRACKS.length);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setVolume(val);
    if (val > 0 && isMuted) {
      setIsMuted(false);
    }
  };

  const toggleMute = () => {
    if (isMuted) {
      setIsMuted(false);
      if (volume === 0) setVolume(0.5);
    } else {
      setIsMuted(true);
    }
  };

  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setProgress(val);
    if (audioRef.current) {
      audioRef.current.currentTime = val;
    }
  };

  const selectTrack = (index: number) => {
    setCurrentTrackIndex(index);
    setIsPlaying(true);
  };

  const formatTime = (time: number) => {
    if (isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <div
      className="fixed bottom-6 right-6 md:bottom-10 md:right-10 lg:right-20 z-40 flex flex-col items-end"
      ref={menuRef}
    >
      <audio
        ref={audioRef}
        src={TRACKS[currentTrackIndex].url}
        onTimeUpdate={(e) => setProgress(e.currentTarget.currentTime)}
        onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
        onEnded={handleAudioEnded}
      />

      {/* Popover do Menu do Player */}
      <div
        className={`
          mb-6 w-85 md:w-95 bg-(--bg-dark) border border-(--border-accent) rounded-[28px] 
          shadow-(--shadow-modal) p-6 text-white overflow-hidden 
          transition-all duration-300 ease-out origin-bottom-right
          ${isOpen ? "opacity-100 scale-100 translate-y-0 pointer-events-auto" : "opacity-0 scale-90 translate-y-8 pointer-events-none absolute bottom-full right-0"}
        `}
      >
        {/* Cabeçalho */}
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-bold flex items-center gap-2 text-base font-serif">
            <ListMusic size={20} className="text-accent" />
            {t.musicPlayer?.title || t.home?.musicPlayer || "Music Player"}
          </h3>
          <button
            onClick={() => setIsOpen(false)}
            className="text-(--text-muted)r:text-white transition-colors cursor-pointer"
          >
            <X size={20} />
          </button>
        </div>

        {/* Seção da Lista de Músicas */}
        <div className="mb-6">
          <div className="flex items-center mb-3">
            <h4 className="text-[11px] text-accent-light font-bold uppercase tracking-[0.2em]">
              {t.musicPlayer?.playlist || "Playlist"}
            </h4>
          </div>
          <ul className="space-y-1.5 max-h-48 overflow-y-auto pr-1 custom-scrollbar">
            {TRACKS.map((track, idx) => (
              <li key={track.id}>
                <button
                  onClick={() => selectTrack(idx)}
                  className={`w-full text-left px-3 py-2.5 rounded-xl text-sm transition-all flex items-center gap-3 cursor-pointer group
                    ${idx === currentTrackIndex ? "bg-accent/15 border border-(--border-accent) text-white shadow-(--shadow-neon-sm)" : "text-(--text-muted) hover:bg-(--bg-glass) hover:text-white border border-transparent"}`}
                >
                  <div className="w-8 h-8 rounded-lg relative overflow-hidden flex items-center justify-center bg-black/40 shrink-0 border border-(--border-subtle)">
                    {track.cover ? (
                      <img
                        src={track.cover}
                        alt={track.title}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    ) : (
                      <Music
                        size={14}
                        className={
                          idx === currentTrackIndex
                            ? "text-accent-light"
                            : "text-(--text-subtle)"
                        }
                      />
                    )}

                    {/* Camada do equalizador quando está tocando */}
                    {idx === currentTrackIndex && isPlaying && (
                      <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px] flex items-center justify-center">
                        <span className="flex items-end gap-0.5 h-3 w-4 justify-center">
                          <span className="w-0.5 bg-accent animate-[musicWave_1s_ease-in-out_infinite] h-3 rounded-full shadow-[0_0_5px_var(--color-accent)]"></span>
                          <span className="w-0.5 bg-accent animate-[musicWave_1s_ease-in-out_infinite_0.2s] h-2 rounded-full shadow-[0_0_5px_var(--color-accent)]"></span>
                          <span className="w-0.5 bg-accent animate-[musicWave_1s_ease-in-out_infinite_0.4s] h-3 rounded-full shadow-[0_0_5px_var(--color-accent)]"></span>
                        </span>
                      </div>
                    )}
                  </div>
                  <span className="w-3 text-center text-xs opacity-60 font-medium">
                    {idx + 1}
                  </span>
                  <span className="truncate flex-1 font-medium font-sans">
                    {track.title}
                  </span>
                  <span className="text-xs opacity-50 font-medium">
                    {track.duration || "0:00"}
                  </span>
                  <MoreVertical
                    size={14}
                    className="opacity-40 group-hover:opacity-100 transition-opacity"
                  />
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="h-px bg-linear-to-r from-transparent via-(--border-accent-subtle) to-transparent mb-6"></div>

        {/* Informações da Faixa Atual */}
        <div className="mb-6 flex justify-between items-center gap-3">
          <div className="min-w-0 flex-1">
            <p className="text-[11px] text-accent-light font-bold mb-3 uppercase tracking-[0.2em]">
              {t.musicPlayer?.nowPlaying || "Now Playing"}
            </p>
            <div className="flex items-center gap-4 min-w-0">
              <div className="w-13 h-13 shrink-0 rounded-xl bg-linear-to-br from-accent to-accent-secondary flex items-center justify-center shadow-(--shadow-neon-sm) border border-white/10 relative overflow-hidden">
                {TRACKS[currentTrackIndex].cover ? (
                  <img
                    src={TRACKS[currentTrackIndex].cover}
                    alt={TRACKS[currentTrackIndex].title}
                    className="w-full h-full object-cover rounded-xl"
                  />
                ) : (
                  <Music size={26} className="text-white/80 z-10" />
                )}
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-[15px] font-bold truncate text-white tracking-wide font-serif">
                  {TRACKS[currentTrackIndex].title}
                </p>
                <p className="text-xs text-(--text-muted) mt-1 truncate font-sans">
                  {TRACKS[currentTrackIndex].album
                    ? `${TRACKS[currentTrackIndex].album} • `
                    : ""}
                  {TRACKS[currentTrackIndex].year || "2024"}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Barra de Progresso */}
        <div className="flex items-center gap-3 mb-6 text-xs text-(--text-muted) font-medium">
          <span className="w-8 text-right">{formatTime(progress)}</span>
          <input
            type="range"
            min="0"
            max={duration || 100}
            value={progress}
            onChange={handleProgressChange}
            className="flex-1 h-1.5 bg-gray-800 rounded-full appearance-none cursor-pointer range-slider-custom"
          />
          <span className="w-8 text-left">{formatTime(duration)}</span>
        </div>

        {/* Controles */}
        <div className="flex items-center justify-between mb-8 px-4">
          <button
            onClick={toggleShuffle}
            title={t.musicPlayer?.shuffle || "Shuffle"}
            className={`transition-all cursor-pointer hover:scale-110 ${
              isShuffle
                ? "text-accent-light opacity-100 drop-shadow-[0_0_8px_var(--color-accent)]"
                : "text-(--text-muted)ity-60 hover:opacity-100"
            }`}
          >
            <Shuffle size={18} />
          </button>
          <div className="flex items-center gap-6">
            <button
              onClick={playPrev}
              className="text-(--text-secondary) hover:text-white hover:scale-110 transition-all cursor-pointer"
            >
              <SkipBack size={26} className="fill-current" />
            </button>
            <button
              onClick={togglePlay}
              className="w-15 h-15 flex items-center justify-center bg-accent hover:bg-accent-hover rounded-full text-white shadow-(--shadow-neon-md) hover:shadow-(--shadow-neon-lg) hover:scale-105 transition-all cursor-pointer border border-white/20"
            >
              {isPlaying ? (
                <Pause size={28} className="fill-current" />
              ) : (
                <Play size={28} className="fill-current translate-x-0.5" />
              )}
            </button>
            <button
              onClick={playNext}
              className="text-(--text-secondary) hover:text-white hover:scale-110 transition-all cursor-pointer"
            >
              <SkipForward size={26} className="fill-current" />
            </button>
          </div>
          <button
            onClick={toggleRepeat}
            title={t.musicPlayer?.repeat || "Repeat"}
            className={`transition-all cursor-pointer hover:scale-110 ${
              isRepeat
                ? "text-accent-light opacity-100 drop-shadow-[0_0_8px_var(--color-accent)]"
                : "text-(--text-muted) opacity-60 hover:opacity-100"
            }`}
          >
            <Repeat size={18} />
          </button>
        </div>

        {/* Controle de Volume */}
        <div className="flex items-center gap-3 px-1">
          <button
            onClick={toggleMute}
            className="text-(--text-muted) hover:text-white transition-colors cursor-pointer"
          >
            <Volume size={18} />
          </button>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={isMuted ? 0 : volume}
            onChange={handleVolumeChange}
            className="flex-1 h-1.5 bg-gray-800 rounded-full appearance-none cursor-pointer range-slider-custom"
          />
          <Volume2 size={18} className="text-(--text-muted)" />
        </div>
      </div>

      {/* Botão Flutuante (Toca-Discos de Vinil Interativo com Braço de Agulha) */}
      <button
        aria-label={t.home?.musicPlayer || "Music Player"}
        onClick={() => setIsOpen(!isOpen)}
        className={`
          border-[2.5px] border-accent rounded-full p-2 cursor-pointer flex items-center justify-center 
          w-16 h-16 md:w-18.75 md:h-18.75 transition-all duration-300 z-40 bg-(--bg-dark) relative overflow-hidden
          ${isOpen ? "scale-110 shadow-(--shadow-neon-md)" : "hover:scale-110 shadow-(--shadow-neon-sm)"}
          ${isPlaying && !isOpen ? "animate-[pulseShadow_2s_infinite]" : ""}
        `}
      >
        {/* SVG do Toca-Discos de Vinil */}
        <svg
          className="w-full h-full"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Disco de Vinil (Gira continuamente quando isPlaying = true) */}
          <g
            className={`origin-center transition-transform duration-700 ${isPlaying ? "animate-[spin_4s_linear_infinite]" : ""}`}
          >
            {/* Corpo do Vinil */}
            <circle
              cx="50"
              cy="50"
              r="44"
              fill="var(--bg-page-to)"
              stroke="var(--color-accent)"
              strokeWidth="2.5"
              strokeOpacity="0.9"
            />

            {/* Sulcos Ranhurados (Grooves) */}
            <path
              d="M 18 50 A 32 32 0 0 1 82 50"
              stroke="var(--color-accent)"
              strokeWidth="1.5"
              strokeOpacity="0.35"
              strokeLinecap="round"
            />
            <path
              d="M 68 70 A 25 25 0 0 1 32 30"
              stroke="var(--color-accent)"
              strokeWidth="1.5"
              strokeOpacity="0.35"
              strokeLinecap="round"
            />
            <circle
              cx="50"
              cy="50"
              r="36"
              stroke="var(--color-accent)"
              strokeWidth="1"
              strokeOpacity="0.25"
              strokeDasharray="5 3"
            />
            <circle
              cx="50"
              cy="50"
              r="28"
              stroke="var(--color-accent)"
              strokeWidth="1"
              strokeOpacity="0.3"
              strokeDasharray="7 4"
            />
            <circle
              cx="50"
              cy="50"
              r="20"
              stroke="var(--color-accent)"
              strokeWidth="1"
              strokeOpacity="0.2"
            />

            {/* Rótulo Central Neon */}
            <circle cx="50" cy="50" r="13" fill="var(--color-accent)" />
            <circle
              cx="50"
              cy="50"
              r="10"
              fill="var(--color-accent-secondary)"
            />
            <circle cx="50" cy="50" r="3.5" fill="var(--bg-dark)" />
          </g>

          {/* Braço da Agulha (Desce no vinil quando tocando, levanta para fora quando pausado) */}
          <g
            className="transition-transform duration-500 ease-in-out"
            style={{
              transformOrigin: "78px 22px",
              transform: isPlaying ? "rotate(0deg)" : "rotate(-28deg)",
            }}
          >
            {/* Base do Pivô */}
            <circle
              cx="78"
              cy="22"
              r="5.5"
              fill="var(--bg-dark)"
              stroke="var(--color-accent)"
              strokeWidth="2"
            />
            <circle cx="78" cy="22" r="2.5" fill="var(--color-accent)" />

            {/* Haste Metálica do Braço */}
            <path
              d="M 78 22 L 70 42 L 58 52"
              stroke="#ffffff"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M 78 22 L 70 42 L 58 52"
              stroke="var(--color-accent)"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Cabeçote / Cápsula da Agulha */}
            <rect
              x="53"
              y="49"
              width="8"
              height="10"
              rx="2"
              transform="rotate(-25 57 54)"
              fill="var(--color-accent)"
              stroke="#ffffff"
              strokeWidth="1"
            />
          </g>
        </svg>
      </button>

      {/* Estilos locais complementares para keyframes específicos */}
      <style>
        {`
          @keyframes musicWave {
            0%, 100% { transform: scaleY(0.5); opacity: 0.7; }
            50% { transform: scaleY(1); opacity: 1; }
          }
          @keyframes pulseShadow {
            0% { box-shadow: 0 0 15px var(--glow-accent-medium); }
            50% { box-shadow: 0 0 35px var(--glow-accent-strong); }
            100% { box-shadow: 0 0 15px var(--glow-accent-medium); }
          }
        `}
      </style>
    </div>
  );
}
