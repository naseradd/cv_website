'use client'

import { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { useLang } from '@/lib/i18n'
import { experiences } from '@/data/experience'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { Badge } from '@/components/ui/Badge'
import { Reveal } from '@/components/ui/Reveal'
import { cn } from '@/lib/utils'

const ease = [0.16, 1, 0.3, 1] as const

function CompanyLogo({ src, name }: { src: string; name: string }) {
  const [error, setError] = useState(false)
  const onError = useCallback(() => setError(true), [])

  if (error) {
    return (
      <div className="w-9 h-9 rounded-lg bg-[#1e1e1e] border border-[#2a2a2a] flex items-center justify-center flex-shrink-0">
        <span className="text-xs font-black text-[#a78bfa]">{name.charAt(0)}</span>
      </div>
    )
  }

  return (
    <div className="w-9 h-9 rounded-lg overflow-hidden bg-white border border-[#1e1e1e] flex items-center justify-center flex-shrink-0 p-1">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={name}
        className="w-full h-full object-contain"
        onError={onError}
      />
    </div>
  )
}

const rowAnim = (delay = 0) => ({
  initial: { opacity: 0, y: 40, filter: 'blur(6px)' },
  whileInView: { opacity: 1, y: 0, filter: 'blur(0px)' },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.7, delay, ease },
})

export function Experience() {
  const { t, lang } = useLang()
  const [expanded, setExpanded] = useState<string | null>('ubisoft')

  return (
    <section id="experience" className="py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="border-t border-[#1e1e1e] pt-12">

          {/* Header */}
          <Reveal delay={0} className="flex items-baseline justify-between mb-12">
            <div>
              <SectionLabel>{t('exp.label')}</SectionLabel>
              <h2 className="font-display text-[clamp(32px,4.5vw,58px)] font-black tracking-[-0.03em] text-[#f5f5f0]">
                {t('exp.title')}
              </h2>
            </div>
            <span className="hidden md:block text-xs text-[#444]">{t('exp.positions')}</span>
          </Reveal>

          {/* Experience list */}
          <div className="divide-y divide-[#1e1e1e]">
            {experiences.map((exp, idx) => {
              const isOpen = expanded === exp.id
              return (
                <motion.div
                  key={exp.id}
                  className="group"
                  {...rowAnim(idx * 0.1)}
                >
                  {/* Row header — always visible */}
                  <button
                    onClick={() => setExpanded(isOpen ? null : exp.id)}
                    className="w-full text-left grid grid-cols-[72px_1fr_auto] md:grid-cols-[100px_1fr_auto] gap-4 md:gap-8 py-7 md:py-9 hover:bg-[#0f0f0f] transition-colors -mx-2 px-2 rounded-lg"
                  >
                    {/* Year */}
                    <div className="pt-1">
                      <p className="text-xs font-semibold text-[#333] whitespace-pre-line leading-snug">
                        {exp.periodShort.replace(' → ', '\n→ ')}
                      </p>
                    </div>

                    {/* Main content */}
                    <div>
                      <div className="flex flex-wrap items-center gap-2.5 mb-1.5">
                        <span className="font-display text-lg md:text-xl font-bold text-[#f5f5f0] tracking-tight">
                          {exp.company}
                        </span>
                        {exp.current && (
                          <Badge variant="accent">
                            <span className="w-1 h-1 rounded-full bg-[#a78bfa] animate-pulseDot" />
                            {t('exp.present')}
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm text-[#555] font-medium">
                        {exp.role[lang]}
                      </p>

                      {/* Stack chips */}
                      <div className="flex flex-wrap gap-1.5 mt-3">
                        {exp.stack.slice(0, 6).map((s) => (
                          <span
                            key={s}
                            className="text-[10px] font-semibold px-2.5 py-1 rounded-md bg-[#141414] border border-[#1e1e1e] text-[#555] tracking-wide"
                          >
                            {s}
                          </span>
                        ))}
                        {exp.stack.length > 6 && (
                          <span className="text-[10px] font-semibold px-2.5 py-1 rounded-md bg-[#141414] border border-[#1e1e1e] text-[#444]">
                            +{exp.stack.length - 6}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Arrow */}
                    <div className="flex items-start pt-1.5">
                      <div
                        className={cn(
                          'w-7 h-7 rounded-full border flex items-center justify-center transition-all duration-200',
                          isOpen
                            ? 'border-[#7c3aed] bg-[rgba(124,58,237,0.12)] text-[#a78bfa]'
                            : 'border-[#2a2a2a] text-[#444] group-hover:border-[#3a3a3a] group-hover:text-[#888]'
                        )}
                      >
                        {isOpen ? <ChevronUp size={13} /> : <ChevronDown size={13} />}
                      </div>
                    </div>
                  </button>

                  {/* Expanded details */}
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.38, ease: [0.4, 0, 0.2, 1] }}
                        style={{ overflow: 'hidden' }}
                      >
                        <div className="pb-8 pl-4 md:pl-[132px] pr-2">
                          {/* Description */}
                          <p className="text-sm text-[#555] mb-5 leading-relaxed italic">
                            {exp.description[lang]}
                          </p>

                          {/* Highlights */}
                          <ul className="space-y-3">
                            {exp.highlights[lang].map((h, i) => (
                              <motion.li
                                key={i}
                                className="flex gap-3 text-sm text-[#666] leading-relaxed"
                                initial={{ opacity: 0, x: -8 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: i * 0.05 }}
                              >
                                <span className="mt-[5px] w-1 h-1 rounded-full bg-[#7c3aed] flex-shrink-0" />
                                {h}
                              </motion.li>
                            ))}
                          </ul>

                          {/* Full stack */}
                          <div className="flex flex-wrap gap-2 mt-6 pt-5 border-t border-[#1e1e1e]">
                            {exp.stack.map((s) => (
                              <span
                                key={s}
                                className="text-[11px] font-semibold px-3 py-1.5 rounded-md bg-[#141414] border border-[#1e1e1e] text-[#555]"
                              >
                                {s}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
