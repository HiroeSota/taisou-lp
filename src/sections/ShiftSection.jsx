const phrases = [
  { before: '「習い事に行かなきゃ」', after: '「今日、教室に行きたい」' },
]

const voices = [
  '今日は何しよう？',
  '次はこれに挑戦したい！',
  '前できなかったから、もう一回やりたい！',
]

export default function ShiftSection() {
  return (
    <section id="about" className="py-28 md:py-36 bg-[#f9f7f4] px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* label */}
        <p className="reveal text-[#e85d26] text-xs tracking-[0.3em] uppercase mb-6 text-center">
          この教室が目指す体験
        </p>

        {/* main shift visual */}
        <div className="reveal reveal-delay-1 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 mb-24 text-center">
          <div className="bg-[#ede9e3] rounded-2xl px-8 py-6 md:px-12 md:py-8 flex-1 max-w-xs">
            <p className="text-[#1a1a2e]/40 text-sm tracking-wide mb-2">before</p>
            <p className="text-xl md:text-2xl font-medium text-[#1a1a2e]/60 leading-snug">
              「習い事に
              <br />
              行かなきゃ」
            </p>
          </div>

          <div className="flex flex-col items-center gap-2 text-[#e85d26]">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <path d="M6 16h20M18 8l8 8-8 8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          <div className="bg-[#1a1a2e] rounded-2xl px-8 py-6 md:px-12 md:py-8 flex-1 max-w-xs shadow-xl shadow-[#1a1a2e]/20">
            <p className="text-white/40 text-sm tracking-wide mb-2">after</p>
            <p className="text-xl md:text-2xl font-bold text-white leading-snug">
              「今日、教室に
              <br />
              <span className="text-[#e85d26]">行きたい」</span>
            </p>
          </div>
        </div>

        {/* voices */}
        <div className="text-center">
          <p className="reveal text-[#1a1a2e]/50 text-sm tracking-wide mb-10">
            子どもたちの声が変わっていく
          </p>
          <div className="flex flex-col gap-6 max-w-xl mx-auto">
            {voices.map((v, i) => (
              <div
                key={i}
                className={`reveal reveal-delay-${i + 1} bg-white rounded-2xl px-6 py-5 text-left shadow-sm border border-[#e8e3dc]`}
              >
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#e85d26] mt-2 shrink-0" />
                  <p className="text-[#1a1a2e] text-lg md:text-xl font-medium leading-snug">
                    {v}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* image placeholder */}
        <div className="reveal reveal-delay-4 mt-20 rounded-3xl overflow-hidden bg-[#ede9e3] aspect-video flex items-center justify-center">
          <div className="text-center text-[#1a1a2e]/30 p-8">
            <div className="w-16 h-16 rounded-full bg-[#1a1a2e]/10 flex items-center justify-center mx-auto mb-4">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <polyline points="21 15 16 10 5 21" />
              </svg>
            </div>
            <p className="text-sm">教室の様子 — 写真は後日差し替え予定</p>
            <p className="text-xs mt-1 opacity-60">挑戦前の真剣な表情、先生と一緒に考えている瞬間</p>
          </div>
        </div>
      </div>
    </section>
  )
}
