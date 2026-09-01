interface CalendarCustomIconProps {
  size?: number;
  className?: string;
}

export function CalendarCustomIcon({
  size = 26,
  className = "",
}: CalendarCustomIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Contorno do Calendário */}
      <rect
        x="2.5"
        y="4"
        width="19"
        height="17"
        rx="3.5"
        stroke="currentColor"
        strokeWidth="2.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Anéis superiores do fichário */}
      <line
        x1="7.5"
        y1="2"
        x2="7.5"
        y2="5"
        stroke="currentColor"
        strokeWidth="2.1"
        strokeLinecap="round"
      />
      <line
        x1="16.5"
        y1="2"
        x2="16.5"
        y2="5"
        stroke="currentColor"
        strokeWidth="2.1"
        strokeLinecap="round"
      />
      {/* Linha separadora do cabeçalho */}
      <line
        x1="2.5"
        y1="8.5"
        x2="21.5"
        y2="8.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* Grade de dias */}
      <circle cx="7.5" cy="12.5" r="1" fill="currentColor" />
      <circle cx="12" cy="12.5" r="1" fill="currentColor" />
      <circle cx="16.5" cy="12.5" r="1" fill="currentColor" />
      <circle cx="7.5" cy="16.5" r="1" fill="currentColor" />
      <circle cx="12" cy="16.5" r="1" fill="currentColor" />
      <circle cx="16.5" cy="16.5" r="1" fill="currentColor" />
    </svg>
  );
}
