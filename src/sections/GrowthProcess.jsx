const flow = [
  { step: '挑戦', color: '#FF9F1C', desc: 'やってみたい技に挑む', neg: false },
  { step: '失敗', color: '#e07a0a', desc: 'うまくいかない。怖い。難しい。', neg: true },
  { step: '考える', color: '#c86800', desc: 'なぜ？何が違う？次どうしよう？', neg: false },
  { step: 'また挑戦', color: '#FF9F1C', desc: '少し変えて、もう一度。', neg: false },
  { step: 'できた！', color: '#FFC928', desc: 'この瞬間のワクワクが、また次の挑戦を生む。', neg: false, big: true },
]

export default function GrowthProcess() {
  return (
    <section className="py-24 md:py-32 bg-[#1a1a2e] px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="reveal text-center mb-16">
          <p className="text-[#FF9F1C] text-xs tracking-[0.3em] uppercase mb-5">楽しいだけじゃない</p>
          <h2
            className="font-bold text-white leading-tight mb-5"
            style={{ fontSize: 'clamp(1.7rem, 5vw, 3.2rem)' }}
          >
            楽しいだけじゃない。
            <br />
            <span className="text-[#FF9F1C]">だからこそ、「できた！」はもっと嬉しい。</span>
          </h2>
          <p className="text-white/45 text-base md:text-lg max-w-md mx-auto leading-relaxed">
            本当にやりたいことへ挑戦するとき、
            <br />
            途中には必ず「壁」があります。
          </p>
        </div>

        {/* flow */}
        <div className="flex flex-col items-center gap-0 max-w-xs mx-auto mb-16">
          {flow.map((item, i) => (
            <div key={i} className={`reveal reveal-delay-${i + 1} flex flex-col items-center w-full`}>
              <div
                className={`w-full rounded-2xl px-6 py-5 text-center border transition-all duration-300 ${
                  item.big
                    ? 'bg-[#FF9F1C] border-transparent shadow-xl shadow-[#FF9F1C]/30'
                    : item.neg
                    ? 'bg-white/5 border-white/10'
                    : 'bg-white/8 border-white/10'
                }`}
              >
                <p
                  className={`font-bold text-xl mb-1 ${item.big ? 'text-[#1a1a2e] text-3xl' : 'text-white'}`}
                >
                  {item.step}
                </p>
                <p className={`text-sm leading-snug ${item.big ? 'text-[#1a1a2e]/70' : 'text-white/45'}`}>
                  {item.desc}
                </p>
              </div>
              {i < flow.length - 1 && (
                <div className="flex flex-col items-center my-1">
                  <div className="w-px h-5 bg-white/15" />
                  <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                    <path d="M1 1L6 7L11 1" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* bottom note */}
        <div className="reveal text-center">
          <p className="text-white/30 text-sm mb-3">この積み重ねによって</p>
          <p
            className="text-white font-bold"
            style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.7rem)' }}
          >
            「挑戦すること」そのものが楽しくなる。
          </p>

          {/* photo placeholder */}
          <div className="mt-12 mx-auto max-w-2xl rounded-2xl overflow-hidden bg-white/5 border border-white/10"
            style={{ aspectRatio: '16/7' }}>
            <div className="w-full h-full flex items-center justify-center text-white/20 p-6">
              <div className="text-center">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" className="mx-auto mb-2">
                  <rect x="3" y="3" width="18" height="18" rx="2"/>
                  <circle cx="8.5" cy="8.5" r="1.5"/>
                  <polyline points="21 15 16 10 5 21"/>
                </svg>
                <p className="text-sm">「できた！」の瞬間の写真 — 後日差し替え</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
