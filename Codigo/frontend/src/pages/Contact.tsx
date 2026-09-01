import { useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { useViewMode } from "../contexts/ViewModeContext";
import { ContactModal } from "../components/ContactModal";
import { SOCIAL_LINKS } from "../config/contact";

/* ─── Ícones SVG Oficiais e Vetorizados em Alta Definição ─── */

/* LinkedIn (Letras 'in' clássicas) */
const LinkedinIcon = () => (
  <svg
    className="w-8 h-8 fill-white"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
  </svg>
);

/* Instagram (Câmera com cantos arredondados, lente central e flash) */
const InstagramIcon = () => (
  <svg
    className="w-8 h-8"
    viewBox="0 0 24 24"
    fill="none"
    stroke="white"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const WhatsappIcon = () => (
  <svg
    className="w-8 h-8"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Contorno do Balão do WhatsApp */}
    <path
      d="M12 2.2C6.588 2.2 2.2 6.588 2.2 12c0 1.87.52 3.62 1.42 5.12L2.1 21.9l4.92-1.29A9.73 9.73 0 0012 21.8c5.412 0 9.8-4.388 9.8-9.8S17.412 2.2 12 2.2z"
      stroke="white"
      strokeWidth="2.1"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Telefone */}
    <path
      d="M8.8 7.6c-.22 0-.48.06-.68.28-.32.33-.85 1.05-.85 2.2 0 1.7 1.28 3.28 2.45 4.45 1.38 1.28 3.3 2.34 5 2.34 1.17 0 1.92-.53 2.24-.85.22-.22.28-.48.28-.7v-.95c0-.32-.21-.58-.53-.69l-1.7-.74c-.32-.1-.69 0-.9.21l-.74.85c-.16.16-.37.21-.58.1-1.06-.53-2.02-1.49-2.55-2.55-.1-.21-.05-.42.1-.58l.85-.74c.21-.21.32-.58.21-.9l-.74-1.7c-.1-.32-.37-.53-.69-.53h-1.02z"
      fill="white"
    />
  </svg>
);

