import { useEffect } from 'react'
import Nav from './components/Nav'
import MobileStickyCTA from './components/MobileStickyCTA'
import CursorFollower from './components/CursorFollower'
import Marquee from './components/Marquee'
import Hero from './sections/Hero'
import Empathy from './sections/Empathy'
import ChallengeScene from './sections/ChallengeScene'
import BrandPhilosophy from './sections/BrandPhilosophy'
import LessonSteps from './sections/LessonSteps'
import ForWho from './sections/ForWho'
import Safety from './sections/Safety'
import Instructor from './sections/Instructor'
import MidCTA from './sections/MidCTA'
import LessonFlow from './sections/LessonFlow'
import BasicInfo from './sections/BasicInfo'
import FAQ from './sections/FAQ'
import FinalCTA from './sections/FinalCTA'

function useReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('visible')
        }),
      { threshold: 0.08 }
    )
    document
      .querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale')
      .forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

export default function App() {
  useReveal()

  return (
    <div className="min-h-screen bg-white">
      <CursorFollower />
      <Nav />
      <MobileStickyCTA />

      <main className="pb-16 md:pb-0">

        {/* 01 ファーストビュー */}
        <Hero />

        {/* 02 共感 */}
        <Empathy />

        {/* 04 5ステップのスクロール体験 */}
        <ChallengeScene />

        {/* Orange marquee — energy transition after "できた！" */}
        <div
          style={{ background: '#FF9F1C', padding: '12px 0', overflow: 'hidden' }}
          aria-hidden="true"
        >
          <Marquee
            items={['やってみたい', 'うまくいかない', 'どうすれば？', 'もう一回', 'できた！', '次の挑戦へ']}
            direction="left"
            speed={18}
            gap={48}
            itemClass="text-white font-bold text-sm tracking-widest uppercase"
            separator="◆"
          />
        </div>

        {/* 05 教室独自の価値観 "技ができる。その先へ。" */}
        <BrandPhilosophy />

        {/* 06 どう教えるのか */}
        <LessonSteps />

        {/* 07 どんなことに挑戦できるのか */}
        <ForWho />

        {/* 08 安全への考え方 */}
        <Safety />

        {/* 09 指導者紹介 */}
        <Instructor />

        {/* Mid CTA */}
        <MidCTA />

        {/* 10 体験レッスンの流れ */}
        <LessonFlow />

        {/* 11 基本情報 */}
        <BasicInfo />

        {/* 12 FAQ */}
        <FAQ />

        {/* 13 最終CTA */}
        <FinalCTA />
      </main>

      <footer className="bg-[#1a1a2e] text-white/40 text-sm py-10 text-center px-4 border-t border-white/5">
        <p className="text-white/20 text-xs tracking-widest uppercase mb-3">[教室名]</p>
        <p>© [教室名] All rights reserved.</p>
        <p className="mt-2 text-xs opacity-50">プロトタイプ版 — 料金・住所・講師情報は後日更新予定</p>
      </footer>
    </div>
  )
}
