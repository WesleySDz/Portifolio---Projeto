import { Eye, Briefcase, Code2, CheckCircle2 } from "lucide-react";
import { useViewMode, type ViewMode } from "../contexts/ViewModeContext";
import { useLanguage } from "../contexts/LanguageContext";

const modes: {
  id: ViewMode;
  icon: typeof Eye;
  labelPt: string;
  labelEn: string;
  descPt: string;
  descEn: string;
  color: string;
}[] = [
  {
    id: "visitor",
    icon: Eye,
    labelPt: "Visitante",
    labelEn: "Visitor",
    descPt: "Explorar o portfólio",
    descEn: "Explore the portfolio",
    color: "#a855f7",
  },
  {
    id: "recruiter",
    icon: Briefcase,
    labelPt: "Recrutador",
    labelEn: "Recruiter",
    descPt: "Avaliar experiência profissional",
    descEn: "Assess professional experience",
    color: "#d946ef",
  },
  {
    id: "developer",
    icon: Code2,
    labelPt: "Desenvolvedor",
    labelEn: "Developer",
    descPt: "Analisar arquitetura e código",
    descEn: "Analyze architecture & code",
    color: "#818cf8",
  },
];

export function ProfileSelector({ onSelect }: { onSelect?: () => void }) {
  const { viewMode, setViewMode } = useViewMode();
  const { language } = useLanguage();
  const isPt = language === "pt";

  const handleSelect = (mode: ViewMode) => {
    setViewMode(mode);
    onSelect?.();
  };

  return (
    <div className="flex flex-col gap-2">
      {/* Section Label */}
      <span
        className="text-[10px] uppercase tracking-[0.18em] font-medium mb-1"
        style={{ color: "var(--text-subtle)" }}
      >
        {isPt ? "Visualizando como" : "Viewing as"}
      </span>

      {modes.map((mode) => {
        const Icon = mode.icon;
        const isActive = viewMode === mode.id;
        const label = isPt ? mode.labelPt : mode.labelEn;
        const desc = isPt ? mode.descPt : mode.descEn;

        return (
          <button
            key={mode.id}
            onClick={() => handleSelect(mode.id)}
            aria-pressed={isActive}
            className={`
              w-full flex items-center gap-3.5 p-3 rounded-xl text-left
              border transition-all duration-300 cursor-pointer
              focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30
              ${
                isActive
                  ? "border-transparent shadow-[0_0_16px_rgba(176,38,255,0.25)]"
                  : "border-white/[0.06] hover:border-white/15 hover:bg-white/[0.04]"
              }
            `}
            style={
              isActive
                ? {
                    background: `linear-gradient(135deg, ${mode.color}22 0%, ${mode.color}0d 100%)`,
                    borderColor: `${mode.color}55`,
                  }
                : {}
            }
          >
            {/* Icon */}
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300"
              style={
                isActive
                  ? {
                      background: `${mode.color}33`,
                      boxShadow: `0 0 12px ${mode.color}55`,
                    }
                  : { background: "rgba(255,255,255,0.05)" }
              }
            >
              <Icon
                size={17}
                style={{ color: isActive ? mode.color : "rgba(255,255,255,0.45)" }}
              />
            </div>

            {/* Text */}
            <div className="flex-1 min-w-0">
              <div
                className="text-sm font-medium leading-tight"
                style={{ color: isActive ? "#fff" : "rgba(255,255,255,0.65)" }}
              >
                {label}
              </div>
              <div
                className="text-[11px] leading-tight mt-0.5 truncate"
                style={{ color: isActive ? mode.color : "rgba(255,255,255,0.3)" }}
              >
                {desc}
              </div>
            </div>

            {/* Active check */}
            {isActive && (
              <CheckCircle2
                size={15}
                style={{ color: mode.color, flexShrink: 0 }}
              />
            )}
          </button>
        );
      })}
    </div>
  );
}

/* Badge pequeno para exibir no header da Navbar */
export function ViewModeBadge() {
  const { viewMode } = useViewMode();
  const { language } = useLanguage();
  const isPt = language === "pt";

  const active = modes.find((m) => m.id === viewMode)!;
  const Icon = active.icon;
  const label = isPt ? active.labelPt : active.labelEn;

  return (
    <div
      className="flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-[11px] font-medium transition-all duration-500"
      style={{
        background: `${active.color}18`,
        borderColor: `${active.color}45`,
        color: active.color,
      }}
      title={label}
    >
      <Icon size={11} />
      <span className="hidden sm:inline">{label}</span>
    </div>
  );
}
