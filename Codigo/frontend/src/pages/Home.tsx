import { useEffect } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { TechCarousel } from "../components/TechCarousel";

/* Partículas decorativas geradas uma vez */
const PARTICLES = Array.from({ length: 28 }, (_, i) => ({
  id: i,
  top: `${Math.random() * 85}%`,
  left: `${Math.random() * 100}%`,
  size: Math.random() > 0.7 ? 3 : Math.random() > 0.4 ? 2 : 1.5,
  opacity: 0.15 + Math.random() * 0.45,
  delay: `${Math.random() * 4}s`,
  duration: `${3 + Math.random() * 4}s`,
}));

export function Home() {
  const { t } = useLanguage();

  /* Parallax sutil nos orbs ao mover o mouse */
  useEffect(() => {
    const orb = document.getElementById("hero-orb");
    const orbSecondary = document.getElementById("hero-orb-secondary");
    if (!orb || !orbSecondary) return;

    const handleMouse = (e: MouseEvent) => {
      const { innerWidth: W, innerHeight: H } = window;
      const dx = (e.clientX / W - 0.5) * 30;
      const dy = (e.clientY / H - 0.5) * 20;
      orb.style.transform = `translate(${dx}px, ${dy}px)`;
      orbSecondary.style.transform = `translate(${-dx * 0.5}px, ${-dy * 0.5}px)`;
    };

    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  return (
    <>
      {/* ─── Fundo animado ───────────────────────────────────────── */}
      <div
        className="fixed inset-0 overflow-hidden pointer-events-none"
        aria-hidden="true"
      >
        {/* Orb principal — canto superior direito */}
        <div
          id="hero-orb"
          className="absolute -top-32 -right-32 w-150 h-150 rounded-full transition-transform duration-700 ease-out glow-orb-primary"
        />

        {/* Orb secundário — canto inferior esquerdo */}
        <div
          id="hero-orb-secondary"
          className="absolute -bottom-48 -left-24 w-125 h-125 rounded-full transition-transform duration-700 ease-out glow-orb-secondary"
        />

        {/* Anéis decorativos */}
        <div
          className="absolute top-16 right-[10%] w-64 h-64 rounded-full opacity-[0.07]"
          style={{ border: "1px solid var(--color-accent)" }}
        />
        <div
          className="absolute top-24 right-[8%] w-48 h-48 rounded-full opacity-[0.05]"
          style={{ border: "1px solid var(--color-accent)" }}
        />

        {/* Partículas brilhantes */}
        {PARTICLES.map((p) => (
          <div
            key={p.id}
            className="absolute rounded-full"
            style={{
              top: p.top,
              left: p.left,
              width: `${p.size}px`,
              height: `${p.size}px`,
              background: "var(--color-accent)",
              opacity: p.opacity,
              boxShadow: `0 0 ${p.size * 3}px var(--glow-accent-strong)`,
              animation: `particlePulse ${p.duration} ${p.delay} ease-in-out infinite`,
            }}
          />
        ))}
      </div>

      {/* ─── Conteúdo principal ───────────────────────────────── */}
      <main className="flex-1 flex flex-col justify-center px-10 md:px-20 pb-48 relative z-10">
        {/* Saudação */}
        <p
          className="m-0 mb-2 italic text-2xl md:text-3xl tracking-wide font-serif"
          style={{
            color: "var(--color-accent-light)",
            animation: "heroFadeUp 0.7s ease both",
            animationDelay: "0.1s",
          }}
        >
          {t.home.im}
        </p>

        {/* Nome — destaque*/}
        <h1
          className="m-0 font-bold leading-snug pb-2 text-gradient-hero font-serif"
          style={{
            fontSize: "clamp(2.8rem, 8vw, 6.5rem)",
            animation: "heroFadeUp 0.7s ease both",
            animationDelay: "0.25s",
          }}
        >
          Wesley Domingos
        </h1>

        {/* Cargo — mais discreto */}
        <h2
          className="m-0 mt-3 font-light leading-tight font-sans"
          style={{
            fontSize: "clamp(1.2rem, 3vw, 2rem)",
            color: "var(--text-subtle)",
            letterSpacing: "0.04em",
            animation: "heroFadeUp 0.7s ease both",
            animationDelay: "0.4s",
          }}
        >
          {t.home.role}
        </h2>

        {/* Linha decorativa */}
        <div
          className="mt-6"
          style={{
            animation: "heroFadeUp 0.7s ease both",
            animationDelay: "0.55s",
          }}
        >
          <div
            className="h-0.5 w-20 md:w-28 rounded-full"
            style={{
              background:
                "linear-gradient(to right, var(--color-accent), transparent)",
            }}
          />
        </div>
      </main>

      {/* ─── Carrossel de tecnologias ────────────────────────────── */}
      <TechCarousel />

      {/* ─── Keyframes ───────────────────────────────────────────── */}
      <style>{`
        @keyframes particlePulse {
          0%, 100% { opacity: 0.25; transform: scale(1); }
          50%       { opacity: 0.6;  transform: scale(1.5); }
        }
        @keyframes heroFadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  );
}
