const VERBS = ['見る。', '考える。', '試す。', '感じる。', '直す。']

export default function LessonSteps() {
  return (
    <section className="py-24 md:py-36 bg-white px-6 overflow-hidden">
      <div className="max-w-4xl mx-auto">

        {/* ── Big opener ── */}
        <div className="reveal mb-16 md:mb-20">
          <p className="text-[#FF9F1C] text-[11px] tracking-[0.35em] uppercase mb-6 font-bold">
            どう教えるのか
          </p>
          <h2
            className="font-black text-[#1a1a2e] leading-none"
            style={{ fontSize: 'clamp(2.2rem, 7vw, 5.5rem)', letterSpacing: '-0.03em' }}
          >
            教えて終わり、
            <br />
            にしない。
          </h2>
        </div>

        {/* ── Verb flow ── */}
        <div className="reveal mb-16 md:mb-20">
          <div className="flex flex-wrap gap-x-3 gap-y-2 items-baseline">
            {VERBS.map((v, i) => (
              <span
                key={i}
                className="font-bold text-[#1a1a2e]"
                style={{
                  fontSize: 'clamp(1.2rem, 3.5vw, 2rem)',
                  color: i === 2 ? '#FF9F1C' : '#1a1a2e',
                }}
              >
                {v}
              </span>
            ))}
          </div>
          <p className="mt-4 text-[#1a1a2e]/45" style={{ fontSize: 'clamp(0.85rem, 1.8vw, 0.95rem)' }}>
            繰り返しの中で、身体が理解していく。
          </p>
        </div>

        {/* ── 3 key points ── */}
        <div className="grid md:grid-cols-3 gap-5 mb-16 md:mb-20">
          {[
            {
              title: '本人の目標からスタート',
              body: '先生が決めたカリキュラムはありません。「何ができるようになりたいか」から逆算して、練習を設計します。',
            },
            {
              title: '動きを見て、一緒に考える',
              body: '「なぜうまくいかないか」を先生が観察し、身体の使い方を一緒に確認します。否定ではなく、分析から始まります。',
            },
            {
              title: '段階を踏んで、自分で再現する',
              body: '必要なステップを小さく分け、一つひとつクリアしていきます。最後は、先生なしでも自分でできる状態を目指します。',
            },
          ].map((item, i) => (
            <div
              key={i}
              className={`reveal reveal-delay-${i + 1} rounded-2xl p-6 border border-[#ede8de] bg-[#fafaf8]`}
            >
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center mb-4"
                style={{
                  background: 'rgba(255,159,28,0.1)',
                  border: '1px solid rgba(255,159,28,0.2)',
                  color: '#FF9F1C',
                  fontSize: 11,
                  fontWeight: 700,
                }}
              >
                {String(i + 1).padStart(2, '0')}
              </div>
              <p className="font-bold text-[#1a1a2e] text-base mb-2 leading-snug">{item.title}</p>
              <p className="text-[#1a1a2e]/50 text-sm leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>

        {/* ── Closing line ── */}
        <div className="reveal border-l-4 border-[#FF9F1C] pl-6 py-1">
          <p
            className="font-bold text-[#1a1a2e] leading-snug"
            style={{ fontSize: 'clamp(1rem, 2.5vw, 1.3rem)' }}
          >
            先生がいなくても、
            <br />
            <span style={{ color: '#FF9F1C' }}>自分で再現できる状態へ。</span>
          </p>
          <p className="text-[#1a1a2e]/40 text-sm mt-2">
            それが、この教室が指導で目指すゴールです。
          </p>
        </div>
      </div>
    </section>
  )
}
