const steps = [
  {
    step: '01',
    title: '予約',
    body: 'フォームまたは[連絡先]から体験レッスンをご予約ください。日程は相談可能です。',
    icon: '📅',
  },
  {
    step: '02',
    title: '来店・着替え',
    body: '動きやすい服装でお越しください。更衣室完備。特別な道具・シューズは不要です。',
    icon: '👟',
  },
  {
    step: '03',
    title: 'ヒアリング「今日は何したい？」',
    body: '最初に先生と5〜10分お話します。やってみたいことや不安なことを気軽に教えてください。',
    icon: '💬',
  },
  {
    step: '04',
    title: 'レッスン（約[XX]分）',
    body: 'あなたのペースで進めます。できないことがあっても大丈夫。一緒に考えながら進みます。',
    icon: '🤸',
  },
  {
    step: '05',
    title: '振り返り・次回の目標設定',
    body: '「今日どうだった？」「次はどんなことに挑戦したい？」を話し合って終わります。',
    icon: '🎯',
  },
]

export default function LessonFlow() {
  return (
    <section className="py-24 md:py-32 bg-white px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="reveal text-center mb-16">
          <p className="text-[#FF9F1C] text-xs tracking-[0.3em] uppercase mb-4">初回体験の流れ</p>
          <h2
            className="font-bold text-[#1a1a2e] leading-tight mb-4"
            style={{ fontSize: 'clamp(1.6rem, 4vw, 2.8rem)' }}
          >
            初めてでも安心。
            <br />
            一緒にやってみましょう。
          </h2>
          <p className="text-[#1a1a2e]/50 text-base max-w-md mx-auto">
            初回は体験レッスンです。入会の勧誘はしませんので、気軽にお越しください。
          </p>
        </div>

        {/* steps — horizontal on desktop, vertical on mobile */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-0 items-stretch relative">
          {steps.map((s, i) => (
            <div key={i} className={`reveal reveal-delay-${i + 1} flex md:flex-col items-start md:items-center gap-4 md:gap-0 flex-1 relative`}>
              {/* connector line (desktop) */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-1/2 right-0 h-0.5 bg-gradient-to-r from-[#FF9F1C]/40 to-[#FF9F1C]/20 z-0" style={{ left: '60%' }} />
              )}
              {/* connector line (mobile) */}
              {i < steps.length - 1 && (
                <div className="md:hidden absolute left-7 top-14 bottom-0 w-0.5 bg-gradient-to-b from-[#FF9F1C]/40 to-transparent z-0" />
              )}

              {/* circle */}
              <div
                className="relative z-10 w-14 h-14 rounded-full flex items-center justify-center text-2xl shrink-0 bg-[#fffcf5] border-2 border-[#FF9F1C]/30 md:mb-4"
              >
                {s.icon}
              </div>

              {/* text */}
              <div className="md:text-center md:px-2">
                <p className="text-[#FF9F1C] text-xs font-bold tracking-widest mb-1">STEP {s.step}</p>
                <p className="font-bold text-[#1a1a2e] text-base mb-2 leading-snug">{s.title}</p>
                <p className="text-[#1a1a2e]/50 text-sm leading-relaxed">{s.body}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="reveal reveal-delay-5 mt-16 text-center">
          <a
            href="#trial"
            className="inline-block bg-[#FF9F1C] text-white font-bold px-10 py-4 rounded-full text-base hover:bg-[#e8900f] transition-colors duration-200 shadow-lg shadow-[#FF9F1C]/25"
          >
            体験レッスンを予約する →
          </a>
        </div>
      </div>
    </section>
  )
}
