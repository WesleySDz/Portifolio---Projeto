import { ExternalLink, ZoomIn } from "lucide-react";

interface ProjectPreviewProps {
  image?: string;
  title?: string;
  link?: string;
  onOpenImage?: (image: string, title: string, link?: string) => void;
}

export function ProjectPreview({
  image,
  title,
  link,
  onOpenImage,
}: ProjectPreviewProps) {
  return (
    <div className="relative group/preview flex items-center justify-center shrink-0 w-full sm:w-auto self-center lg:self-start">
      {/* Moldura de Vidro Dark Glass com Borda Neon e Sombra Profunda */}
      <div
        onClick={() => {
          if (image && onOpenImage) {
            onOpenImage(image, title || "", link);
          }
        }}
        className={`relative max-w-64 sm:max-w-72 md:max-w-80 h-52 sm:h-60 md:h-64 rounded-2xl bg-[#120617]/90 border border-[#9315dc]/40 group-hover/preview:border-[#d946ef] p-2.5 shadow-[0_12px_35px_rgba(0,0,0,0.7)] transition-all duration-300 flex items-center justify-center overflow-hidden ${
          image ? "cursor-zoom-in group/zoom" : ""
        }`}
      >
        {image ? (
          <div className="w-full h-full rounded-xl overflow-hidden bg-[#0e0413] flex items-center justify-center relative">
            <img
              src={image}
              alt={title || "Project Preview"}
              className="w-full h-full object-contain transition-transform duration-500 group-hover/preview:scale-105"
            />
            {/* Indicador de Zoom no Hover */}
            <div className="absolute inset-0 bg-[#120617]/40 opacity-0 group-hover/zoom:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[1px]">
              <div className="p-2.5 rounded-full bg-[#200b2b]/90 border border-[#d946ef]/60 text-white shadow-[0_0_15px_rgba(217,70,239,0.5)] transform scale-90 group-hover/zoom:scale-100 transition-transform">
                <ZoomIn size={22} className="text-[#e4a5ff]" />
              </div>
            </div>
          </div>
        ) : (
          /* Placeholder estilizado quando não houver imagem adicionada */
          <div className="w-48 sm:w-56 h-full rounded-xl bg-linear-to-br from-[#b026ff]/15 via-[#6a00c8]/10 to-[#14061a] border border-[#b026ff]/20 flex flex-col items-center justify-center gap-3 p-4">
            <div className="w-12 h-12 rounded-full bg-[#b026ff]/20 border border-[#b026ff]/40 flex items-center justify-center shadow-[0_0_15px_rgba(176,38,255,0.4)]">
              <div className="w-3.5 h-3.5 rounded-full bg-[#d946ef] shadow-[0_0_10px_#d946ef]" />
            </div>
            <span className="text-xs font-sans text-white/50 tracking-wider uppercase">
              Preview
            </span>
          </div>
        )}
      </div>

      {/* Botão de Link Externo com Glow no Canto Superior Direito */}
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-2 right-2 sm:top-3 sm:right-3 bg-[#1e0926]/90 hover:bg-[#a824b3] border border-[#a824b3]/60 hover:border-white text-white p-2 rounded-xl transition-all duration-300 hover:scale-110 shadow-[0_4px_15px_rgba(0,0,0,0.6)] cursor-pointer z-10"
          title="Abrir Projeto"
          onClick={(e) => e.stopPropagation()}
        >
          <ExternalLink
            size={18}
            className="text-[#e4a5ff] group-hover/preview:text-white transition-colors"
          />
        </a>
      )}
    </div>
  );
}
