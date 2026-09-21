'use client'
import { ArrowUpRight, ArrowUp } from 'lucide-react'
import { useLang } from '@/lib/i18n'
import { personal } from '@/data/personal'
import { site, resumes } from '@/data/site'

export function Footer() {
  const { lang } = useLang()
  const copy = site[lang]
  return (
    <footer className="site-footer">
      <div className="shell footer-inner">
        <div>
          <a className="wordmark" href="#hero">
            Dany Naser Addin
            <span className="brand-dot" />
          </a>
          <p>
            © {new Date().getFullYear()} · {copy.footerNote}
          </p>
        </div>
        <div className="footer-links">
          <a href={personal.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
            <ArrowUpRight size={14} />
          </a>
          {resumes.map((resume) => (
            <div className="footer-resume" key={resume.lang}>
              <a href={resume.href} target="_blank" rel="noopener noreferrer">
                CV {resume.lang.toUpperCase()}
                <ArrowUpRight size={14} />
              </a>
              <a
                href={resume.href}
                download
                aria-label={`${copy.cvDownload} — ${resume.label}`}
              >
                {copy.cvDownload}
              </a>
            </div>
          ))}
          <a
            className="back-top icon-button"
            href="#hero"
            aria-label={copy.backTop}
          >
            <ArrowUp size={19} />
          </a>
        </div>
      </div>
    </footer>
  )
}
