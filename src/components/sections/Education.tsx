'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useLang } from '@/lib/i18n'
import { personal } from '@/data/personal'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { Reveal } from '@/components/ui/Reveal'

const ease = [0.16, 1, 0.3, 1] as const

export function Education() {
  const { t } = useLang()

  return (
    <section id="education" className="py-16 md:py-32 bg-[#0a0a0a]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="border-t border-[#1e1e1e] pt-8 md:pt-12">

          <Reveal delay={0}>
            <SectionLabel>{t('edu.label')}</SectionLabel>
          </Reveal>
          <Reveal delay={0.07}>
            <h2 className="font-display text-[clamp(32px,4.5vw,58px)] font-black tracking-[-0.03em] text-[#f5f5f0] mb-12">
              {t('edu.title')}
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-5">
            {personal.education.map((edu, i) => (
              <motion.div
                key={i}
                className="group p-7 md:p-9 rounded-2xl bg-[#141414] border border-[#1e1e1e] hover:border-[#2a2a2a] transition-all duration-300 hover:bg-[#161616]"
                initial={{ opacity: 0, y: 56, scale: 0.96, filter: 'blur(8px)' }}
                whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.75, delay: i * 0.14, ease }}
              >
                {/* Logo — larger and more visible */}
                <div className="flex items-start justify-between mb-8">
                  <div className="w-20 h-20 rounded-2xl overflow-hidden bg-white border border-[#2a2a2a] flex items-center justify-center flex-shrink-0 p-2">
                    <Image
                      src={edu.logo}
                      alt={edu.school}
                      width={64}
                      height={64}
                      className="object-contain w-14 h-14"
                      unoptimized
                      onError={(e) => {
                        // Fallback to school initial if image fails
                        const target = e.target as HTMLImageElement
                        target.style.display = 'none'
                        const parent = target.parentElement
                        if (parent) {
                          parent.classList.remove('bg-white')
                          parent.classList.add('bg-[#1e1e1e]')
                          parent.innerHTML = `<span class="font-display text-2xl font-black text-[#a78bfa]">${edu.school.charAt(0)}</span>`
                        }
                      }}
                    />
                  </div>
                  <span className="text-xs font-semibold text-[#333] tracking-wide pt-1">{edu.period}</span>
                </div>

                {/* Degree */}
                <h3 className="font-display text-lg font-bold text-[#f5f5f0] tracking-tight mb-1.5 leading-snug">
                  {t(edu.degreeKey)}
                </h3>

                {/* School */}
                <p className="text-sm font-semibold text-[#7c3aed] mb-3">
                  {edu.school} · {edu.country}
                </p>

                {/* Spec */}
                <p className="text-xs text-[#888] mb-1">{t(edu.specKey)}</p>
                {edu.labKey && (
                  <p className="text-xs text-[#888]">{t(edu.labKey)}</p>
                )}

                {/* GPA */}
                <div className="mt-6 pt-5 border-t border-[#1e1e1e] flex items-center justify-between">
                  <span className="text-xs text-[#888] uppercase tracking-widest font-semibold">{t('edu.gpa')}</span>
                  <span className="font-display text-xl font-black text-[#a78bfa]">{edu.gpa}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
