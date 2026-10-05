import Marquee from '../components/Marquee'

const contentTags = [
  'バク転', '逆立ち・倒立', '側転', '跳び箱', '鉄棒',
  'マット運動', 'アクロバット', '柔軟・ストレッチ', '身体の使い方', 'バランス', '基礎体力づくり',
]

const ageGroups = [
  { label: '小学生〜', desc: '「やってみたい！」という好奇心を、本物の力に。', color: '#FF9F1C' },
  { label: '中高生〜', desc: '技を磨きながら、身体の使い方を論理的に学ぶ。', color: '#FFC928' },
  { label: '大人〜', desc: '年齢に関係なく、自分の身体と向き合う時間を。', color: '#FF9F1C' },
]

export default function Want() {
  return (
    <section id="about" className="py-20 md:py-32 bg-[#fffcf5] overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 mb-10">
        <div className="reveal">
          <p className="text-[#FF9F1C] text-xs tracking-[0.35em] uppercase mb-5 font-bold">
            なにをやってみたい？
          </p>
          <h2
            className="font-black text-[#1a1a2e] leading-tight"
            style={{ fontSize: 'clamp(2rem, 5.5vw, 4rem)', letterSpacing: '-0.02em' }}
          >
            まず、
            <br />
            <span className="underline-accent" style={{ color: '#FF9F1C' }}>教えてください。</span>
          </h2>
          <p className="mt-5 text-[#1a1a2e]/45 text-sm leading-relaxed max-w-sm">
            先生が教えるのではなく、あなたの「やりたい」から始まります。
          </p>
        </div>
      </div>

      <div className="reveal reveal-delay-1 mb-3">
        <Marquee
          items={contentTags.slice(0, 7)}
          direction="left"
          speed={30}
          gap={20}
          itemClass="inline-block bg-white border border-[#FF9F1C]/30 text-[#1a1a2e] text-sm font-medium px-5 py-2.5 rounded-full"
          separator="·"
        />
      </div>
      <div className="reveal reveal-delay-2 mb-14">
        <Marquee
          items={contentTags.slice(4)}
          direction="right"
          speed={25}
          gap={20}
          itemClass="inline-block bg-white border border-[#FFC928]/40 text-[#1a1a2e] text-sm font-medium px-5 py-2.5 rounded-full"
          separator="·"
        />
      </div>

      <div className="max-w-4xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-4">
          {ageGroups.map((ag, i) => (
            <div
              key={i}
              className={`reveal reveal-delay-${i + 1} rounded-2xl p-6 text-center border border-[#ede8de] bg-white`}
            >
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-sm"
                style={{ background: ag.color, boxShadow: `0 4px 16px ${ag.color}40` }}
              >
                {ag.label}
              </div>
              <p className="text-[#1a1a2e]/55 text-sm leading-relaxed">{ag.desc}</p>
            </div>
          ))}
        </div>
        <p className="reveal text-[#1a1a2e]/25 text-xs text-center mt-8">
          ※ 対応内容は後日更新予定。お気軽にご相談ください。
        </p>
      </div>
    </section>
  )
}