/* Envelope de Email */
const MailEnvelopeIcon = () => (
  <svg
    className="w-9 h-9"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.9"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="15" x="2" y="4.5" rx="2.5" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

export function Contact() {
  const { t } = useLanguage();
  const { viewMode } = useViewMode();
  const [isModalOpen, setIsModalOpen] = useState(false);

  /* Dados adaptativos por perfil */
  const profileData = t.contact[viewMode] as { heading: string; description: string };

  return (
    <div className="relative flex-1 flex flex-col justify-between overflow-hidden">
      {/* ─── Feixe Horizontal Luminoso ─── */}
      <div
        className="absolute inset-x-0 w-full pointer-events-none z-0 overflow-hidden -top-16 sm:-top-10 md:-top-6 h-120"
        aria-hidden="true"
      >
        {/* Glow elíptico amplo  */}
        <div
          className="w-full h-full"
          style={{
            background:
              "radial-gradient(ellipse 100% 45% at 50% 50%, rgba(176, 38, 255, 0.28) 0%, rgba(140, 30, 195, 0.16) 35%, rgba(90, 15, 130, 0.06) 65%, transparent 85%)",
            filter: "blur(40px)",
          }}
        />

        {/* Linha central */}
        <div
          className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-24 sm:h-32"
          style={{
            background:
              "linear-gradient(180deg, transparent 0%, rgba(217, 70, 239, 0.12) 30%, rgba(244, 114, 182, 0.22) 50%, rgba(217, 70, 239, 0.12) 70%, transparent 100%)",
            filter: "blur(20px)",
          }}
        />
      </div>

      {/* ─── Ondas de Fundo ─── */}
      <div
        className="absolute inset-0 pointer-events-none overflow-hidden z-0"
        aria-hidden="true"
      >
        <svg
          className="absolute bottom-0 right-0 w-full h-[75%] md:h-[65%] opacity-55 transition-opacity duration-1000"
          viewBox="0 0 1440 600"
          fill="none"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              id="contactWaveGrad1"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#2c0848" stopOpacity="0.85" />
              <stop offset="50%" stopColor="#4e0e78" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#180d1a" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="contactWaveGrad2"
              x1="100%"
              y1="0%"
              x2="0%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#681596" stopOpacity="0.4" />
              <stop offset="55%" stopColor="#350548" stopOpacity="0.2" />
              <stop offset="100%" stopColor="transparent" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="contactStrokeGrad"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="rgba(176, 38, 255, 0)" />
              <stop offset="35%" stopColor="rgba(217, 70, 239, 0.5)" />
              <stop offset="70%" stopColor="rgba(168, 85, 247, 0.65)" />
              <stop offset="100%" stopColor="rgba(176, 38, 255, 0.05)" />
            </linearGradient>
          </defs>

          {/* Curvas orgânicas */}
          <path
            d="M-100,520 C280,430 580,590 940,430 C1180,320 1340,360 1550,260 L1550,650 L-100,650 Z"
            fill="url(#contactWaveGrad1)"
          />
          <path
            d="M-50,560 C260,370 690,490 1080,310 C1280,220 1420,260 1550,190"
            stroke="url(#contactStrokeGrad)"
            strokeWidth="2.5"
            fill="none"
          />
          <path
            d="M80,610 C430,470 820,530 1220,340 C1380,270 1480,290 1600,220"
            stroke="url(#contactStrokeGrad)"
            strokeWidth="1.5"
            strokeOpacity="0.45"
            fill="none"
          />
          <path
            d="M0,470 C380,550 780,360 1180,440 C1380,480 1480,420 1600,380 L1600,650 L0,650 Z"
            fill="url(#contactWaveGrad2)"
          />
        </svg>
      </div>

      {/* ─── Conteúdo Principal da Página ─────────────────────────────── */}
      <main className="flex-1 flex flex-col justify-between px-10 md:px-20 lg:px-24 pt-2 pb-8 md:pb-12 relative z-10">
        {/* Bloco Superior: Título + Descrição */}
        <div
          className="max-w-5xl"
          style={{
            animation: "contactFadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) both",
          }}
        >
          {/* Título adaptativo por perfil */}
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[5.75rem] font-serif font-normal mb-6 sm:mb-8 leading-[1.05] tracking-tight text-white drop-shadow-[0_4px_25px_rgba(0,0,0,0.7)] transition-all duration-500">
            {profileData.heading}
          </h1>

          {/* Descrição adaptativa */}
          <p
            className="text-base sm:text-lg md:text-[1.2rem] text-white/90 max-w-3xl leading-relaxed md:leading-8 font-serif font-normal tracking-wide transition-all duration-500"
            style={{
              animation:
                "contactFadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) both",
              animationDelay: "0.15s",
            }}
          >
            {profileData.description}
          </p>
        </div>

        {/* ─── Botão 'send email' ─── */}
        <div
          className="w-full flex justify-end pr-6 sm:pr-12 md:pr-24 lg:pr-36 my-2 md:my-4 z-20"
          style={{
            animation: "contactFadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) both",
            animationDelay: "0.25s",
          }}
        >
          <button
            onClick={() => setIsModalOpen(true)}
            className="group flex items-center gap-3.5 text-[#d946ef] hover:text-[#f472b6] transition-all duration-300 cursor-pointer bg-transparent border-none p-2 rounded-xl focus:outline-none"
            aria-label={t.contact.sendEmail}
          >
            <span className="text-xl sm:text-2xl lowercase tracking-wide font-sans font-normal text-[#d946ef] group-hover:text-[#f472b6] transition-colors drop-shadow-[0_0_12px_rgba(217,70,239,0.5)]">
              {t.contact.sendEmail}
            </span>
            <span className="text-[#d946ef] group-hover:text-[#f472b6] group-hover:scale-115 group-hover:-translate-y-0.5 transition-all duration-300 drop-shadow-[0_0_14px_rgba(217,70,239,0.7)]">
              <MailEnvelopeIcon />
            </span>
          </button>
        </div>

        {/* ─── Coluna Social (Esquerda)─── */}
        <div
          className="flex flex-col items-center w-fit gap-6 sm:gap-7 relative z-10 mt-auto"
          style={{
            animation: "contactFadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) both",
            animationDelay: "0.35s",
          }}
        >
          {/* LinkedIn */}
          <a
            href={SOCIAL_LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-[#f472b6] transition-all duration-300 hover:scale-120 hover:drop-shadow-[0_0_16px_rgba(217,70,239,0.9)] cursor-pointer flex items-center justify-center"
            aria-label="LinkedIn"
            title="LinkedIn"
          >
            <LinkedinIcon />
          </a>

          {/* Instagram */}
          <a
            href={SOCIAL_LINKS.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-[#f472b6] transition-all duration-300 hover:scale-120 hover:drop-shadow-[0_0_16px_rgba(217,70,239,0.9)] cursor-pointer flex items-center justify-center"
            aria-label="Instagram"
            title="Instagram"
          >
            <InstagramIcon />
          </a>

          {/* WhatsApp Oficial */}
          <a
            href={SOCIAL_LINKS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-[#f472b6] transition-all duration-300 hover:scale-120 hover:drop-shadow-[0_0_16px_rgba(217,70,239,0.9)] cursor-pointer flex items-center justify-center"
            aria-label="WhatsApp"
            title="WhatsApp"
          >
            <WhatsappIcon />
          </a>

          {/* Linha vertical branca sólida*/}
          <div className="w-[2.5px] h-28 md:h-36 bg-white/90 rounded-full mt-1 hidden md:block opacity-95 shadow-[0_0_10px_rgba(255,255,255,0.3)]" />
        </div>
      </main>

      {/* ─── Modal Interativo de Contato ──────────────────────────────── */}
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      {/* ─── Animações CSS ────────────────────────────────────────────── */}
      <style>{`
        @keyframes contactFadeIn {
          from {
            opacity: 0;
            transform: translateY(16px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
