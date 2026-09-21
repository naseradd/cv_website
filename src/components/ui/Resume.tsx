'use client'
import { useId, useRef } from 'react'
import { ArrowUpRight, Download, FileText, X } from 'lucide-react'
import { useLang } from '@/lib/i18n'
import { resumes, site } from '@/data/site'

export function ResumeLinks() {
  const { lang } = useLang()
  const copy = site[lang]
  return (
    <div className="resume-links">
      {resumes.map((resume) => (
        <div className="resume-row" key={resume.lang}>
          <div>
            <span className="resume-language">{resume.label}</span>
            <span className="resume-meta">{copy.cvVersion}</span>
          </div>
          <a
            href={resume.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${copy.cvOpen} — ${resume.label}`}
          >
            <span>{lang === 'fr' ? 'Consulter' : 'View'}</span>
            <ArrowUpRight size={17} />
          </a>
          <a
            href={resume.href}
            download
            aria-label={`${copy.cvDownload} — ${resume.label}`}
          >
            <Download size={17} />
            <span className="sr-only">{copy.cvDownload}</span>
          </a>
        </div>
      ))}
    </div>
  )
}

export function ResumeButton() {
  const { lang } = useLang()
  const copy = site[lang]
  const dialog = useRef<HTMLDialogElement>(null)
  const trigger = useRef<HTMLButtonElement>(null)
  const titleId = useId()
  const descriptionId = useId()
  return (
    <>
      <button
        ref={trigger}
        className="cv-trigger"
        aria-haspopup="dialog"
        onClick={() => dialog.current?.showModal()}
      >
        <FileText size={15} />
        <span>CV</span>
      </button>
      {/* Native modal makes the background inert; wrap Tab before browser chrome takes focus. */}
      <dialog
        ref={dialog}
        className="resume-dialog"
        aria-labelledby={titleId}
        aria-describedby={descriptionId}
        onClose={() => trigger.current?.focus()}
        onKeyDown={(event) => {
          if (event.key !== 'Tab') return
          const elements =
            event.currentTarget.querySelectorAll<HTMLElement>('button, a[href]')
          const first = elements[0],
            last = elements[elements.length - 1]
          if (event.shiftKey && document.activeElement === first) {
            event.preventDefault()
            last.focus()
          }
          if (!event.shiftKey && document.activeElement === last) {
            event.preventDefault()
            first.focus()
          }
        }}
        onClick={(event) => {
          if (event.target !== event.currentTarget) return
          const bounds = event.currentTarget.getBoundingClientRect()
          if (
            event.clientX < bounds.left ||
            event.clientX > bounds.right ||
            event.clientY < bounds.top ||
            event.clientY > bounds.bottom
          )
            dialog.current?.close()
        }}
      >
        <button
          className="dialog-close icon-button"
          onClick={() => dialog.current?.close()}
          aria-label={copy.close}
        >
          <X size={22} />
        </button>
        <span className="eyebrow">DANY NASER ADDIN</span>
        <h2 id={titleId}>{copy.cvDialog}</h2>
        <p id={descriptionId}>{copy.cvDescription}</p>
        <ResumeLinks />
      </dialog>
    </>
  )
}
