const worries = [
  { text: 'やってみたい技があるけど、どこから練習すればいい？', icon: '🤸', featured: true },
  { text: '運動が苦手で、集団レッスンについていけなかった。', icon: '😞' },
  { text: '体を動かすのは好きだけど、何か目標がほしい。', icon: '🎯' },
  { text: '子どもが運動に自信を持てるようにしてあげたい。', icon: '👶' },
  { text: '大人になってから始めても、本当にできるの？', icon: '🤔' },
]

export default function Empathy() {
  return (
    <section id="about" className="py-16 md:py-24 bg-[#fffcf5] px-6 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <div className="reveal text-center mb-10">
          <p className="text-[#FF9F1C] text-xs tracking-[0.3em] uppercase mb-3">あなたの気持ち、ありませんか？</p>
          <h2
            className="font-bold text-[#1a1a2e] leading-tight"
            style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.4rem)' }}
          >
            「やってみたい」のに、
            <br />
            なかなか踏み出せない。
          </h2>
        </div>

        {/* Worry cards — varied layout */}
        <div className="max-w-2xl mx-auto mb-10">
          {/* Featured card — full width, slightly larger */}
          <div
            className="reveal bg-white rounded-2xl px-6 py-5 mb-3 border-l-4 border-[#FF9F1C] shadow-sm flex items-start gap-4"
            style={{ borderColor: '#FF9F1C', transform: 'rotate(-0.2deg)' }}
          >
            <span className="text-2xl shrink-0 mt-0.5">{worries[0].icon}</span>
            <p className="text-[#1a1a2e] text-base md:text-lg font-semibold leading-snug">{worries[0].text}</p>
          </div>

          {/* Grid — 2 columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
            {worries.slice(1, 3).map((w, i) => (
              <div
                key={i}
                className={`reveal reveal-delay-${i + 1} bg-white rounded-2xl px-5 py-4 shadow-sm border border-[#f0ebe0] flex items-start gap-3`}
                style={{ transform: i % 2 === 0 ? 'rotate(-0.3deg)' : 'rotate(0.4deg)' }}
              >
                <span className="text-xl shrink-0 mt-0.5">{w.icon}</span>
                <p className="text-[#1a1a2e] text-sm md:text-base font-medium leading-snug">{w.text}</p>
              </div>
            ))}
          </div>

          {/* Bottom row — 2 compact cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {worries.slice(3, 5).map((w, i) => (
              <div
                key={i}
                className={`reveal reveal-delay-${i + 3} bg-white/70 rounded-xl px-5 py-4 border border-[#f0ebe0] flex items-start gap-3`}
                style={{ transform: i % 2 === 0 ? 'rotate(0.2deg)' : 'rotate(-0.3deg)' }}
              >
                <span className="text-lg shrink-0 mt-0.5">{w.icon}</span>
                <p className="text-[#1a1a2e]/75 text-sm font-medium leading-snug">{w.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Answer */}
        <div className="reveal text-center">
          <svg className="mx-auto mb-5 text-[#FF9F1C]" width="24" height="36" viewBox="0 0 32 48" fill="none">
            <path d="M16 2 Q20 24 16 40" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="4 3"/>
            <path d="M8 34 L16 44 L24 34" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <p className="text-[#1a1a2e]/45 text-sm mb-3">そんな気持ちを持つあなたへ</p>
          <p
            className="font-bold text-[#1a1a2e] leading-snug"
            style={{ fontSize: 'clamp(1.3rem, 3.5vw, 2.1rem)' }}
          >
            「まず、何がしたいか
            <br />
            <span className="underline-accent text-[#FF9F1C]">教えてください。</span>」
          </p>
          <p className="text-[#1a1a2e]/50 text-sm mt-5 max-w-md mx-auto leading-relaxed">
            この教室では、先生が教えるのではなく、
            <br className="hidden sm:block" />
            あなた自身の「やりたい」から始まります。
          </p>
        </div>
      </div>
    </section>
  )
}
