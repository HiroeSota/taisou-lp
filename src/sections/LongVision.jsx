const stages = [
  {
    age: '子どもの頃',
    question: '「どうしたら逆立ちできる？」',
    note: '初めての挑戦',
    color: '#e85d26',
  },
  {
    age: '大人になれば',
    question: '「どうしたらもっと自由に身体を動かせる？」',
    note: '深まる探求',
    color: '#d44f1e',
  },
  {
    age: '高齢になれば',
    question: '「どうしたら自分の足で歩き続けられる？」',
    note: '生涯の力',
    color: '#1a1a2e',
  },
]

export default function LongVision() {
  return (
    <section className="py-28 md:py-36 bg-[#f9f7f4] px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <p className="reveal text-[#e85d26] text-xs tracking-[0.3em] uppercase mb-8 text-center">
          その先に目指していること
        </p>

        <div className="reveal reveal-delay-1 text-center mb-16">
          <h2
            className="font-bold text-[#1a1a2e] leading-tight mb-4"
            style={{ fontSize: 'clamp(1.6rem, 4vw, 2.8rem)' }}
          >
            問いは変わっても、
            <br />
            力は変わらない。
          </h2>
          <p className="text-[#1a1a2e]/50 text-base md:text-lg max-w-lg mx-auto leading-relaxed">
            年齢とともに、「やりたいこと」や「問い」は変わっていきます。
            でも、その問いに向き合う力は、ずっと使い続けられます。
          </p>
        </div>

        {/* stages */}
        <div className="relative mb-20">
          {/* connecting line (desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-[#e85d26]/30 via-[#e85d26]/60 to-[#1a1a2e]/60 -translate-y-1/2" />

          <div className="grid md:grid-cols-3 gap-6 relative z-10">
            {stages.map((stage, i) => (
              <div
                key={i}
                className={`reveal reveal-delay-${i + 1} bg-white rounded-2xl p-8 border border-[#e8e3dc] hover:shadow-lg hover:-translate-y-1 transition-all duration-300`}
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center mb-5"
                  style={{ backgroundColor: stage.color + '15' }}
                >
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: stage.color }} />
                </div>
                <p className="text-[#1a1a2e]/40 text-xs tracking-wide uppercase mb-3">{stage.age}</p>
                <p className="text-[#1a1a2e] font-bold text-lg leading-snug mb-3">{stage.question}</p>
                <p className="text-[#1a1a2e]/40 text-sm">{stage.note}</p>
              </div>
            ))}
          </div>
        </div>

        {/* constant skills */}
        <div className="reveal reveal-delay-3 bg-[#1a1a2e] rounded-3xl p-10 md:p-14 mb-16 shadow-xl shadow-[#1a1a2e]/10">
          <p className="text-white/40 text-sm tracking-wide text-center mb-8">年齢が変わっても変わらない力</p>
          <div className="grid sm:grid-cols-3 gap-6 text-center">
            {[
              '自分の身体に気づく',
              '自分で考える',
              '必要な行動を選ぶ',
            ].map((skill, i) => (
              <div key={i} className="flex flex-col items-center gap-3">
                <div className="w-12 h-12 rounded-full border border-[#e85d26]/30 flex items-center justify-center">
                  <span className="text-[#e85d26] text-lg font-bold">{i + 1}</span>
                </div>
                <p className="text-white font-medium text-base">{skill}</p>
              </div>
            ))}
          </div>
        </div>

        {/* purpose */}
        <div className="reveal reveal-delay-4 text-center">
          <p className="text-[#1a1a2e]/40 text-sm tracking-wide mb-6">体操・運動を通じて育てたいもの</p>
          <p
            className="font-bold text-[#1a1a2e] leading-snug max-w-2xl mx-auto"
            style={{ fontSize: 'clamp(1.3rem, 3.5vw, 2.2rem)' }}
          >
            「自分の身体と、
            <br />
            <span className="text-[#e85d26]">生涯付き合っていける力。」</span>
          </p>
        </div>
      </div>
    </section>
  )
}
