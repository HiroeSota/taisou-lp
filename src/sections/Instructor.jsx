export default function Instructor() {
  return (
    <section className="py-24 md:py-32 bg-[#fffcf5] px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="reveal text-center mb-16">
          <p className="text-[#FF9F1C] text-xs tracking-[0.3em] uppercase mb-4">指導者紹介</p>
          <h2
            className="font-bold text-[#1a1a2e] leading-tight"
            style={{ fontSize: 'clamp(1.6rem, 4vw, 2.8rem)' }}
          >
            「答えを教える先生」ではなく、
            <br />
            「一番の伴走者」でいたい。
          </h2>
        </div>

        <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-start">
          {/* photo placeholder */}
          <div className="reveal shrink-0 mx-auto md:mx-0">
            <div
              className="w-52 h-64 md:w-60 md:h-72 rounded-2xl bg-[#ede8de] border border-[#ddd8ce] flex items-center justify-center overflow-hidden"
              style={{ transform: 'rotate(-1.5deg)' }}
            >
              <div className="text-center text-[#1a1a2e]/25 p-4">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" className="mx-auto mb-3">
                  <circle cx="20" cy="14" r="7"/>
                  <path d="M6 38c0-7.7 6.3-14 14-14s14 6.3 14 14"/>
                </svg>
                <p className="text-xs">講師写真<br/>後日掲載</p>
              </div>
            </div>
            {/* name placeholder */}
            <div className="mt-4 text-center">
              <p className="font-bold text-[#1a1a2e] text-lg">[講師名]</p>
              <p className="text-[#1a1a2e]/45 text-sm mt-1">[資格・経歴 — 後日記入]</p>
            </div>
          </div>

          {/* message */}
          <div className="reveal reveal-delay-1 flex-1">
            <div className="space-y-5 text-[#1a1a2e]/70 text-base leading-relaxed">
              <p>
                私がこの教室を始めた理由は、シンプルです。
                「できなかったことができた瞬間」の喜びを、
                もっとたくさんの人に感じてほしいと思ったからです。
              </p>
              <p>
                体操や運動は、やり方次第で誰でも上達できます。
                でも、やり方が分からないまま続けると、
                挫折や苦手意識だけが残ってしまう。
              </p>
              <p>
                この教室では、技を教えることより
                「自分で考えて、自分で動かせる身体を作ること」を大切にしています。
              </p>
              <p className="font-bold text-[#1a1a2e] text-lg leading-snug">
                「先生がいるからできる」ではなく、
                <br />
                <span className="text-[#FF9F1C]">「自分でできる」という自信を一緒に育てたいんです。</span>
              </p>
            </div>

            {/* quote decoration */}
            <div className="mt-8 border-l-4 border-[#FF9F1C] pl-5">
              <p className="text-[#1a1a2e]/40 text-sm italic leading-relaxed">
                指導方針：必要なときに、必要な方向へ、必要な分だけ支える。
                <br />
                成長するにつれて、少しずつ支えを減らしていく。
              </p>
            </div>

            {/* experience placeholder */}
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-4">
              {[
                { label: '指導経験', value: '[XX]年' },
                { label: '得意分野', value: '[アクロバット等]' },
                { label: '保有資格', value: '[資格名 — 後日記入]' },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-xl p-4 border border-[#ede8de] text-center">
                  <p className="text-[#FF9F1C] text-xs tracking-wide mb-1">{item.label}</p>
                  <p className="text-[#1a1a2e] font-bold text-sm">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
