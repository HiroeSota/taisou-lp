const features = [
  {
    num: '01',
    title: '一人ひとりの「やりたい」からスタート',
    body: '先生が決めたカリキュラムはありません。あなたの目標から逆算してレッスンを設計します。',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="13" stroke="#FF9F1C" strokeWidth="2"/>
        <path d="M10 16l5 5 7-8" stroke="#FF9F1C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    large: true,
  },
  {
    num: '02',
    title: '段階を踏むから、難しいことも挑戦しやすい',
    body: 'バク転も逆立ちも、いきなりやらせません。小さな成功を積み重ねて、自然に上達します。',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="4" y="22" width="7" height="8" rx="2" fill="#FF9F1C"/>
        <rect x="13" y="15" width="7" height="15" rx="2" fill="#FF9F1C" opacity="0.65"/>
        <rect x="22" y="7" width="7" height="23" rx="2" fill="#FF9F1C" opacity="0.35"/>
      </svg>
    ),
  },
  {
    num: '03',
    title: '失敗を否定しない環境',
    body: '「なんでできないの」は言いません。失敗は次のヒント。うまくいかない理由を一緒に考えます。',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M16 4C9.4 4 4 9.4 4 16s5.4 12 12 12 12-5.4 12-12S22.6 4 16 4z" stroke="#FF9F1C" strokeWidth="2"/>
        <path d="M11 16c0-2.8 2.2-5 5-5s5 2.2 5 5" stroke="#FF9F1C" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="16" cy="21" r="2" fill="#FF9F1C"/>
      </svg>
    ),
  },
  {
    num: '04',
    title: '身体の使い方そのものを学ぶ',
    body: '技を教えるだけでなく、「なぜそう動くのか」を丁寧に伝えます。自分で考えて動かせる身体を育てます。',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="7" r="4" stroke="#FF9F1C" strokeWidth="2"/>
        <path d="M16 11v9M12 16l4 5 4-5M12 28h8" stroke="#FF9F1C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    num: '05',
    title: '必要な分だけ、そっと支える補助',
    body: '先生が代わりにやるのではなく、「あなたが動けるための最小限の支え」を意識した補助を行います。',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M7 26c0-5 4-9 9-9s9 4 9 9" stroke="#FF9F1C" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="16" cy="12" r="5" stroke="#FF9F1C" strokeWidth="2"/>
        <path d="M2 21l5 3M30 21l-5 3" stroke="#FF9F1C" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
]

export default function Features() {
  return (
    <section className="py-24 md:py-36 bg-[#fffcf5] px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto">

        {/* header */}
        <div className="reveal mb-16">
          <p className="text-[#FF9F1C] text-xs tracking-[0.3em] uppercase mb-4">この教室の特徴</p>
          <div className="md:flex md:items-end md:justify-between gap-8">
            <h2
              className="font-bold text-[#1a1a2e] leading-tight"
              style={{ fontSize: 'clamp(1.6rem, 4vw, 2.8rem)' }}
            >
              普通の体操教室と、
              <br />
              ここが違います。
            </h2>
            <p className="text-[#1a1a2e]/45 text-sm leading-relaxed mt-4 md:mt-0 md:max-w-xs md:text-right">
              5つの違いが、「できた！」を
              <br className="hidden md:block" />
              生み出す環境をつくります。
            </p>
          </div>
        </div>

        {/* feature 01 — large hero card */}
        <div
          className="reveal card-hover mb-6 bg-white rounded-3xl border border-[#ede8de] overflow-hidden"
          style={{ position: 'relative' }}
        >
          <div className="p-8 md:p-10 md:flex md:items-center gap-10">
            <div className="shrink-0">
              {/* large decorative number */}
              <div className="relative mb-6 md:mb-0">
                <span
                  className="font-black text-[#FF9F1C]/8 select-none"
                  style={{ fontSize: 'clamp(5rem, 14vw, 10rem)', lineHeight: 1, display: 'block' }}
                  aria-hidden="true"
                >
                  01
                </span>
                <div className="absolute top-1/2 left-0 -translate-y-1/2 md:left-4">
                  {features[0].icon}
                </div>
              </div>
            </div>
            <div className="md:flex-1">
              <p className="text-[#FF9F1C] text-xs font-bold tracking-wider mb-3">{features[0].num}</p>
              <h3
                className="font-bold text-[#1a1a2e] mb-4 leading-snug"
                style={{ fontSize: 'clamp(1.1rem, 3vw, 1.5rem)' }}
              >
                {features[0].title}
              </h3>
              <p className="text-[#1a1a2e]/55 text-base leading-relaxed">{features[0].body}</p>
            </div>
          </div>
          {/* accent line */}
          <div className="h-1 bg-gradient-to-r from-[#FF9F1C] via-[#FFC928] to-transparent" />
        </div>

        {/* features 02–03 — 2 column */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {features.slice(1, 3).map((f, i) => (
            <div
              key={i}
              className={`reveal reveal-delay-${i + 1} card-hover bg-white rounded-2xl p-8 border border-[#ede8de] relative overflow-hidden`}
            >
              <span
                className="absolute -top-2 -right-2 font-black text-[#FF9F1C]/6 select-none"
                style={{ fontSize: '7rem', lineHeight: 1 }}
                aria-hidden="true"
              >
                {f.num}
              </span>
              <div className="relative z-10">
                <div className="mb-5">{f.icon}</div>
                <p className="text-[#FF9F1C] text-xs font-bold tracking-wider mb-2">{f.num}</p>
                <p className="font-bold text-[#1a1a2e] text-base mb-3 leading-snug">{f.title}</p>
                <p className="text-[#1a1a2e]/50 text-sm leading-relaxed">{f.body}</p>
              </div>
            </div>
          ))}
        </div>

        {/* features 04–05 — asymmetric */}
        <div className="grid md:grid-cols-5 gap-6">
          <div className="reveal reveal-delay-3 card-hover md:col-span-3 bg-white rounded-2xl p-8 border border-[#ede8de] flex gap-5 relative overflow-hidden">
            <span
              className="absolute -top-2 -right-2 font-black text-[#FF9F1C]/6 select-none"
              style={{ fontSize: '7rem', lineHeight: 1 }}
              aria-hidden="true"
            >
              04
            </span>
            <div className="shrink-0 mt-0.5 relative z-10">{features[3].icon}</div>
            <div className="relative z-10">
              <p className="text-[#FF9F1C] text-xs font-bold tracking-wider mb-2">{features[3].num}</p>
              <p className="font-bold text-[#1a1a2e] text-base mb-3 leading-snug">{features[3].title}</p>
              <p className="text-[#1a1a2e]/50 text-sm leading-relaxed">{features[3].body}</p>
            </div>
          </div>

          <div
            className="reveal reveal-delay-4 md:col-span-2 rounded-2xl p-8 border border-[#FF9F1C]/20 flex flex-col justify-between relative overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #fff9ed 0%, #fffcf5 100%)' }}
          >
            <div className="relative z-10">
              <div className="mb-5">{features[4].icon}</div>
              <p className="text-[#FF9F1C] text-xs font-bold tracking-wider mb-2">{features[4].num}</p>
              <p className="font-bold text-[#1a1a2e] text-base mb-3 leading-snug">{features[4].title}</p>
              <p className="text-[#1a1a2e]/50 text-sm leading-relaxed">{features[4].body}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
