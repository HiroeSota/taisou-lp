const questions = [
  '今日は何したい？',
  '何に挑戦してみたい？',
  '前回、どこが惜しかった？',
]

const insights = [
  {
    keyword: '自分で選ぶから',
    body: '夢中になれる',
    detail: '先生から与えられたゴールではなく、自分で決めた目標だから。',
  },
  {
    keyword: '自分で決めたから',
    body: '少し苦しくても頑張れる',
    detail: '「やらされている」と感じるとき、人はすぐに諦める。',
  },
  {
    keyword: '興味を持ったから',
    body: '自分で考えられる',
    detail: '「どうすればできるんだろう？」という問いが自然に生まれる。',
  },
]

export default function StartFromYou() {
  return (
    <section className="py-28 md:py-36 bg-[#f9f7f4] px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <p className="reveal text-[#e85d26] text-xs tracking-[0.3em] uppercase mb-8 text-center">
          レッスンの始まり
        </p>

        <div className="reveal reveal-delay-1 text-center mb-16">
          <h2
            className="font-bold text-[#1a1a2e] leading-tight mb-4"
            style={{ fontSize: 'clamp(1.8rem, 4.5vw, 3rem)' }}
          >
            本人の「やりたい」から始まる。
          </h2>
          <p className="text-[#1a1a2e]/50 text-base md:text-lg max-w-md mx-auto leading-relaxed">
            レッスンは先生が決めるカリキュラムではなく、
            あなた自身への問いかけから始まります。
          </p>
        </div>

        {/* question bubbles */}
        <div className="reveal reveal-delay-2 flex flex-col items-start gap-4 mb-20 max-w-sm mx-auto">
          {questions.map((q, i) => (
            <div
              key={i}
              className={`bg-[#1a1a2e] text-white rounded-2xl rounded-tl-sm px-6 py-4 text-base md:text-lg font-medium shadow-md`}
              style={{ alignSelf: i % 2 === 0 ? 'flex-start' : 'flex-end' }}
            >
              {q}
            </div>
          ))}
          {/* reply bubble */}
          <div className="self-end bg-[#e85d26] text-white rounded-2xl rounded-tr-sm px-6 py-4 text-base md:text-lg font-medium shadow-md shadow-[#e85d26]/20">
            バク転、もう一回やってみたい！
          </div>
        </div>

        {/* keyword: やらされるのではなく */}
        <div className="reveal reveal-delay-3 text-center mb-20">
          <p className="text-[#1a1a2e]/30 text-sm tracking-wide mb-4">この教室のキーワード</p>
          <p
            className="font-bold text-[#1a1a2e] leading-tight"
            style={{ fontSize: 'clamp(1.6rem, 5vw, 3.5rem)' }}
          >
            やらされるのではなく、
            <br />
            <span className="text-[#e85d26]">やりに来る。</span>
          </p>
        </div>

        {/* insights */}
        <div className="grid md:grid-cols-3 gap-6">
          {insights.map((item, i) => (
            <div
              key={i}
              className={`reveal reveal-delay-${i + 1} group bg-white rounded-2xl p-7 border border-[#e8e3dc] hover:border-[#e85d26]/30 hover:shadow-lg transition-all duration-300`}
            >
              <p className="text-[#e85d26] text-sm font-medium mb-2">{item.keyword}</p>
              <p className="text-[#1a1a2e] text-xl font-bold mb-3">{item.body}</p>
              <p className="text-[#1a1a2e]/50 text-sm leading-relaxed">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
