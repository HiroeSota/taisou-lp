// 未確定の項目はプレースホルダーで記載。確定後にここを更新してください。
const INFO = [
  {
    label: '対象',
    value: '[後日更新]',
    note: '幅広い年齢・レベルを対象予定',
    placeholder: true,
  },
  {
    label: '料金',
    value: '[後日更新]',
    note: '体験レッスン料金含む',
    placeholder: true,
  },
  {
    label: 'レッスン時間',
    value: '[後日更新]',
    note: '1回あたりの目安時間',
    placeholder: true,
  },
  {
    label: '場所・会場',
    value: '[後日更新]',
    note: 'アクセス情報は近日公開',
    placeholder: true,
  },
  {
    label: '持ち物',
    value: '動きやすい服装・飲み物',
    note: '手ぶらでOK。シューズは[後日更新]',
    placeholder: false,
  },
  {
    label: '予約方法',
    value: '[後日更新]',
    note: 'フォーム・LINE等を予定',
    placeholder: true,
  },
  {
    label: '支払い方法',
    value: '[後日更新]',
    note: '現金・振込等を予定',
    placeholder: true,
  },
]

export default function BasicInfo() {
  return (
    <section className="py-20 md:py-28 bg-white px-6 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <div className="reveal text-center mb-12">
          <p className="text-[#FF9F1C] text-[11px] tracking-[0.35em] uppercase mb-4 font-bold">
            基本情報
          </p>
          <h2
            className="font-bold text-[#1a1a2e] leading-tight"
            style={{ fontSize: 'clamp(1.4rem, 3.5vw, 2.2rem)' }}
          >
            参加にあたって
          </h2>
        </div>

        <div className="reveal grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
          {INFO.map((item, i) => (
            <div
              key={i}
              className="rounded-2xl px-6 py-5 border"
              style={{
                background: item.placeholder ? '#fafaf8' : '#fffcf5',
                borderColor: item.placeholder ? '#ede8de' : 'rgba(255,159,28,0.3)',
              }}
            >
              <p
                className="text-[11px] font-bold tracking-[0.15em] uppercase mb-1.5"
                style={{ color: '#FF9F1C' }}
              >
                {item.label}
              </p>
              <p
                className="font-bold mb-1"
                style={{
                  color: item.placeholder ? 'rgba(26,26,46,0.25)' : '#1a1a2e',
                  fontSize: 'clamp(0.9rem, 2vw, 1rem)',
                }}
              >
                {item.value}
              </p>
              <p className="text-[11px]" style={{ color: 'rgba(26,26,46,0.35)' }}>
                {item.note}
              </p>
            </div>
          ))}
        </div>

        <p className="reveal text-center text-[#1a1a2e]/30 text-xs">
          ※ 料金・場所・時間などの詳細は近日公開予定です
        </p>
      </div>
    </section>
  )
}
