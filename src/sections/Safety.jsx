const points = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <path d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.35C17.25 22.15 21 17.25 21 12V7L12 2z"/>
      </svg>
    ),
    text: '今のレベルをしっかり確認してから始める',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <path d="M2 20h20M6 20V10M12 20V4M18 20v-8"/>
      </svg>
    ),
    text: '小さなステップで段階的に挑戦する',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <circle cx="12" cy="8" r="4"/>
        <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
        <path d="M17 13l3 3-3 3"/>
      </svg>
    ),
    text: '必要な時・必要な力だけの補助を行う',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <circle cx="12" cy="12" r="9"/>
        <path d="M12 8v4l3 3"/>
      </svg>
    ),
    text: '本人が「やりたい」と思うペースで進める',
  },
]

export default function Safety() {
  return (
    <section className="py-20 md:py-28 bg-[#1a1a2e] px-6 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <div className="reveal md:flex md:items-start md:gap-16">

          {/* Left: copy */}
          <div className="md:flex-1 mb-12 md:mb-0">
            <p className="text-[#FF9F1C] text-[11px] tracking-[0.35em] uppercase mb-6 font-bold">
              安全への考え方
            </p>
            <h2
              className="font-bold text-white leading-tight mb-6"
              style={{ fontSize: 'clamp(1.5rem, 4vw, 2.6rem)' }}
            >
              「挑戦」と「安心」は
              <br />
              両立できます。
            </h2>
            <p className="text-white/45 leading-relaxed" style={{ fontSize: 'clamp(0.85rem, 1.8vw, 0.95rem)' }}>
              この教室では、無理に技をやらせることはしません。
              <br className="hidden md:block"/>
              段階を踏み、必要な補助を行いながら、
              <br className="hidden md:block"/>
              安全に挑戦できる環境をつくっています。
            </p>
          </div>

          {/* Right: points */}
          <div className="flex-1 space-y-4">
            {points.map((p, i) => (
              <div
                key={i}
                className={`reveal reveal-delay-${i + 1} flex items-start gap-4`}
              >
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 12,
                    background: 'rgba(255,159,28,0.1)',
                    border: '1px solid rgba(255,159,28,0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    color: '#FF9F1C',
                  }}
                >
                  {p.icon}
                </div>
                <p
                  className="text-white/70 leading-relaxed pt-2.5"
                  style={{ fontSize: 'clamp(0.85rem, 1.8vw, 0.95rem)' }}
                >
                  {p.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Quote */}
        <div className="reveal mt-14 border-t border-white/8 pt-10 text-center">
          <p className="text-white/30 text-sm italic">
            「必要な時に、必要な方向へ、必要な分だけ。」
            <span className="ml-3 not-italic text-white/20">— 指導の基本姿勢</span>
          </p>
        </div>
      </div>
    </section>
  )
}
