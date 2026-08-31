import { useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { Mail } from "lucide-react";
import { ContactModal } from "../components/ContactModal";

const LinkedinIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const InstagramIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const WhatsappIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
  </svg>
);

export function Contact() {
  const { t } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <main className="flex-1 flex flex-col justify-center px-10 md:px-20 relative overflow-hidden pb-32">
        {/* Background glow effect for contact page */}
        <div className="absolute inset-0 bg-linear-to-r from-transparent via-accent-secondary/15 to-transparent pointer-events-none opacity-50 blur-3xl" />

        <div className="relative z-10 max-w-4xl mt-4">
          <h1 className="text-6xl md:text-8xl font-serif font-normal mb-8 leading-tight text-(--text-primary)">
            {t.contact.heading}
          </h1>

          <p className="text-lg md:text-xl text-(--text-secondary) max-w-3xl leading-relaxed mb-16 font-sans font-light">
            {t.contact.description}
          </p>
        </div>

        {/* Bottom / Side actions */}
        <div className="relative z-10 w-full mt-auto flex flex-col md:flex-row md:items-end justify-between">
          {/* Social Icons (left side in design) */}
          <div className="flex flex-col gap-6 items-start mb-12 md:mb-0 relative">
            <a
              href="#"
              className="text-white hover:text-accent-light transition-colors hover:scale-110"
            >
              <LinkedinIcon />
            </a>
            <a
              href="#"
              className="text-white hover:text-accent-light transition-colors hover:scale-110"
            >
              <InstagramIcon />
            </a>
            <a
              href="#"
              className="text-white hover:text-accent-light transition-colors hover:scale-110"
            >
              <WhatsappIcon />
            </a>
            <div className="w-0.5 h-32 bg-(--border-subtle) mt-4 ml-3.5 hidden md:block" />
          </div>

          {/* Send Email Button (right side in design) */}
          <div className="md:absolute md:right-0 md:bottom-20 flex justify-end w-full md:w-auto">
            <button
              onClick={() => setIsModalOpen(true)}
              className="flex items-center gap-3 text-accent-light hover:text-accent transition-colors cursor-pointer group"
            >
              <span className="text-xl lowercase tracking-wide font-sans">
                {t.contact.sendEmail}
              </span>
              <Mail
                size={32}
                className="group-hover:scale-110 transition-transform drop-shadow-[0_0_10px_var(--glow-accent-medium)]"
              />
            </button>
          </div>
        </div>
      </main>

      {/* Modal */}
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
