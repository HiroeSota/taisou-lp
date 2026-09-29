const questions = [
  '「今のどうだった？」',
  '「どこが違ったと思う？」',
  '「次はどうしてみる？」',
]

export default function Companion() {
  return (
    <section className="py-28 md:py-36 bg-[#ede9e3] px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <p className="reveal text-[#e85d26] text-xs tracking-[0.3em] uppercase mb-8 text-center">
          指導者の役割
        </p>

        <div className="reveal reveal-delay-1 text-center mb-20">
          <h2
            className="font-bold text-[#1a1a2e] leading-tight mb-4"
            style={{ fontSize: 'clamp(1.8rem, 4.5vw, 3rem)' }}
          >
            指導者は、一番の
            <span className="text-[#e85d26]">伴走者</span>。
          </h2>
          <p className="text-[#1a1a2e]/50 text-base md:text-lg max-w-md mx-auto leading-relaxed">
            答えを全部教える人ではなく、
            あなたが自分で気づけるように問いかける人。
          </p>
        </div>

        {/* questions from instructor */}
        <div className="reveal reveal-delay-2 flex flex-col gap-5 max-w-md mx-auto mb-20">
          {questions.map((q, i) => (
            <div key={i} className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-[#1a1a2e] flex items-center justify-center shrink-0 mt-1">
                <span className="text-white text-xs font-bold">先</span>
              </div>
              <div className="bg-white rounded-2xl rounded-tl-sm px-6 py-4 text-base font-medium text-[#1a1a2e] shadow-sm flex-1">
                {q}
              </div>
            </div>
          ))}
        </div>

        {/* support visual: "添え木" concept */}
        <div className="reveal reveal-delay-3 bg-[#1a1a2e] rounded-3xl p-10 md:p-16 text-center mb-14 overflow-hidden relative">
          {/* abstract support lines */}
          <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none select-none">
            <svg width="400" height="200" viewBox="0 0 400 200" fill="none">
              <line x1="200" y1="180" x2="200" y2="20" stroke="#e85d26" strokeWidth="2" strokeDasharray="4 4" />
              <line x1="160" y1="100" x2="200" y2="80" stroke="white" strokeWidth="1.5" />
              <line x1="240" y1="130" x2="200" y2="110" stroke="white" strokeWidth="1.5" />
              <circle cx="200" cy="20" r="6" fill="#e85d26" />
              <circle cx="200" cy="180" r="4" fill="white" opacity="0.4" />
            </svg>
          </div>

          <p className="text-white/40 text-xs tracking-[0.3em] uppercase mb-8">
            指導のイメージ — 「添え木」
          </p>

          <div className="flex flex-col gap-6 items-center">
            {[
              '必要なときに、',
              '必要な方向へ、',
              '必要な分だけ支える。',
            ].map((line, i) => (
              <p
                key={i}
                className={`text-white font-bold leading-tight ${
                  i === 2 ? 'text-[#e85d26]' : ''
                }`}
                style={{ fontSize: 'clamp(1.4rem, 4vw, 2.5rem)' }}
              >
                {line}
              </p>
            ))}
          </div>

          <div className="mt-10 w-px h-12 bg-gradient-to-b from-[#e85d26] to-transparent mx-auto" />

          <p className="text-white/50 mt-6 text-base md:text-lg max-w-sm mx-auto leading-relaxed">
            成長するのは本人自身。
            <br />
            指導者は代わりに動くのではなく、
            <br className="hidden sm:block" />
            本人の動きを支える存在です。
          </p>
        </div>

        {/* final message */}
        <div className="reveal reveal-delay-4 text-center bg-white rounded-2xl px-8 py-10 border border-[#e8e3dc] shadow-sm">
          <p className="text-[#1a1a2e]/40 text-sm tracking-wide mb-4">最終的に目指すのは</p>
          <p
            className="font-bold text-[#1a1a2e] leading-snug"
            style={{ fontSize: 'clamp(1.2rem, 3vw, 1.8rem)' }}
          >
            「先生がいるからできる」ではなく、
          </p>
          <p
            className="font-bold text-[#e85d26] leading-snug mt-2"
            style={{ fontSize: 'clamp(1.2rem, 3vw, 1.8rem)' }}
          >
            「先生がいなくても自分でできる」。
          </p>

          {/* image placeholder */}
          <div className="mt-8 rounded-2xl overflow-hidden bg-[#f9f7f4] aspect-video flex items-center justify-center border border-[#e8e3dc]">
            <div className="text-center text-[#1a1a2e]/30 p-6">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="mx-auto mb-3">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <polyline points="21 15 16 10 5 21" />
              </svg>
              <p className="text-sm">先生と一緒に考えている様子 — 写真は後日差し替え予定</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
