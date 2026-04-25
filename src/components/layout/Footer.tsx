'use client'
import { useLang } from '@/lib/i18n'
import { personal } from '@/data/personal'

export function Footer() {
  const { lang } = useLang()

  return (
    <footer className="border-t border-[#1e1e1e] py-10 px-6 md:px-10">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="text-sm font-bold text-[#f5f5f0]">Dany Naser Addin</span>
          <span className="w-1 h-1 rounded-full bg-[#7c3aed]" />
        </div>
        <p className="text-xs text-[#888]">
          © {new Date().getFullYear()} · {personal.location}
        </p>
        <div className="flex items-center gap-4">
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-[#888] hover:text-[#888] transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={personal.arxiv}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-[#888] hover:text-[#888] transition-colors"
          >
            arXiv
          </a>
          <a
            href={`mailto:${personal.email}`}
            className="text-xs text-[#888] hover:text-[#888] transition-colors"
          >
            {personal.email}
          </a>
        </div>
      </div>
    </footer>
  )
}
