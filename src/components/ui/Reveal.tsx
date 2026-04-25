'use client'

import { motion, useReducedMotion, Variants } from 'framer-motion'
import { ReactNode } from 'react'

// ─── Apple / Linear-style spring easing ─────────────────────────────────────
const ease = [0.16, 1, 0.3, 1] as const

// ─── Cinematic variants ──────────────────────────────────────────────────────
// "up" = headline reveal with blur — the signature marketing-site entrance
const up: Variants = {
  hidden: { opacity: 0, y: 52, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
}
const down: Variants = {
  hidden: { opacity: 0, y: -40, filter: 'blur(6px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
}
const left: Variants = {
  hidden: { opacity: 0, x: 40, filter: 'blur(4px)' },
  visible: { opacity: 1, x: 0, filter: 'blur(0px)' },
}
const right: Variants = {
  hidden: { opacity: 0, x: -40, filter: 'blur(4px)' },
  visible: { opacity: 1, x: 0, filter: 'blur(0px)' },
}
const scaleV: Variants = {
  hidden: { opacity: 0, scale: 0.92, filter: 'blur(6px)' },
  visible: { opacity: 1, scale: 1, filter: 'blur(0px)' },
}
const fade: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

// Reduced-motion fallback: opacity only, no transform/blur
const fadeOnly: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

const variantMap = { up, down, left, right, scale: scaleV, fade } as const
type Direction = keyof typeof variantMap

// ─── Reveal ─────────────────────────────────────────────────────────────────
interface RevealProps {
  children: ReactNode
  className?: string
  delay?: number
  direction?: Direction
  duration?: number
  /** true = animate on mount (above fold); false = whileInView (default) */
  mount?: boolean
}

export function Reveal({
  children,
  className,
  delay = 0,
  direction = 'up',
  duration = 0.8,
  mount = false,
}: RevealProps) {
  const reduced = useReducedMotion() ?? false
  const v = reduced ? fadeOnly : variantMap[direction]
  const scrollProps = mount
    ? ({ animate: 'visible' } as const)
    : ({ whileInView: 'visible', viewport: { once: true, margin: '-100px' } } as const)

  return (
    <motion.div
      className={className}
      variants={v}
      initial="hidden"
      {...scrollProps}
      transition={{ duration: reduced ? 0.2 : duration, delay: reduced ? 0 : delay, ease }}
    >
      {children}
    </motion.div>
  )
}

// ─── StaggerReveal ───────────────────────────────────────────────────────────
interface StaggerRevealProps {
  children: ReactNode
  className?: string
  stagger?: number
  delay?: number
  mount?: boolean
}

export function StaggerReveal({
  children,
  className,
  stagger = 0.1,
  delay = 0,
  mount = false,
}: StaggerRevealProps) {
  const scrollProps = mount
    ? ({ animate: 'visible' } as const)
    : ({ whileInView: 'visible', viewport: { once: true, margin: '-100px' } } as const)

  return (
    <motion.div
      className={className}
      initial="hidden"
      {...scrollProps}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger, delayChildren: delay } },
      }}
    >
      {children}
    </motion.div>
  )
}

// ─── StaggerItem ─────────────────────────────────────────────────────────────
interface StaggerItemProps {
  children: ReactNode
  className?: string
  direction?: Direction
  duration?: number
}

export function StaggerItem({
  children,
  className,
  direction = 'up',
  duration = 0.7,
}: StaggerItemProps) {
  const reduced = useReducedMotion() ?? false
  return (
    <motion.div
      className={className}
      variants={reduced ? fadeOnly : variantMap[direction]}
      transition={{ duration: reduced ? 0.2 : duration, ease }}
    >
      {children}
    </motion.div>
  )
}
