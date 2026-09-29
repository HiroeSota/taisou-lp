import Marquee from '../components/Marquee'

const tagsRow1 = [
  'バク転をやってみたい',
  '逆立ちができるようになりたい',
  '運動をもっと楽しみたい',
  '自分の身体を思い通りに動かしたい',
  '苦手な動きを克服したい',
]

const tagsRow2 = [
  '集団レッスンが合わなかった',
  '新しいことに挑戦したい',
  '体力・柔軟性を上げたい',
  '子どもに自信をつけさせたい',
  'できた！という瞬間を体験したい',
]

const ageGroups = [
  {
    label: '小学生〜',
    desc: '「やってみたい！」という好奇心を、本物の力に変えます。',
    color: '#FF9F1C',
  },
  {
    label: '中高生〜',
    desc: '技を磨きながら、身体の使い方を論理的に学べます。',
    color: '#FFC928',
  },
  {
    label: '大人〜',
    desc: '年齢に関係なく、始められます。自分の身体と向き合う時間を。',
    color: '#FF9F1C',
  },
]

export default function ForWho() {
  return (
    <section className="py-24 md:py-32 bg-white overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        <div className="reveal text-center mb-12">
          <p className="text-[#FF9F1C] text-xs tracking-[0.3em] uppercase mb-4">こんな人におすすめ</p>
          <h2
            className="font-bold text-[#1a1a2e] leading-tight"
            style={{ fontSize: 'clamp(1.6rem, 4vw, 2.8rem)' }}
          >
            「やってみたい」という気持ちが
            <br />
            あれば、それで十分です。
          </h2>
        </div>
      </div>

      {/* marquee tag rows (full bleed, no px-6) */}
      <div className="reveal reveal-delay-1 mb-3">
        <Marquee
          items={tagsRow1}
          direction="left"
          speed={35}
          gap={24}
          itemClass="inline-block bg-[#fffcf5] border border-[#FF9F1C]/30 text-[#1a1a2e] text-sm font-medium px-5 py-2.5 rounded-full"
          separator="·"
        />
      </div>
      <div className="reveal reveal-delay-2 mb-16">
        <Marquee
          items={tagsRow2}
          direction="right"
          speed={30}
          gap={24}
          itemClass="inline-block bg-[#fffcf5] border border-[#FFC928]/40 text-[#1a1a2e] text-sm font-medium px-5 py-2.5 rounded-full"
          separator="·"
        />
      </div>

      <div className="max-w-5xl mx-auto px-6">
        {/* age groups */}
        <div className="grid md:grid-cols-3 gap-5">
          {ageGroups.map((ag, i) => (
            <div
              key={i}
              className={`reveal reveal-delay-${i + 1} card-hover rounded-2xl p-7 text-center border border-[#ede8de]`}
              style={{ background: 'linear-gradient(135deg, #fffcf5 0%, #fff 100%)' }}
            >
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-sm"
                style={{ background: ag.color, boxShadow: `0 6px 20px ${ag.color}40` }}
              >
                {ag.label}
              </div>
              <p className="text-[#1a1a2e]/55 text-sm leading-relaxed">{ag.desc}</p>
            </div>
          ))}
        </div>

        {/* photo strip */}
        <div className="reveal reveal-delay-4 mt-16 grid grid-cols-3 gap-3">
          {[
            { label: '挑戦中の表情', rotate: '-2deg' },
            { label: '先生と練習', rotate: '0.8deg' },
            { label: '技ができた瞬間', rotate: '-1deg' },
          ].map((item, i) => (
            <div
              key={i}
              className="rounded-xl overflow-hidden bg-[#f5f0e8] border border-[#ede8de]"
              style={{
                aspectRatio: '3/4',
                transform: `rotate(${item.rotate})`,
                transition: 'transform 0.3s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'rotate(0deg) scale(1.03)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = `rotate(${item.rotate})`)}
            >
              <div className="w-full h-full flex items-center justify-center text-center p-3">
                <div>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="mx-auto mb-2 text-[#1a1a2e]/20">
                    <rect x="3" y="3" width="18" height="18" rx="2"/>
                    <circle cx="8.5" cy="8.5" r="1.5"/>
                    <polyline points="21 15 16 10 5 21"/>
                  </svg>
                  <p className="text-[#1a1a2e]/30 text-xs">{item.label}</p>
                  <p className="text-[#1a1a2e]/20 text-xs mt-0.5">写真は後日</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
