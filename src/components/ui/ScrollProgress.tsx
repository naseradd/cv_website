'use client'

import { motion, useScroll, useSpring } from 'framer-motion'

/**
 * 1px purple progress bar fixed under the navbar (top: 56px).
 * Driven by `useScroll` + spring smoothing — feels less twitchy than raw progress.
 */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 24,
    restDelta: 0.001,
  })

  return (
    <motion.div
      aria-hidden="true"
      className="fixed top-14 left-0 right-0 z-40 h-px origin-left bg-gradient-to-r from-[#7c3aed] via-[#a78bfa] to-[#818cf8] pointer-events-none"
      style={{ scaleX }}
    />
  )
}
