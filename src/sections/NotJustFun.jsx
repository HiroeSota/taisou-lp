const emotions = [
  { label: '怖い', desc: '挑戦の前にある壁', icon: '◆' },
  { label: 'しんどい', desc: '何度も繰り返す練習', icon: '◆' },
  { label: '悔しい', desc: 'できなかった日の夜', icon: '◆' },
  { label: 'なかなかできない', desc: 'もどかしい時間', icon: '◆' },
]

export default function NotJustFun() {
  return (
    <section className="py-28 md:py-36 bg-[#1a1a2e] px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* label */}
        <p className="reveal text-[#e85d26] text-xs tracking-[0.3em] uppercase mb-8 text-center">
          楽しいだけの教室ではない
        </p>

        {/* main copy */}
        <div className="reveal reveal-delay-1 text-center mb-16">
          <h2
            className="text-white font-bold leading-tight mb-6"
            style={{ fontSize: 'clamp(1.8rem, 5vw, 3.5rem)' }}
          >
            楽しいだけじゃない。
            <br />
            <span className="text-[#e85d26]">
              だからこそ、「できた！」はもっと楽しい。
            </span>
          </h2>
          <p className="text-white/50 max-w-lg mx-auto text-base md:text-lg leading-relaxed">
            本当にやりたいことへ挑戦するとき、
            <br className="hidden sm:block" />
            途中には必ず「壁」があります。
          </p>
        </div>

        {/* emotions grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {emotions.map((e, i) => (
            <div
              key={i}
              className={`reveal reveal-delay-${i + 1} bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-[#e85d26]/40 transition-colors duration-300`}
            >
              <p className="text-[#e85d26]/50 text-xs mb-3">0{i + 1}</p>
              <p className="text-white font-bold text-lg mb-2">{e.label}</p>
              <p className="text-white/40 text-sm leading-relaxed">{e.desc}</p>
            </div>
          ))}
        </div>

        {/* divider arrow */}
        <div className="reveal flex flex-col items-center gap-3 mb-16 text-white/20">
          <p className="text-sm tracking-wide">それでも挑戦を続けると</p>
          <div className="flex flex-col items-center gap-1">
            {[0, 1, 2].map((i) => (
              <svg key={i} width="20" height="12" viewBox="0 0 20 12" fill="none" style={{ opacity: 1 - i * 0.25 }}>
                <path d="M1 1l9 9 9-9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            ))}
          </div>
        </div>

        {/* payoff */}
        <div className="reveal reveal-delay-1 text-center bg-gradient-to-br from-[#e85d26]/20 to-transparent rounded-3xl border border-[#e85d26]/20 p-10 md:p-16">
          <p className="text-[#e85d26] text-xs tracking-[0.3em] uppercase mb-6">その先にある瞬間</p>
          <p
            className="text-white font-bold leading-tight mb-6"
            style={{ fontSize: 'clamp(2.5rem, 8vw, 6rem)' }}
          >
            「できた！」
          </p>
          <p className="text-white/60 text-lg md:text-xl leading-relaxed max-w-md mx-auto">
            苦しかった時間があるから、
            <br />
            この瞬間の喜びはもっと深くなる。
          </p>

          {/* image placeholder */}
          <div className="mt-10 rounded-2xl overflow-hidden bg-white/5 aspect-video flex items-center justify-center border border-white/10">
            <div className="text-center text-white/20 p-6">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="mx-auto mb-3">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <polyline points="21 15 16 10 5 21" />
              </svg>
              <p className="text-sm">技ができた直後の表情 — 写真は後日差し替え予定</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
