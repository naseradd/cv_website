'use client'

import { useEffect, useRef, useState } from 'react'
import {
  ArrowUpRight,
  Blocks,
  Braces,
  Check,
  ChevronDown,
  Code2,
  Cpu,
  FileCheck2,
  Layers3,
  Mail,
  Network,
  ScanLine,
  Sparkles,
} from 'lucide-react'
import { useLang } from '@/lib/i18n'
import { site } from '@/data/site'
import { personal } from '@/data/personal'
import { experiences } from '@/data/experience'
import { ResumeLinks } from '@/components/ui/Resume'

function SectionHeading({
  label,
  title,
  intro,
}: {
  label: string
  title: string
  intro?: string
}) {
  const heading = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const element = heading.current
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (!element || preference.matches) return
    let animation: Animation | undefined
    // Progressive enhancement: content is visible in the HTML, including without JS.
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        if (!preference.matches) {
          animation = element.animate(
            [
              { opacity: 0, transform: 'translateY(20px)' },
              { opacity: 1, transform: 'none' },
            ],
            { duration: 650, easing: 'cubic-bezier(.2,.7,.2,1)' },
          )
        }
        observer.disconnect()
      },
      { threshold: 0.15 },
    )
    const stop = () => {
      if (preference.matches) animation?.cancel()
    }
    observer.observe(element)
    preference.addEventListener('change', stop)
    return () => {
      observer.disconnect()
      animation?.cancel()
      preference.removeEventListener('change', stop)
    }
  }, [])
  return (
    <div ref={heading} className="section-heading">
      <div>
        <p className="eyebrow">{label}</p>
        <h2>{title}</h2>
      </div>
      {intro && <p className="section-intro">{intro}</p>}
    </div>
  )
}

