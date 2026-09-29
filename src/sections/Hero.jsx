export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#1a1a2e] px-6">

      <style>{`
        @keyframes dekiruPop {
          0%   { transform: scale(1) translateY(0); }
          45%  { transform: scale(1.10) translateY(-5px); }
          75%  { transform: scale(0.97) translateY(1px); }
          100% { transform: scale(1) translateY(0); }
        }
        @keyframes drawUnderline {
          from { stroke-dashoffset: 110; }
          to   { stroke-dashoffset: 0; }
        }
        @keyframes scrollBob {
          0%, 100% { transform: translateY(0); opacity: 0.28; }
          50%       { transform: translateY(5px); opacity: 0.52; }
        }
      `}</style>

      {/* Subtle warm ambient glow — background depth only */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 55% 40% at 50% 50%, rgba(255,159,28,0.07) 0%, transparent 70%)',
        }}
      />

      {/* The one thing that matters */}
      <div
        className="relative z-10 text-center"
        style={{ lineHeight: 1.2, letterSpacing: '-0.02em' }}
      >
        {/* 次は、 */}
        <div
          className="text-white font-black"
          style={{
            fontSize: 'clamp(2.2rem, 6.5vw, 5.4rem)',
            animation: 'heroFadeUp 0.7s cubic-bezier(0.34,1.2,0.64,1) 0.25s both',
            opacity: 0,
          }}
        >
          次は、
        </div>

        {/* なにが【できる】ように */}
        <div
          className="text-white font-black"
          style={{
            fontSize: 'clamp(2.2rem, 6.5vw, 5.4rem)',
            animation: 'heroFadeUp 0.7s cubic-bezier(0.34,1.2,0.64,1) 0.52s both',
            opacity: 0,
          }}
        >
          なにが
          <span
            className="relative inline-block"
            style={{
              color: '#FF9F1C',
              textShadow: '0 0 36px rgba(255,159,28,0.28)',
              animation: 'dekiruPop 0.55s cubic-bezier(0.34,1.56,0.64,1) 0.92s both',
            }}
          >
            できる
            {/* Hand-drawn underline draws in after the bounce */}
            <svg
              aria-hidden="true"
              className="absolute left-0 w-full"
              style={{ bottom: '-5px', height: '10px', overflow: 'visible' }}
              viewBox="0 0 100 10"
              preserveAspectRatio="none"
            >
              <path
                d="M1 7 Q25 3 50 6 Q75 9 99 5"
                fill="none"
                stroke="#FFC928"
                strokeWidth="3"
                strokeLinecap="round"
                strokeDasharray="110"
                strokeDashoffset="110"
                style={{ animation: 'drawUnderline 0.5s ease 1.15s forwards' }}
              />
            </svg>
          </span>
          ように
        </div>

        {/* なりたい？ */}
        <div
          className="text-white font-black"
          style={{
            fontSize: 'clamp(2.2rem, 6.5vw, 5.4rem)',
            animation: 'heroFadeUp 0.7s cubic-bezier(0.34,1.2,0.64,1) 0.78s both',
            opacity: 0,
          }}
        >
          なりたい？
        </div>
      </div>

      {/* SCROLL */}
      <div
        aria-hidden="true"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ animation: 'heroFadeIn 1s ease 1.5s both', opacity: 0 }}
      >
        <span className="text-white/30 text-xs tracking-[0.3em]">SCROLL</span>
        <div
          className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent"
          style={{ animation: 'scrollBob 2.2s ease-in-out 1.8s infinite' }}
        />
      </div>
    </section>
  )
}
