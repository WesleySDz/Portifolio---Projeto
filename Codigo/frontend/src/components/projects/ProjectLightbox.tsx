import { useEffect } from "react";
import { ExternalLink, X } from "lucide-react";

interface LightboxImage {
  src: string;
  title: string;
  link?: string;
}

interface ProjectLightboxProps {
  image: LightboxImage | null;
  onClose: () => void;
}

export function ProjectLightbox({ image, onClose }: ProjectLightboxProps) {
  // Fechar Lightbox ao pressionar a tecla Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    if (image) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [image, onClose]);

  if (!image) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-fadeIn"
      style={{ animation: "lightboxFadeIn 0.25s ease-out forwards" }}
    >
      {/* Container do Modal */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-5xl max-h-[90vh] flex flex-col items-center justify-center bg-[#15071c]/95 border border-[#a824b3]/60 rounded-3xl p-4 sm:p-6 shadow-[0_0_50px_rgba(176,38,255,0.35)] overflow-hidden"
        style={{
          animation:
            "lightboxZoomIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        }}
      >
        {/* Barra Superior do Modal */}
        <div className="w-full flex items-center justify-between gap-4 mb-4 px-2">
          <h4 className="text-xl sm:text-2xl font-serif text-white truncate drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
            {image.title}
          </h4>

          <div className="flex items-center gap-3">
            {image.link && (
              <a
                href={image.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#2a0e36] hover:bg-[#a824b3] border border-[#a824b3]/60 text-white text-sm font-sans transition-all duration-300 hover:scale-105"
                title="Visitar Projeto"
              >
                <ExternalLink size={16} />
                <span className="hidden sm:inline">Visitar</span>
              </a>
            )}

            {/* Botão de Fechar */}
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-white/10 hover:bg-[#d946ef] text-white hover:text-white transition-all duration-300 cursor-pointer border-none shadow-[0_2px_10px_rgba(0,0,0,0.5)] hover:scale-110"
              aria-label="Fechar visualização"
            >
              <X size={22} />
            </button>
          </div>
        </div>

        {/* Imagem em Alta Resolução */}
        <div className="relative max-h-[75vh] w-full flex items-center justify-center rounded-2xl overflow-hidden bg-[#0a020d] border border-white/10 p-1 sm:p-2">
          <img
            src={image.src}
            alt={image.title}
            className="max-h-[72vh] max-w-full object-contain rounded-xl shadow-2xl"
          />
        </div>
      </div>

      <style>{`
        @keyframes lightboxFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes lightboxZoomIn {
          from { opacity: 0; transform: scale(0.92); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
}
