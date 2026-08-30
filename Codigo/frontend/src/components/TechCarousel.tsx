import { useState, useEffect, useRef } from "react";
import { TECHNOLOGIES } from "../data/technologies";

/**
 * Carrossel contínuo de tecnologias com loop infinito
 */
export function TechCarousel() {
  const [isPaused, setIsPaused] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [copies, setCopies] = useState(4); // começa com 4 cópias por segurança
  const [singleSetPx, setSingleSetPx] = useState(0);
  const singleSetRef = useRef<HTMLDivElement>(null);

  // Detectar preferência de movimento reduzido
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) =>
      setPrefersReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  // Medir 1 set de itens e calcular quantas cópias são necessárias
  // para garantir que os itens sempre preencham a tela + margem
  useEffect(() => {
    const measure = () => {
      if (!singleSetRef.current) return;
      const setW = singleSetRef.current.scrollWidth;
      if (setW === 0) return;

      setSingleSetPx(setW);

      // Garantir pelo menos 3 × viewport de largura total de itens
      const needed = Math.ceil((window.innerWidth * 3) / setW) + 1;
      setCopies(Math.max(needed, 2));
    };

    measure();

    const ro = new ResizeObserver(measure);
    if (singleSetRef.current) ro.observe(singleSetRef.current);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  // Velocidade constante: 80px por segundo
  const SPEED_PX_PER_S = 80;
  const duration =
    singleSetPx > 0 ? `${(singleSetPx / SPEED_PX_PER_S).toFixed(2)}s` : "20s";

  return (
    <section
      className="absolute bottom-24 w-full overflow-hidden py-6"
      aria-label="Tecnologias que conheço"
    >
      {/* Gradiente de fade na borda esquerda */}
      <div
        className="absolute left-0 top-0 z-10 h-full w-24 pointer-events-none"
        style={{
          background: "linear-gradient(to right, #1b0f1e 0%, transparent 100%)",
        }}
      />
      {/* Gradiente de fade na borda direita */}
      <div
        className="absolute right-0 top-0 z-10 h-full w-24 pointer-events-none"
        style={{
          background: "linear-gradient(to left, #1b0f1e 0%, transparent 100%)",
        }}
      />

      {/* Faixa deslizante — traduz exatamente por 1 set de pixels */}
      <div
        className="flex items-center"
        style={
          {
            animation:
              prefersReducedMotion || singleSetPx === 0
                ? "none"
                : `techScroll ${duration} linear infinite`,
            animationPlayState: isPaused ? "paused" : "running",
            willChange: "transform",
            // Inline CSS custom property para o valor exato em pixels
            "--scroll-distance": `${singleSetPx}px`,
          } as React.CSSProperties
        }
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onFocus={() => setIsPaused(true)}
        onBlur={() => setIsPaused(false)}
      >
        {/* 1 set de referência (invisível) — usado para medir a largura */}
        <div ref={singleSetRef} className="flex items-center shrink-0">
          {TECHNOLOGIES.map((tech, idx) => (
            <TechItem
              key={`measure-${tech.name}-${idx}`}
              name={tech.name}
              icon={tech.icon}
            />
          ))}
        </div>

        {/* Cópias adicionais para preencher a tela sem espaço em branco */}
        {Array.from({ length: copies - 1 }).map((_, ci) =>
          TECHNOLOGIES.map((tech, idx) => (
            <TechItem
              key={`copy-${ci}-${tech.name}-${idx}`}
              name={tech.name}
              icon={tech.icon}
            />
          )),
        )}
      </div>

      {/* Keyframe usa var(--scroll-distance) — pixel perfeito, sem frações */}
      <style>{`
        @keyframes techScroll {
          from { transform: translateX(0); }
          to   { transform: translateX(calc(-1 * var(--scroll-distance))); }
        }
      `}</style>
    </section>
  );
}

interface TechItemProps {
  name: string;
  icon: string;
}

function TechItem({ name, icon }: TechItemProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="flex flex-col items-center justify-center gap-2 mx-8 md:mx-12 shrink-0 cursor-default"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label={name}
    >
      {/* Container do ícone com efeito de brilho */}
      <div
        className="relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-2xl border transition-all duration-300"
        style={{
          background: isHovered
            ? "rgba(176, 38, 255, 0.12)"
            : "rgba(255, 255, 255, 0.04)",
          borderColor: isHovered
            ? "rgba(176, 38, 255, 0.5)"
            : "rgba(255, 255, 255, 0.08)",
          transform: isHovered ? "scale(1.15) translateY(-4px)" : "scale(1)",
          boxShadow: isHovered
            ? "0 0 20px rgba(176, 38, 255, 0.4), 0 8px 24px rgba(0,0,0,0.4)"
            : "0 2px 8px rgba(0,0,0,0.2)",
        }}
      >
        <img
          src={icon}
          alt={name}
          className="w-8 h-8 md:w-9 md:h-9 object-contain transition-all duration-300"
          style={{
            filter: isHovered
              ? "drop-shadow(0 0 8px rgba(176,38,255,0.6)) brightness(1.1)"
              : "brightness(0.85)",
            opacity: isHovered ? 1 : 0.75,
          }}
        />

        {/* Brilho neon no hover */}
        {isHovered && (
          <div
            className="absolute inset-0 rounded-2xl pointer-events-none"
            style={{
              background:
                "radial-gradient(circle at center, rgba(176,38,255,0.15) 0%, transparent 70%)",
            }}
          />
        )}
      </div>

      {/* Nome da tecnologia */}
      <span
        className="text-xs font-medium tracking-wide transition-all duration-300"
        style={{
          color: isHovered ? "rgba(176, 38, 255, 1)" : "rgba(255,255,255,0.35)",
          opacity: isHovered ? 1 : 0.7,
          transform: isHovered ? "translateY(0)" : "translateY(2px)",
        }}
      >
        {name}
      </span>
    </div>
  );
}
