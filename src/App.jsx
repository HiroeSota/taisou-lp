import { useEffect } from 'react'
import Nav from './components/Nav'
import MobileStickyCTA from './components/MobileStickyCTA'
import CursorFollower from './components/CursorFollower'
import Marquee from './components/Marquee'
import Hero from './sections/Hero'
import Empathy from './sections/Empathy'
import ChallengeScene from './sections/ChallengeScene'
import LessonSteps from './sections/LessonSteps'
import MidCTA from './sections/MidCTA'
import Features from './sections/Features'
import GrowthCycle from './sections/GrowthCycle'
import ForWho from './sections/ForWho'
import Instructor from './sections/Instructor'
import LessonFlow from './sections/LessonFlow'
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

const philosophyWords = [
  '挑戦する',
  '失敗する',
  '考える',
  '工夫する',
  'できた！',
  'また挑戦する',
  '自分で動く',
  '楽しむ',
]

export default function App() {
  useReveal()

  return (
    <div className="min-h-screen bg-white">
      <CursorFollower />
      <Nav />
      <MobileStickyCTA />

      <main className="pb-16 md:pb-0">
        <Hero />
        <Empathy />
        <ChallengeScene />

        {/* thin marquee strip between ChallengeScene and LessonSteps */}
        <div
          style={{
            background: '#FF9F1C',
            padding: '12px 0',
            overflow: 'hidden',
          }}
          aria-hidden="true"
        >
          <Marquee
            items={philosophyWords}
            direction="left"
            speed={20}
            gap={48}
            itemClass="text-white font-bold text-sm tracking-widest uppercase"
            separator="◆"
          />
        </div>

        <LessonSteps />
        <MidCTA />
        <Features />

        {/* quiet marquee strip — philosophy */}
        <div
          style={{
            background: '#1a1a2e',
            padding: '14px 0',
            overflow: 'hidden',
          }}
          aria-hidden="true"
        >
          <Marquee
            items={[
              'やってみたい → できた！',
              '自分のペースで',
              '失敗はヒント',
              '伴走者がいる',
              '次は何に挑戦する？',
            ]}
            direction="right"
            speed={25}
            gap={56}
            itemClass="text-white/40 font-medium text-sm tracking-wider"
            separator="—"
          />
        </div>

        <GrowthCycle />
        <ForWho />
        <Instructor />
        <LessonFlow />
        <FAQ />
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
