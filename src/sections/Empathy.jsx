const worries = [
  { text: 'やってみたい技があるけど、どこから練習すればいい？', icon: '🤸' },
  { text: '運動が苦手で、集団レッスンについていけなかった。', icon: '😞' },
  { text: '体を動かすのは好きだけど、何か目標がほしい。', icon: '🎯' },
  { text: '子どもが運動に自信を持てるようにしてあげたい。', icon: '👶' },
  { text: '大人になってから始めても、本当にできるの？', icon: '🤔' },
]

export default function Empathy() {
  return (
    <section id="about" className="py-24 md:py-32 bg-[#fffcf5] px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="reveal text-center mb-16">
          <p className="text-[#FF9F1C] text-xs tracking-[0.3em] uppercase mb-4">あなたの気持ち、ありませんか？</p>
          <h2
            className="font-bold text-[#1a1a2e] leading-tight"
            style={{ fontSize: 'clamp(1.6rem, 4vw, 2.8rem)' }}
          >
            「やってみたい」のに、
            <br />
            なかなか踏み出せない。
          </h2>
        </div>

        {/* worry cards — slightly staggered, subtle rotate */}
        <div className="flex flex-col gap-4 max-w-2xl mx-auto mb-16">
          {worries.map((w, i) => (
            <div
              key={i}
              className={`reveal reveal-delay-${i + 1} bg-white rounded-2xl px-6 py-5 shadow-sm border border-[#f0ebe0] flex items-start gap-4 hover:shadow-md transition-shadow duration-200`}
              style={{ transform: i % 2 === 0 ? 'rotate(-0.3deg)' : 'rotate(0.3deg)' }}
            >
              <span className="text-2xl shrink-0 mt-0.5">{w.icon}</span>
              <p className="text-[#1a1a2e] text-base md:text-lg font-medium leading-snug">{w.text}</p>
            </div>
          ))}
        </div>

        {/* answer */}
        <div className="reveal text-center">
          <div className="inline-block relative">
            {/* decorative arrow */}
            <svg className="mx-auto mb-6 text-[#FF9F1C]" width="32" height="48" viewBox="0 0 32 48" fill="none">
              <path d="M16 2 Q20 24 16 40" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="4 3"/>
              <path d="M8 34 L16 44 L24 34" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <p className="text-[#1a1a2e]/50 text-sm mb-4">そんな気持ちを持つあなたへ</p>
            <p
              className="font-bold text-[#1a1a2e] leading-snug"
              style={{ fontSize: 'clamp(1.4rem, 4vw, 2.4rem)' }}
            >
              「まず、何がしたいか
              <br />
              <span className="underline-accent text-[#FF9F1C]">教えてください。</span>」
            </p>
            <p className="text-[#1a1a2e]/50 text-base mt-6 max-w-md mx-auto leading-relaxed">
              この教室では、先生が教えるのではなく、
              <br className="hidden sm:block" />
              あなた自身の「やりたい」から始まります。
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
