const steps = [
  {
    label: '成功する',
    note: '一度できた',
    muted: false,
  },
  {
    label: '理由を理解する',
    note: 'なぜできたか分かる',
    muted: false,
  },
  {
    label: '失敗も理解する',
    note: 'なぜ崩れるか分かる',
    muted: false,
  },
  {
    label: '自分で修正する',
    note: '気づいたら直せる',
    muted: false,
  },
  {
    label: '再現できる',
    note: '安定して繰り返せる',
    muted: false,
  },
  {
    label: '先生なしでもできる',
    note: '本当に自分のものになった',
    highlight: true,
  },
]

export default function Mastery() {
  return (
    <section className="py-28 md:py-36 bg-[#ede9e3] px-6 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <p className="reveal text-[#e85d26] text-xs tracking-[0.3em] uppercase mb-8 text-center">
          私たちが考える「習得」
        </p>

        <div className="reveal reveal-delay-1 text-center mb-16">
          <h2
            className="font-bold text-[#1a1a2e] leading-tight mb-4"
            style={{ fontSize: 'clamp(1.6rem, 4vw, 2.8rem)' }}
          >
            一度できただけでは、
            <br />
            まだ終わりじゃない。
          </h2>
          <p className="text-[#1a1a2e]/50 text-base md:text-lg max-w-md mx-auto leading-relaxed">
            本当の習得とは、
            先生がいなくても自分で再現できる状態のこと。
          </p>
        </div>

        {/* steps */}
        <div className="relative max-w-sm mx-auto">
          {/* vertical line */}
          <div className="absolute left-[19px] top-6 bottom-6 w-px bg-gradient-to-b from-[#e85d26]/30 via-[#e85d26]/60 to-[#e85d26]" />

          <div className="flex flex-col gap-0">
            {steps.map((step, i) => (
              <div
                key={i}
                className={`reveal reveal-delay-${Math.min(i + 1, 6)} flex items-start gap-5 relative pb-8 last:pb-0`}
              >
                {/* dot */}
                <div
                  className={`relative z-10 w-10 h-10 rounded-full flex items-center justify-center shrink-0 border-2 transition-colors duration-300 ${
                    step.highlight
                      ? 'bg-[#e85d26] border-[#e85d26] shadow-lg shadow-[#e85d26]/30'
                      : 'bg-[#f9f7f4] border-[#e85d26]/40'
                  }`}
                >
                  {step.highlight ? (
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <polyline points="3 9 7 13 15 5" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  ) : (
                    <span className="text-[#e85d26] text-xs font-bold">{i + 1}</span>
                  )}
                </div>

                {/* text */}
                <div className="pt-1.5 flex-1">
                  <p
                    className={`font-bold text-lg ${
                      step.highlight ? 'text-[#e85d26]' : 'text-[#1a1a2e]'
                    }`}
                  >
                    {step.label}
                  </p>
                  <p className="text-[#1a1a2e]/50 text-sm mt-1">{step.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* conclusion */}
        <div className="reveal reveal-delay-4 mt-20 text-center bg-[#1a1a2e] rounded-3xl px-8 py-12 shadow-xl shadow-[#1a1a2e]/20">
          <p className="text-white/40 text-sm tracking-wide mb-6">そこまでいって、はじめて</p>
          <p
            className="text-white font-bold leading-tight mb-4"
            style={{ fontSize: 'clamp(1.8rem, 5vw, 3.5rem)' }}
          >
            「自分のものになった」
          </p>
          <p className="text-white/50 text-base md:text-lg max-w-sm mx-auto leading-relaxed">
            と考えます。
          </p>
        </div>
      </div>
    </section>
  )
}