export function Expertise() {
  const { lang } = useLang()
  const copy = site[lang]
  const icons = [Code2, Network, Sparkles]
  return (
    <section id="expertise" className="section shell">
      <SectionHeading label={copy.expertiseLabel} title={copy.expertiseTitle} />
      <div className="services-grid">
        {copy.services.map((service, i) => {
          const Icon = icons[i]
          return (
            <article className="service" key={service.title}>
              <div className="service-top">
                <Icon size={27} strokeWidth={1.3} />
                <span>0{i + 1}</span>
              </div>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
              <ul>
                {service.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            </article>
          )
        })}
      </div>
      <div className="stack-line">
        <span>TECHNOLOGIES</span>
        <p>TypeScript / Go / C# / Vue.js / Node.js / Docker / Kubernetes</p>
      </div>
    </section>
  )
}

export function AgenticAI() {
  const { lang } = useLang()
  const copy = site[lang]
  const [step, setStep] = useState(0)
  const icons = [ScanLine, Blocks, Braces, FileCheck2, Layers3]
  return (
    <section id="agentic-ai" className="ai-section section">
      <div className="shell">
        <SectionHeading
          label={copy.aiLabel}
          title={copy.aiTitle}
          intro={copy.aiIntro}
        />
        <div className="ai-layout">
          <div className="ai-pillars">
            {copy.aiPillars.map((pillar, i) => (
              <article key={pillar.title}>
                <span className="pillar-index">0{i + 1}</span>
                <div>
                  <h3>{pillar.title}</h3>
                  <p>{pillar.text}</p>
                </div>
              </article>
            ))}
            <div className="ai-tools">
              <span>ChatGPT</span>
              <span>Codex</span>
              <span>Claude Code</span>
              <span>MCP</span>
            </div>
          </div>
          <div className="workflow">
            <div className="workflow-header">
              <span className="eyebrow">{copy.workflowLabel}</span>
              <Cpu size={20} />
            </div>
            <div className="workflow-orbit" aria-hidden="true">
              <span className="orbit-ring ring-one" />
              <span className="orbit-ring ring-two" />
              <span className="orbit-ring ring-three" />
              <div className="orbit-core">
                <Sparkles size={31} strokeWidth={1.3} />
              </div>
              <span className="orbit-node node-one">
                <Braces size={17} />
              </span>
              <span className="orbit-node node-two">
                <Check size={17} />
              </span>
              <span className="orbit-node node-three">
                <Layers3 size={17} />
              </span>
            </div>
            <div
              className="workflow-steps"
              role="group"
              aria-label={copy.workflowLabel}
            >
              {copy.workflowSteps.map((name, i) => {
                const Icon = icons[i]
                return (
                  <button
                    key={name}
                    onClick={() => setStep(i)}
                    aria-pressed={step === i}
                    aria-controls="workflow-description"
                  >
                    <Icon size={19} />
                    <span>{name}</span>
                  </button>
                )
              })}
            </div>
            <div
              className="workflow-description"
              id="workflow-description"
              aria-live="polite"
            >
              <span>0{step + 1}</span>
              <p>{copy.workflowDescriptions[step]}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ProjectVisual({ kind }: { kind: string }) {
  const { lang } = useLang()
  if (kind === 'xr')
    return (
      <div className="project-art art-xr" aria-hidden="true">
        <div className="pipeline-grid" />
        <div className="xr-reticle">
          <span />
          <span />
          <span />
          <span />
          <ScanLine size={56} strokeWidth={0.8} />
        </div>
        <span className="art-caption">
          SPATIAL INTERFACES / APPLIED RESEARCH
        </span>
      </div>
    )
  if (kind === 'pipeline')
    return (
      <div className="project-art art-pipeline" aria-hidden="true">
        <div className="pipeline-grid" />
        <div className="pipeline-flow">
          <div className="pipeline-node">
            <Braces />
            <span>{lang === 'fr' ? 'CONFIGURER' : 'CONFIGURE'}</span>
          </div>
          <div className="pipeline-wire" />
          <div className="pipeline-node primary-node">
            <Network />
            <span>{lang === 'fr' ? 'VALIDER' : 'VALIDATE'}</span>
          </div>
          <div className="pipeline-wire" />
          <div className="pipeline-node">
            <Layers3 />
            <span>{lang === 'fr' ? 'DÉPLOYER' : 'DEPLOY'}</span>
          </div>
        </div>
        <span className="art-caption">MONETIZATION TOOLING</span>
      </div>
    )
  if (kind === 'finance')
    return (
      <div className="project-art art-finance" aria-hidden="true">
        <div className="finance-window">
          <div className="mini-window-bar">
            <span />
            <span />
            <span />
            <b>{lang === 'fr' ? 'Gestion financière' : 'Personal finance'}</b>
          </div>
          <div className="finance-drawing">
            <div className="finance-sidebar">
              <i />
              <i />
              <i />
              <i />
            </div>
            <div className="finance-content">
              <div className="finance-heading">
                <span />
                <span />
              </div>
              <svg viewBox="0 0 300 100" fill="none">
                <path className="chart-grid" d="M0 20H300M0 50H300M0 80H300" />
                <path
                  className="chart-area"
                  d="M0 84L30 70L60 76L90 45L120 57L150 35L180 46L210 18L240 25L270 10L300 16V100H0Z"
                />
                <path
                  className="chart-line"
                  d="M0 84L30 70L60 76L90 45L120 57L150 35L180 46L210 18L240 25L270 10L300 16"
                />
              </svg>
              <div className="finance-bottom">
                <i />
                <i />
                <i />
              </div>
            </div>
          </div>
        </div>
        <span className="art-caption">
          {lang === 'fr'
            ? 'ILLUSTRATION / AUCUNE DONNÉE RÉELLE'
            : 'ILLUSTRATION / NO REAL DATA'}
        </span>
      </div>
    )
  return (
    <div className="project-art art-photos" aria-hidden="true">
      <div className="photo-card photo-one">
        <div className="photo-mountain" />
      </div>
      <div className="photo-card photo-two">
        <div className="photo-sun" />
      </div>
      <div className="photo-card photo-three">
        <div className="photo-waves" />
      </div>
      <span className="photo-play">▶</span>
      <span className="art-caption">
        {lang === 'fr'
          ? 'JEU MULTIJOUEUR / MÉDIAS'
          : 'MULTIPLAYER GAME / MEDIA'}
      </span>
    </div>
  )
}

export function SelectedWork() {
  const { lang } = useLang()
  const copy = site[lang]
  return (
    <section id="projects" className="section shell">
      <SectionHeading label={copy.projectsLabel} title={copy.projectsTitle} />
      <div className="projects-grid">
        {copy.projects.map((project, index) => (
          <article key={project.id} className="project-card">
            <ProjectVisual kind={project.visual} />
            <div className="project-body">
              <div className="project-category">
                <span>{project.category}</span>
                <span>0{index + 1}</span>
              </div>
              <h3>{project.name}</h3>
              <p className="project-subtitle">{project.subtitle}</p>
              <dl>
                <div>
                  <dt>{copy.challenge}</dt>
                  <dd>{project.challenge}</dd>
                </div>
                <div>
                  <dt>{copy.contribution}</dt>
                  <dd>{project.contribution}</dd>
                </div>
                <div>
                  <dt>{copy.result}</dt>
                  <dd>{project.result}</dd>
                </div>
              </dl>
              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export function Career() {
  const { lang } = useLang()
  const copy = site[lang]
  return (
    <section id="experience" className="section shell">
      <SectionHeading
        label={copy.experienceLabel}
        title={copy.experienceTitle}
      />
      <div className="career-list">
        {experiences.map((experience, index) => (
          <details
            className="career-item"
            key={experience.id}
            open={index === 0}
          >
            <summary>
              <span className="career-period">
                {experience.current
                  ? `2022 — ${copy.current}`
                  : experience.periodShort.replace(' → ', ' — ')}
              </span>
              <span className="career-heading">
                <span>{experience.company}</span>
                <strong>{experience.role[lang]}</strong>
              </span>
              <ChevronDown className="career-chevron" size={22} />
            </summary>
            <div className="career-content">
              <p>{experience.description[lang]}</p>
              <ul>
                {experience.highlights[lang].map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
              <div className="project-tags">
                {experience.stack.slice(0, 8).map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          </details>
        ))}
      </div>
    </section>
  )
}

export function AboutAndEducation() {
  const { lang } = useLang()
  const copy = site[lang]
  return (
    <section id="about" className="section about-section">
      <div className="shell about-layout">
        <div>
          <p className="eyebrow">{copy.aboutLabel}</p>
          <h2>{copy.aboutTitle}</h2>
          <p>{copy.aboutText}</p>
          <a
            className="text-link"
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
            <ArrowUpRight size={17} />
          </a>
        </div>
        <div className="education-list">
          <span className="eyebrow">
            {lang === 'fr' ? 'FORMATION' : 'EDUCATION'}
          </span>
          {copy.education.map((education) => (
            <article key={education.school}>
              <span className="education-period">{education.period}</span>
              <h3>{education.school}</h3>
              <p>{education.degree}</p>
              <span className="education-detail">{education.detail}</span>
            </article>
          ))}
          <div className="about-signature">
            Dany<span>.</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export function GetInTouch() {
  const { lang } = useLang()
  const copy = site[lang]
  return (
    <section id="contact" className="section shell contact-section">
      <div className="contact-main">
        <div>
          <p className="eyebrow">{copy.contactLabel}</p>
          <h2>
            {copy.contactTitle}
            <span className="contact-asterisk" aria-hidden="true">
              ✳
            </span>
          </h2>
          <p className="contact-copy">{copy.contactText}</p>
          <a className="button-primary" href={`mailto:${personal.email}`}>
            <Mail size={18} />
            {copy.emailCta}
            <ArrowUpRight size={18} />
          </a>
          <a className="contact-email" href={`mailto:${personal.email}`}>
            {personal.email}
          </a>
        </div>
        <aside className="contact-aside">
          <span className="availability">
            <span />
            {copy.availability}
          </span>
          <p>{copy.location}</p>
          <a
            className="text-link"
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
            <ArrowUpRight size={17} />
          </a>
        </aside>
      </div>
      <div className="cv-section">
        <div>
          <h3>{copy.cvTitle}</h3>
          <p>{copy.cvText}</p>
        </div>
        <ResumeLinks />
      </div>
    </section>
  )
}
