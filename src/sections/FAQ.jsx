import { useState } from 'react'

const faqs = [
  {
    q: '運動が苦手でも大丈夫ですか？',
    a: 'まったく問題ありません。この教室では「今できること・できないこと」を一緒に確認するところから始めます。苦手なことは否定せず、「どこから練習すればいいか」を一緒に考えます。',
  },
  {
    q: '初心者でも参加できますか？',
    a: 'はい、初心者の方を大歓迎しています。むしろ、最初から一緒にゼロから作り上げていける初心者の方のほうが、教室の良さを実感しやすいかもしれません。',
  },
  {
    q: '何歳から参加できますか？',
    a: '[年齢条件は後日更新予定です。] 幅広い年代の方を対象としています。お子さんから大人の方まで、それぞれのペースに合わせて対応します。',
  },
  {
    q: 'バク転以外の目標でも大丈夫ですか？',
    a: 'もちろんです。「逆立ちしたい」「倒立前転をきれいにしたい」「とにかく身体を動かしたい」など、どんな目標でも歓迎します。目標が漠然としていても構いません。',
  },
  {
    q: '持ち物は何が必要ですか？',
    a: '動きやすい服装（運動できるもの）と飲み物があればOKです。シューズ等の詳細は[後日更新予定]です。手ぶらでお越しいただける準備を整えています。',
  },
  {
    q: '怪我が心配です。安全ですか？',
    a: '安全には最大限配慮しています。補助は「本人の動きを邪魔せず、必要なタイミングに必要な力だけを加える」考え方で行います。初めての技は必ず段階を踏んで練習するため、いきなり危険な状況にはなりません。',
  },
  {
    q: '体験後、すぐに入会しなければいけませんか？',
    a: 'いいえ、体験後に入会を強制することはありません。じっくりと考えていただいて構いません。「まずは体験してみる」という気軽な気持ちでお越しください。',
  },
]

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-[#ede8de] last:border-0">
      <button
        className="w-full flex items-center justify-between gap-4 py-5 text-left hover:text-[#FF9F1C] transition-colors duration-200"
        onClick={() => setOpen(!open)}
        type="button"
      >
        <p className="font-bold text-[#1a1a2e] text-base leading-snug pr-2">{q}</p>
        <div
          className={`shrink-0 w-8 h-8 rounded-full border-2 border-[#FF9F1C] flex items-center justify-center transition-transform duration-300 ${open ? 'rotate-45' : ''}`}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <line x1="7" y1="2" x2="7" y2="12" stroke="#FF9F1C" strokeWidth="2" strokeLinecap="round" />
            <line x1="2" y1="7" x2="12" y2="7" stroke="#FF9F1C" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>
      </button>
      <div className={`faq-answer ${open ? 'open' : ''}`}>
        <p className="text-[#1a1a2e]/60 text-sm leading-relaxed pb-5 pr-12">{a}</p>
      </div>
    </div>
  )
}

export default function FAQ() {
  return (
    <section className="py-24 md:py-32 bg-[#fffcf5] px-6 overflow-hidden">
      <div className="max-w-3xl mx-auto">
        <div className="reveal text-center mb-14">
          <p className="text-[#FF9F1C] text-xs tracking-[0.3em] uppercase mb-4">よくある質問</p>
          <h2
            className="font-bold text-[#1a1a2e] leading-tight"
            style={{ fontSize: 'clamp(1.6rem, 4vw, 2.8rem)' }}
          >
            体験前の不安、
            <br />
            解消しておきましょう。
          </h2>
        </div>

        <div className="reveal reveal-delay-1 bg-white rounded-3xl p-6 md:p-10 border border-[#ede8de] shadow-sm">
          {faqs.map((faq, i) => (
            <FAQItem key={i} q={faq.q} a={faq.a} />
          ))}
        </div>

        <div className="reveal reveal-delay-2 mt-8 text-center">
          <p className="text-[#1a1a2e]/40 text-sm">その他のご質問は</p>
          <p className="text-[#1a1a2e]/40 text-sm mt-1">[お問い合わせ先 — 後日更新予定] までお気軽にどうぞ</p>
        </div>
      </div>
    </section>
  )
}
