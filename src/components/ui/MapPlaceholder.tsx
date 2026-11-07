type MapPlaceholderProps = {
  label: string;
  note?: string;
};

export function MapPlaceholder({ label, note }: MapPlaceholderProps) {
  return (
    <div className="relative flex h-full min-h-[220px] items-end overflow-hidden bg-navy-2">
      <div className="map-grid absolute inset-0 opacity-60" />
      <svg
        className="absolute inset-0 h-full w-full opacity-40"
        viewBox="0 0 400 240"
        aria-hidden="true"
      >
        <path
          d="M40 150 C90 80, 140 70, 190 110 S290 190, 360 120"
          fill="none"
          stroke="#38BDF8"
          strokeWidth="1.4"
        />
        <circle cx="190" cy="110" r="5" fill="#A24B58" />
        <circle cx="92" cy="118" r="3" fill="#38BDF8" />
        <circle cx="310" cy="148" r="3" fill="#6366F1" />
      </svg>
      <div className="relative z-10 w-full bg-gradient-to-t from-navy/90 to-transparent p-5">
        <p className="text-sm font-medium text-ink">{label}</p>
        {note ? <p className="mt-1 text-xs text-muted">{note}</p> : null}
      </div>
    </div>
  );
}
