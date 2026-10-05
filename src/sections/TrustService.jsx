const STATS = [
  { label: '指導経験', value: '[後日更新]' },
  { label: '得意分野', value: '[後日更新]' },
  { label: '保有資格', value: '[後日更新]' },
]

const SAFETY = [
  'レッスン前にレベルと目標を確認。無理な挑戦はしません。',
  '技は段階的にステップアップ。いきなり本番はありません。',
  '必要な時に、必要な方向へ、必要な分だけ補助します。',
]

const BASICS = [
  { label: '対象', value: '[後日更新]', note: '幅広い年齢・レベルを対象予定' },
  { label: '料金', value: '[後日更新]', note: '体験レッスン料金含む' },
  { label: '持ち物', value: '動きやすい服装・飲み物', note: '手ぶらでOK' },
  { label: '予約', value: '[後日更新]', note: 'フォーム・LINE等を予定' },
]

export default function TrustService() {
  return (
    <section className="bg-[#1a1a2e] px-6 overflow-hidden">

      {/* Instructor */}
      <div className="py-20 md:py-28 max-w-5xl mx-auto">
        <div className="reveal mb-10">
          <p className="text-[#FF9F1C] text-[11px] tracking-[0.35em] uppercase mb-2 font-bold">
            指導者
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-start">

          {/* Photo */}
          <div className="shrink-0">
            <div
              className="reveal w-44 h-56 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center"
            >
              <span className="text-white/20 text-xs tracking-wider">PHOTO</span>
            </div>
            <p className="reveal reveal-delay-1 mt-4 text-white/30 text-xs text-center">[名前 — 後日更新]</p>
          </div>

          {/* Quote + stats */}
          <div className="flex-1">
            <blockquote
              className="reveal font-bold text-white leading-snug mb-8"
              style={{ fontSize: 'clamp(1.1rem, 2.8vw, 1.6rem)' }}
            >
              「答えを教える先生」ではなく、
              <br />
              <span style={{ color: '#FF9F1C' }}>「一番の伴走者」でいたい。</span>
            </blockquote>

            <div className="reveal reveal-delay-1 grid grid-cols-3 gap-3">
              {STATS.map((s, i) => (
                <div key={i} className="rounded-xl p-4 text-center border border-white/8 bg-white/4">
                  <p className="text-white/25 text-[10px] tracking-widest uppercase mb-1.5">{s.label}</p>
                  <p className="text-white/40 font-bold text-sm">{s.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Safety + Basics */}
      <div className="border-t border-white/8 py-16 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">

          {/* Safety */}
          <div>
            <p className="reveal text-[#FF9F1C] text-[11px] tracking-[0.35em] uppercase mb-6 font-bold">
              安全への考え方
            </p>
            <ul className="space-y-4">
              {SAFETY.map((s, i) => (
                <li key={i} className={`reveal reveal-delay-${i + 1} flex items-start gap-3`}>
                  <span
                    className="shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5"
                    style={{ background: 'rgba(255,159,28,0.15)', border: '1px solid rgba(255,159,28,0.3)' }}
                  >
                    <span style={{ color: '#FF9F1C', fontSize: 9, fontWeight: 700 }}>✓</span>
                  </span>
                  <p className="text-white/55 text-sm leading-relaxed">{s}</p>
                </li>
              ))}
            </ul>
            <p className="reveal reveal-delay-4 mt-6 text-white/20 text-xs italic pl-8">
              "必要な時に、必要な方向へ、必要な分だけ。"
            </p>
          </div>

          {/* Basics */}
          <div>
            <p className="reveal text-[#FF9F1C] text-[11px] tracking-[0.35em] uppercase mb-6 font-bold">
              基本情報
            </p>
            <div className="space-y-3">
              {BASICS.map((item, i) => (
                <div
                  key={i}
                  className={`reveal reveal-delay-${i + 1} flex items-baseline gap-4 py-3 border-b border-white/6`}
                >
                  <span className="shrink-0 text-[#FF9F1C] text-[11px] font-bold tracking-wider uppercase w-16">
                    {item.label}
                  </span>
                  <span
                    className="font-medium text-sm"
                    style={{ color: item.value.includes('後日') ? 'rgba(255,255,255,0.2)' : 'rgba(255,255,255,0.75)' }}
                  >
                    {item.value}
                  </span>
                  <span className="text-white/20 text-xs">{item.note}</span>
                </div>
              ))}
            </div>
            <p className="reveal reveal-delay-5 mt-4 text-white/15 text-xs">
              ※ 料金・場所・時間は近日公開予定
            </p>
          </div>

        </div>
      </div>

    </section>
  )
}
