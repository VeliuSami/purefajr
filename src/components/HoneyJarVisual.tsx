export function HoneyJarVisual({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`} aria-hidden="true">
      {/* Ambient glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[70%] h-[70%] rounded-full bg-orange-500/10 blur-3xl" />
      </div>

      <svg
        viewBox="0 0 280 380"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative w-full max-w-[280px] mx-auto drop-shadow-2xl"
      >
        {/* Lid */}
        <rect x="95" y="30" width="90" height="18" rx="2" fill="#1A1612" />
        <rect x="98" y="33" width="84" height="4" rx="1" fill="#2D2824" />

        {/* Neck */}
        <path
          d="M105 48 L105 72 Q105 78 110 78 L170 78 Q175 78 175 72 L175 48"
          fill="#E8E2D8"
          stroke="#CFC5B8"
          strokeWidth="0.5"
        />

        {/* Jar body */}
        <path
          d="M88 78 Q82 78 80 88 L72 320 Q70 340 88 345 L192 345 Q210 340 208 320 L200 88 Q198 78 192 78 Z"
          fill="url(#jarGradient)"
          stroke="#CFC5B8"
          strokeWidth="1"
        />

        {/* Honey fill */}
        <path
          d="M82 160 Q80 160 79 170 L74 310 Q73 325 88 328 L192 328 Q207 325 206 310 L201 170 Q200 160 198 160 Z"
          fill="url(#honeyGradient)"
          opacity="0.92"
        />

        {/* Honey surface shine */}
        <ellipse cx="140" cy="162" rx="55" ry="4" fill="#E8884A" opacity="0.3" />

        {/* Label area */}
        <rect x="100" y="200" width="80" height="90" rx="1" fill="#FAF7F2" opacity="0.95" />
        <rect x="100" y="200" width="80" height="90" rx="1" stroke="#E0D9CE" strokeWidth="0.5" fill="none" />

        {/* Label text lines */}
        <rect x="112" y="215" width="56" height="2" rx="1" fill="#1A1612" opacity="0.8" />
        <rect x="118" y="225" width="44" height="1.5" rx="0.75" fill="#6B635A" opacity="0.5" />
        <rect x="112" y="240" width="56" height="1" rx="0.5" fill="#E07020" opacity="0.6" />
        <rect x="120" y="255" width="40" height="1" rx="0.5" fill="#9A9289" opacity="0.4" />
        <rect x="125" y="265" width="30" height="1" rx="0.5" fill="#9A9289" opacity="0.4" />

        {/* Orange accent stripe */}
        <rect x="100" y="278" width="80" height="3" fill="#E07020" />

        {/* Reflection */}
        <path
          d="M95 100 Q92 180 90 280"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
          opacity="0.15"
        />

        <defs>
          <linearGradient id="jarGradient" x1="140" y1="78" x2="140" y2="345" gradientUnits="userSpaceOnUse">
            <stop stopColor="#F5F0E8" />
            <stop offset="0.5" stopColor="#EDE8DF" />
            <stop offset="1" stopColor="#E0D9CE" />
          </linearGradient>
          <linearGradient id="honeyGradient" x1="140" y1="160" x2="140" y2="328" gradientUnits="userSpaceOnUse">
            <stop stopColor="#E8884A" />
            <stop offset="0.4" stopColor="#D4620F" />
            <stop offset="1" stopColor="#C85A12" />
          </linearGradient>
        </defs>
      </svg>

      {/* Batch badge */}
      <div className="absolute bottom-8 -right-2 sm:right-0 bg-cream-50 border border-cream-300 px-3 py-2 shadow-sm">
        <p className="label-caps text-orange-600 text-[0.6rem]">Batch No.</p>
        <p className="font-mono text-xs text-ink mt-0.5">061 · 2026</p>
      </div>
    </div>
  );
}
