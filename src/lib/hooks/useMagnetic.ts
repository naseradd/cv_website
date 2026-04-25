'use client'

import { useEffect, useRef } from 'react'

/**
 * Subtle magnetic pull on hover — element nudges toward the cursor.
 * Skipped when the user prefers reduced motion or a coarse pointer is detected.
 *
 * @param strength px of max pull at element edge (default 8)
 * @param radius   px outside the element where pull begins (default 32)
 */
export function useMagnetic<T extends HTMLElement>(strength = 8, radius = 32) {
  const ref = useRef<T | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Honor user motion + pointer preferences
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const coarse = window.matchMedia('(pointer: coarse)')
    if (mq.matches || coarse.matches) return

    let raf = 0

    const move = (e: MouseEvent) => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect()
        const cx = rect.left + rect.width / 2
        const cy = rect.top + rect.height / 2
        const dx = e.clientX - cx
        const dy = e.clientY - cy
        const dist = Math.hypot(dx, dy)
        const reach = Math.max(rect.width, rect.height) / 2 + radius

        if (dist > reach) {
          el.style.transform = ''
          return
        }
        const factor = (1 - dist / reach) * strength
        el.style.transform = `translate3d(${(dx / reach) * factor}px, ${(dy / reach) * factor}px, 0)`
      })
    }

    const reset = () => {
      cancelAnimationFrame(raf)
      el.style.transform = ''
    }

    window.addEventListener('mousemove', move, { passive: true })
    el.addEventListener('mouseleave', reset)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('mousemove', move)
      el.removeEventListener('mouseleave', reset)
      el.style.transform = ''
    }
  }, [strength, radius])

  return ref
}
