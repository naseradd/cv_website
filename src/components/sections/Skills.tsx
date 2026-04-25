'use client'

import { useReducedMotion } from 'framer-motion'
import { motion } from 'framer-motion'
import { useLang } from '@/lib/i18n'
import { skillCategories, hotSkills } from '@/data/skills'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { Reveal } from '@/components/ui/Reveal'
import { cardReveal } from '@/lib/motion'
import { cn } from '@/lib/utils'

export function Skills() {
  const { t, lang } = useLang()
  const reduced = useReducedMotion() ?? false

  return (
    <section id="skills" className="py-16 md:py-32 bg-[#0a0a0a]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="border-t border-[#1e1e1e] pt-8 md:pt-12">

          <Reveal delay={0}>
            <SectionLabel>{t('skills.label')}</SectionLabel>
          </Reveal>
          <Reveal delay={0.07}>
            <h2 className="font-display text-[clamp(32px,4.5vw,58px)] font-black tracking-[-0.03em] text-[#f5f5f0] mb-12">
              {t('skills.title')}
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

            {/* Languages — featured tall card */}
            <motion.div
              className="md:row-span-2 p-6 md:p-8 rounded-2xl bg-[#141414] border border-[#1e1e1e] hover:border-[#2a2a2a] transition-colors"
              {...cardReveal(0, reduced)}
            >
              <p className="text-[10px] font-bold tracking-[0.18em] uppercase text-[#888] mb-5">
                {skillCategories[0].label[lang]}
              </p>
              <div className="flex flex-wrap gap-2">
                {skillCategories[0].items.map((s) => (
                  <span
                    key={s}
                    className={cn(
                      'text-xs font-semibold px-3 py-1.5 rounded-lg border transition-all duration-200 cursor-default',
                      hotSkills.includes(s)
                        ? 'bg-[rgba(124,58,237,0.1)] border-[rgba(124,58,237,0.22)] text-[#a78bfa] hover:bg-[rgba(124,58,237,0.18)]'
                        : 'bg-[#1a1a1a] border-[#222] text-[#888] hover:border-[#2a2a2a] hover:text-[#888]'
                    )}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* DevOps — wide card */}
            <motion.div
              className="md:col-span-2 p-6 rounded-2xl bg-[#141414] border border-[#1e1e1e] hover:border-[#2a2a2a] transition-colors"
              {...cardReveal(0.09, reduced)}
            >
              <p className="text-[10px] font-bold tracking-[0.18em] uppercase text-[#888] mb-4">
                {skillCategories[2].label[lang]}
              </p>
              <div className="flex flex-wrap gap-2">
                {skillCategories[2].items.map((s) => (
                  <span
                    key={s}
                    className={cn(
                      'text-xs font-semibold px-3 py-1.5 rounded-lg border transition-all duration-200',
                      hotSkills.includes(s)
                        ? 'bg-[rgba(79,70,229,0.1)] border-[rgba(79,70,229,0.22)] text-[#818cf8] hover:bg-[rgba(79,70,229,0.18)]'
                        : 'bg-[#1a1a1a] border-[#222] text-[#888] hover:border-[#2a2a2a] hover:text-[#888]'
                    )}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Remaining 5 smaller cards */}
            {[skillCategories[1], skillCategories[3], skillCategories[4], skillCategories[5], skillCategories[6]].map((cat, i) => (
              <motion.div
                key={cat.id}
                className="p-6 rounded-2xl bg-[#141414] border border-[#1e1e1e] hover:border-[#2a2a2a] transition-colors"
                {...cardReveal(0.14 + i * 0.08, reduced)}
              >
                <p className="text-[10px] font-bold tracking-[0.18em] uppercase text-[#888] mb-4">
                  {cat.label[lang]}
                </p>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((s) => (
                    <span
                      key={s}
                      className={cn(
                        'text-xs font-semibold px-3 py-1.5 rounded-lg border transition-all duration-200',
                        hotSkills.includes(s)
                          ? 'bg-[rgba(124,58,237,0.08)] border-[rgba(124,58,237,0.18)] text-[#a78bfa]'
                          : 'bg-[#1a1a1a] border-[#222] text-[#888] hover:text-[#888]'
                      )}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
