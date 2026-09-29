import { useEffect, useRef } from 'react'

export default function CursorFollower() {
  const dotRef = useRef(null)
  const posRef = useRef({ x: -100, y: -100 })
  const rafRef = useRef(null)

  useEffect(() => {
    const dot = dotRef.current
    if (!dot) return

    const onMove = (e) => {
      posRef.current = { x: e.clientX, y: e.clientY }
      dot.style.left = `${e.clientX}px`
      dot.style.top = `${e.clientY}px`
    }

    const onEnter = (e) => {
      const el = e.target
      if (el.matches('a[href], button, [role="button"]')) {
        dot.classList.add('hover-cta')
        dot.classList.remove('hover-link')
      } else if (el.matches('input, textarea, select, label')) {
        dot.classList.add('hover-link')
        dot.classList.remove('hover-cta')
      }
    }

    const onLeave = (e) => {
      const el = e.target
      if (el.matches('a[href], button, [role="button"], input, textarea, select, label')) {
        dot.classList.remove('hover-cta', 'hover-link')
      }
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    document.addEventListener('mouseover', onEnter, { passive: true })
    document.addEventListener('mouseout', onLeave, { passive: true })

    return () => {
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover', onEnter)
      document.removeEventListener('mouseout', onLeave)
      cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
}
