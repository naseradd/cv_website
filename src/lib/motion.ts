/**
 * Motion tokens — single source of truth for easings, durations, and
 * reusable framer-motion variants used across sections.
 *
 * Every helper accepts an optional `reduced` flag (from `useReducedMotion`)
 * to honor `prefers-reduced-motion`: when true, reveals collapse to a
 * minimal opacity fade with no transform or blur.
 */

export const ease = {
  /** Expressive entrance — used by Hero text. */
  out: [0.22, 1, 0.36, 1] as const,
  /** Apple/Linear-style spring — used by section reveals. */
  spring: [0.16, 1, 0.3, 1] as const,
  /** Material 3 emphasized — for accordion / expansion. */
  emphasized: [0.32, 0.72, 0, 1] as const,
} as const

export const dur = {
  micro: 0.2,
  short: 0.4,
  base: 0.6,
  med: 0.7,
  long: 0.8,
  marquee: 28,
} as const

/**
 * Hero-style fade up — small y-offset, used for inline text / badges / CTAs.
 */
export const fadeUp = (delay = 0, reduced = false) => ({
  initial: { opacity: 0, y: reduced ? 0 : 28 },
  animate: { opacity: 1, y: 0 },
  transition: reduced
    ? { duration: dur.micro, delay: 0, ease: ease.out }
    : { duration: dur.base, delay, ease: ease.out },
})

/**
 * Card reveal — bigger y-offset, scale, soft blur. Triggers in viewport.
 * Used by Skills cards, Projects cards, About stat tiles.
 */
export const cardReveal = (delay = 0, reduced = false) => ({
  initial: reduced
    ? { opacity: 0 }
    : { opacity: 0, y: 56, scale: 0.96, filter: 'blur(6px)' },
  whileInView: reduced
    ? { opacity: 1 }
    : { opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' },
  viewport: { once: true, margin: '-100px' },
  transition: reduced
    ? { duration: dur.micro, delay: 0, ease: ease.spring }
    : { duration: 0.75, delay, ease: ease.spring },
})

/**
 * Row reveal — y-offset + blur, no scale. Used by Experience list rows.
 */
export const rowReveal = (delay = 0, reduced = false) => ({
  initial: reduced
    ? { opacity: 0 }
    : { opacity: 0, y: 40, filter: 'blur(6px)' },
  whileInView: reduced
    ? { opacity: 1 }
    : { opacity: 1, y: 0, filter: 'blur(0px)' },
  viewport: { once: true, margin: '-80px' },
  transition: reduced
    ? { duration: dur.micro, delay: 0, ease: ease.spring }
    : { duration: dur.med, delay, ease: ease.spring },
})

