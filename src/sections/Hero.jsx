import { useEffect, useRef } from 'react'

export default function Hero() {
  const heroRef = useRef(null)

  useEffect(() => {
    const el = heroRef.current
    if (!el) return
    const move = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 28
      const y = (e.clientY / window.innerHeight - 0.5) * 28
      el.style.setProperty('--mx', `${x}px`)
      el.style.setProperty('--my', `${y}px`)
    }
    window.addEventListener('mousemove', move, { passive: true })
    return () => window.removeEventListener('mousemove', move)
  }, [])

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#1a1a2e] px-6"
    >
      {/* grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '56px 56px',
        }}
      />

      {/* floating shape 1 — large glow top right */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '-10%',
          right: '-10%',
          width: '55vmin',
          height: '55vmin',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,159,28,0.12) 0%, transparent 65%)',
          transform: 'translate(calc(var(--mx, 0px) * 0.35), calc(var(--my, 0px) * 0.35))',
          transition: 'transform 1s ease-out',
          animation: 'floatY 9s ease-in-out infinite',
        }}
      />

      {/* floating shape 2 — ring bottom left */}
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: '8%',
          left: '-5%',
          width: '38vmin',
          height: '38vmin',
          borderRadius: '50%',
          border: '1.5px solid rgba(255,201,40,0.15)',
          transform: 'translate(calc(var(--mx, 0px) * -0.2), calc(var(--my, 0px) * -0.2))',
          transition: 'transform 1.2s ease-out',
          animation: 'floatY 11s ease-in-out 2s infinite',
        }}
      />

      {/* floating shape 3 — small orange dot cluster */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '30%',
          right: '12%',
          transform: 'translate(calc(var(--mx, 0px) * 0.55), calc(var(--my, 0px) * 0.55))',
          transition: 'transform 0.7s ease-out',
          animation: 'floatY 7s ease-in-out 1s infinite',
        }}
      >
        {[0, 1, 2, 3, 4].map((i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              width: [8, 5, 6, 4, 7][i],
              height: [8, 5, 6, 4, 7][i],
              borderRadius: '50%',
              background: '#FFC928',
              opacity: [0.6, 0.4, 0.5, 0.3, 0.45][i],
              top: [0, 14, 28, 12, -8][i],
              left: [0, 18, 4, -12, 22][i],
              animation: `pulseDot ${[2.1, 2.6, 2.3, 1.9, 2.8][i]}s ease-in-out ${[0, 0.4, 0.8, 1.2, 0.2][i]}s infinite`,
            }}
          />
        ))}
      </div>

      {/* floating shape 4 — tiny ring mid left */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '55%',
          left: '8%',
          width: '80px',
          height: '80px',
          borderRadius: '50%',
          border: '1px solid rgba(255,159,28,0.25)',
          transform: 'translate(calc(var(--mx, 0px) * -0.45), calc(var(--my, 0px) * -0.45))',
          transition: 'transform 0.9s ease-out',
          animation: 'spinSlow 18s linear infinite',
        }}
      />

      {/* main content */}
      <div className="relative z-10 text-center max-w-3xl mx-auto w-full">
        <p
          className="text-[#FF9F1C] text-xs tracking-[0.35em] uppercase mb-8"
          style={{ animation: 'heroFadeIn 0.6s ease 0.2s both' }}
        >
          体操・運動教室
        </p>

        <h1
          className="text-white font-black leading-[1.1] mb-6"
          style={{
            fontSize: 'clamp(2.4rem, 7.5vw, 5.8rem)',
            letterSpacing: '-0.02em',
          }}
        >
          <span
            style={{
              display: 'block',
              animation: 'slideInLeft 0.7s cubic-bezier(0.34, 1.4, 0.64, 1) 0.3s both',
              opacity: 0,
            }}
          >
            次は、
          </span>
          <span
            className="text-[#FF9F1C]"
            style={{
              display: 'block',
              textShadow: '0 0 60px rgba(255,159,28,0.25)',
              animation: 'slideInRight 0.7s cubic-bezier(0.34, 1.4, 0.64, 1) 0.5s both',
              opacity: 0,
            }}
          >
            何ができるようになりたい？
          </span>
        </h1>

        <p
          className="text-white/50 text-base md:text-lg leading-relaxed mb-12 max-w-lg mx-auto"
          style={{ animation: 'heroFadeUp 0.9s ease 0.85s both', opacity: 0 }}
        >
          やってみたいという気持ちを大切に、
          <br className="hidden sm:block" />
          一人ひとりの挑戦に向き合います。
        </p>

        <div
          className="flex flex-col sm:flex-row gap-3 justify-center"
          style={{ animation: 'heroFadeUp 0.9s ease 1.0s both', opacity: 0 }}
        >
          <a
            href="#trial"
            className="btn-cta bg-[#FF9F1C] text-white font-bold px-8 py-4 rounded-full text-base shadow-xl"
            style={{ boxShadow: '0 8px 28px rgba(255,159,28,0.3)' }}
          >
            無料体験に申し込む
            <svg className="arrow-icon" width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M4 9h10M10 5l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a
            href="#about"
            className="inline-block border border-white/25 text-white/70 font-medium px-8 py-4 rounded-full text-base hover:border-white/50 hover:text-white transition-colors duration-200"
          >
            教室について知る
          </a>
        </div>

        {/* image placeholder */}
        <div
          className="mt-16 mx-auto max-w-2xl rounded-2xl overflow-hidden bg-white/5 border border-white/10"
          style={{
            animation: 'heroFadeUp 0.9s ease 1.2s both',
            opacity: 0,
            aspectRatio: '16/7',
          }}
        >
          <div className="w-full h-full flex items-center justify-center text-center p-6">
            <div className="text-white/20">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="mx-auto mb-3">
                <rect x="3" y="3" width="18" height="18" rx="2"/>
                <circle cx="8.5" cy="8.5" r="1.5"/>
                <polyline points="21 15 16 10 5 21"/>
              </svg>
              <p className="text-sm">教室の雰囲気写真 — 後日差し替え予定</p>
              <p className="text-xs mt-1 opacity-60">挑戦中・達成の瞬間・先生との練習シーン</p>
            </div>
          </div>
        </div>
      </div>

      {/* scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/25 text-xs tracking-widest"
        style={{ animation: 'heroFadeIn 1s ease 1.8s both', opacity: 0 }}
      >
        <span>SCROLL</span>
        <div className="w-px h-8 bg-gradient-to-b from-white/25 to-transparent" />
      </div>
    </section>
  )
}
