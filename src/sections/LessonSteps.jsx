const steps = [
  {
    num: '01',
    title: '「何ができるようになりたい？」を聞く',
    body: 'まず先生があなたに問いかけます。バク転、逆立ち、側転——なんでもOK。漠然とした「もっと身体を動かしたい」もOK。',
  },
  {
    num: '02',
    title: '今の身体の動きを一緒に確認する',
    body: '今できること・できないこと・どこが課題かを一緒に確認します。否定なし。あくまで「今の状態を知るため」の確認です。',
  },
  {
    num: '03',
    title: '目標から逆算して練習する',
    body: '「バク転のために、まず後ろに倒れる感覚に慣れよう」——ゴールからの道筋を先生が一緒に考えます。',
  },
  {
    num: '04',
    title: '小さな成功体験を積み重ねる',
    body: '「昨日できなかったことが今日できた」という積み重ねが自信になります。大きな技への道は、小さな「できた」の集合体です。',
  },
  {
    num: '05',
    title: '「次は何をしたい？」で終わる',
    body: 'レッスンの最後は振り返りと次の目標設定。「次も来たい」という気持ちで帰ってもらうことを大切にしています。',
  },
]

export default function LessonSteps() {
  return (
    <section className="py-24 md:py-32 bg-white px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="reveal text-center mb-16">
          <p className="text-[#FF9F1C] text-xs tracking-[0.3em] uppercase mb-4">レッスンの流れ</p>
          <h2
            className="font-bold text-[#1a1a2e] leading-tight mb-4"
            style={{ fontSize: 'clamp(1.6rem, 4vw, 2.8rem)' }}
          >
            あなたの「やりたい」から
            <br />
            すべてが始まる。
          </h2>
          <p className="text-[#1a1a2e]/50 text-base max-w-md mx-auto leading-relaxed">
            決められたカリキュラムはありません。
            一人ひとりの目標に合わせて、レッスンを設計します。
          </p>
        </div>

        <div className="relative">
          {/* vertical line */}
          <div className="hidden md:block absolute left-[28px] top-6 bottom-6 w-0.5 bg-gradient-to-b from-[#FF9F1C] via-[#FFC928] to-[#FF9F1C]/20" />

          <div className="flex flex-col gap-8 md:gap-10">
            {steps.map((s, i) => (
              <div
                key={i}
                className={`reveal reveal-delay-${i + 1} flex gap-6 md:gap-8 items-start`}
              >
                {/* step circle */}
                <div
                  className="relative shrink-0 w-14 h-14 rounded-full flex items-center justify-center font-bold text-sm z-10"
                  style={{
                    background: i === 4 ? '#FF9F1C' : '#fff',
                    border: `2px solid ${i === 4 ? '#FF9F1C' : '#e8e0d0'}`,
                    color: i === 4 ? '#fff' : '#FF9F1C',
                  }}
                >
                  {s.num}
                </div>

                {/* content */}
                <div
                  className={`flex-1 rounded-2xl p-6 md:p-8 border transition-all duration-300 hover:shadow-md ${
                    i === 4
                      ? 'bg-[#fffaf0] border-[#FF9F1C]/30'
                      : 'bg-[#fafaf8] border-[#ede8de]'
                  }`}
                >
                  <p className="font-bold text-[#1a1a2e] text-lg mb-2 leading-snug">{s.title}</p>
                  <p className="text-[#1a1a2e]/55 text-sm md:text-base leading-relaxed">{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
