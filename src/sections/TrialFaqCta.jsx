import { useState } from 'react'

const TRIAL_STEPS = [
  { num: '01', title: '予約する', desc: 'フォームまたはLINEから希望日時を送ってください。' },
  { num: '02', title: 'ヒアリング + レッスン', desc: 'まず「何がしたいか」を聞かせてください。それを元にその日のレッスンを設計します。' },
  { num: '03', title: '振り返り', desc: 'できたこと・次の課題を一緒に確認します。続けるかどうかはその後でOK。' },
]

const FAQ_ITEMS = [
  {
    q: '運動が苦手でも大丈夫ですか？',
    a: 'はい。「苦手」の原因は人それぞれです。まず動きを一緒に確認して、あなたに合った練習を設計します。',
  },
  {
    q: '目標がなくても参加できますか？',
    a: 'もちろんです。「なんとなく体を動かしたい」も立派なスタートです。一緒に見つけていきましょう。',
  },
  {
    q: '子どもでも大人でも参加できますか？',
    a: '幅広い年齢・レベルを対象予定です。詳細は近日公開予定ですので、お気軽にお問い合わせください。',
  },
  {
    q: '持ち物はなんですか？',
    a: '動きやすい服装と飲み物のみ。手ぶらでお越しいただけます。シューズについては近日公開予定です。',
  },
  {
    q: '安全面が心配です。',
    a: 'レッスン前にレベルと目標を必ず確認します。技は段階的に進め、補助は必要な時だけ行います。無理な挑戦は一切しません。',
  },
]

export default function TrialFaqCta() {
  const [open, setOpen] = useState(null)

  return (
    <>
      {/* Trial flow */}
      <section id="trial" className="py-20 md:py-28 bg-white px-6 overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <div className="reveal mb-12">
            <p className="text-[#FF9F1C] text-[11px] tracking-[0.35em] uppercase mb-4 font-bold">
              体験レッスンの流れ
            </p>
            <h2
              className="font-bold text-[#1a1a2e] leading-tight"
              style={{ fontSize: 'clamp(1.5rem, 4vw, 2.6rem)' }}
            >
              3ステップで、
              <br />
              はじめの一歩を。
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {TRIAL_STEPS.map((s, i) => (
              <div key={i} className={`reveal reveal-delay-${i + 1} relative`}>
                {i < TRIAL_STEPS.length - 1 && (
                  <div
                    className="hidden md:block absolute top-5 left-full w-6 text-center text-[#1a1a2e]/15 text-sm"
                    style={{ zIndex: 1 }}
                  >
                    →
                  </div>
                )}
                <div className="flex items-start gap-4">
                  <span
                    className="shrink-0 font-black text-[#FF9F1C]"
                    style={{ fontSize: 'clamp(1.8rem, 4vw, 2.4rem)', lineHeight: 1 }}
                  >
                    {s.num}
                  </span>
                  <div>
                    <p className="font-bold text-[#1a1a2e] mb-1 text-base">{s.title}</p>
                    <p className="text-[#1a1a2e]/45 text-sm leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-[#fffcf5] px-6 overflow-hidden">
        <div className="max-w-2xl mx-auto">
          <div className="reveal mb-10">
            <p className="text-[#FF9F1C] text-[11px] tracking-[0.35em] uppercase mb-4 font-bold">FAQ</p>
            <h2
              className="font-bold text-[#1a1a2e] leading-tight"
              style={{ fontSize: 'clamp(1.4rem, 3.5vw, 2.2rem)' }}
            >
              よくある質問
            </h2>
          </div>

          <div className="space-y-3">
            {FAQ_ITEMS.map((item, i) => (
              <div
                key={i}
                className="reveal rounded-2xl bg-white border border-[#ede8de] overflow-hidden"
              >
                <button
                  type="button"
                  className="w-full flex items-center justify-between px-6 py-5 text-left cursor-pointer"
                  onClick={() => setOpen(open === i ? null : i)}
                >
                  <span className="font-semibold text-[#1a1a2e] text-sm leading-snug pr-4">{item.q}</span>
                  <span
                    className="shrink-0 text-[#FF9F1C] transition-transform duration-300"
                    style={{ transform: open === i ? 'rotate(45deg)' : 'rotate(0deg)', fontSize: 20 }}
                  >
                    +
                  </span>
                </button>
                <div className={`faq-answer${open === i ? ' open' : ''}`}>
                  <p className="px-6 pb-5 text-[#1a1a2e]/55 text-sm leading-relaxed">{item.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-28 md:py-40 bg-[#1a1a2e] px-6 overflow-hidden relative">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
            backgroundSize: '56px 56px',
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-[0.06] pointer-events-none"
          style={{ background: 'radial-gradient(circle, #FF9F1C 0%, transparent 70%)' }}
        />

        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <div className="reveal">
            <p className="text-[#FF9F1C] text-xs tracking-[0.35em] uppercase mb-8">
              ここまで読んでくれたあなたへ
            </p>
            <h2
              className="text-white font-bold leading-tight mb-6"
              style={{ fontSize: 'clamp(2rem, 6vw, 4rem)' }}
            >
              次は、なにが
              <br />
              <span className="text-[#FF9F1C]">できるようになりたい？</span>
            </h2>
          </div>

          <div className="reveal reveal-delay-1">
            <p className="text-white/40 text-base md:text-lg leading-relaxed mb-10 max-w-lg mx-auto">
              あなたの「やりたい」を、教えてください。
              <br />
              そこから、全部始まります。
            </p>
          </div>

          <div className="reveal reveal-delay-2 flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button
              type="button"
              onClick={() => alert('体験レッスンのご予約は近日受付開始予定です。')}
              className="inline-block bg-[#FF9F1C] text-white font-bold px-10 py-5 rounded-full text-lg hover:bg-[#e8900f] transition-colors duration-200 shadow-xl shadow-[#FF9F1C]/25 cursor-pointer"
            >
              無料体験に申し込む
            </button>
            <button
              type="button"
              onClick={() => alert('お問い合わせ先は近日公開予定です。')}
              className="inline-block border border-white/20 text-white/65 font-medium px-10 py-5 rounded-full text-base hover:border-white/45 hover:text-white transition-colors duration-200 cursor-pointer"
            >
              まずは質問してみる
            </button>
          </div>

          <div className="reveal reveal-delay-3">
            <p className="text-white/20 text-xs tracking-wide mb-12">
              ※ 料金・日程・場所は近日公開予定です
            </p>
            <div className="border-t border-white/10 pt-10">
              <p className="text-white/20 text-sm">
                [教室名] / [所在地 — 後日更新] / [連絡先 — 後日更新]
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
