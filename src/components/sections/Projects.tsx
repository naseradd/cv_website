'use client'

import { motion, useReducedMotion } from 'framer-motion'
import Image from 'next/image'
import { ExternalLink } from 'lucide-react'
import { useLang } from '@/lib/i18n'
import { projects } from '@/data/projects'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { Badge } from '@/components/ui/Badge'
import { Reveal } from '@/components/ui/Reveal'
import { cardReveal } from '@/lib/motion'
import { cn } from '@/lib/utils'

const typeVariant: Record<string, 'accent' | 'indigo' | 'outline'> = {
  research: 'accent',
  professional: 'indigo',
  personal: 'outline',
}

const typeLabel = {
  research: { en: 'Research', fr: 'Recherche' },
  professional: { en: 'Professional', fr: 'Professionnel' },
  personal: { en: 'Personal', fr: 'Personnel' },
}

export function Projects() {
  const { t, lang } = useLang()
  const reduced = useReducedMotion() ?? false

  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="border-t border-[#1e1e1e] pt-12">

          <Reveal delay={0}>
            <SectionLabel>{t('projects.label')}</SectionLabel>
          </Reveal>
          <Reveal delay={0.07}>
            <h2 className="font-display text-[clamp(32px,4.5vw,58px)] font-black tracking-[-0.03em] text-[#f5f5f0] mb-12">
              {t('projects.title')}
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects.map((project, i) => (
              <motion.div
                key={project.id}
                className={cn(
                  'group rounded-2xl overflow-hidden bg-[#141414] border border-[#1e1e1e] hover:border-[#2a2a2a] transition-[border-color,transform] duration-300',
                  i === 0 && 'md:col-span-2 lg:col-span-2'
                )}
                {...cardReveal(i * 0.1, reduced)}
                whileHover={reduced ? undefined : { y: -4, transition: { duration: 0.2, ease: 'easeOut' } }}
              >
                {/* Image */}
                <div className={cn('relative overflow-hidden bg-[#1a1a1a]', i === 0 ? 'h-52 md:h-64' : 'h-40')}>
                  <Image
                    src={project.image}
                    alt={project.title[lang]}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105 opacity-70 group-hover:opacity-85"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent" />

                  {/* Type badge */}
                  <div className="absolute top-4 left-4">
                    <Badge variant={typeVariant[project.type]}>
                      {typeLabel[project.type][lang]}
                    </Badge>
                  </div>

                  {/* External link */}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open project ${project.title[lang]} in new tab`}
                      className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[rgba(0,0,0,0.6)] border border-[rgba(255,255,255,0.1)] flex items-center justify-center text-[#888] hover:text-[#f5f5f0] hover:border-[rgba(255,255,255,0.2)] transition-all"
                    >
                      <ExternalLink size={13} />
                    </a>
                  )}
                </div>

                {/* Content */}
                <div className="p-5 md:p-6">
                  <h3 className="font-display text-base font-bold text-[#f5f5f0] tracking-tight mb-2 leading-snug">
                    {project.title[lang]}
                  </h3>
                  <p className="text-xs text-[#888] leading-relaxed mb-4">
                    {project.description[lang]}
                  </p>

                  {/* Stack */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.stack.map((s) => (
                      <span
                        key={s}
                        className="text-[10px] font-semibold px-2.5 py-1 rounded-md bg-[#1a1a1a] border border-[#222] text-[#888]"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
