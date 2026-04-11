'use client'
import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'ghost' | 'link'
  href?: string
  onClick?: () => void
  className?: string
  target?: string
  rel?: string
}

export function Button({
  children,
  variant = 'primary',
  href,
  onClick,
  className,
  target,
  rel,
}: ButtonProps) {
  const base = 'inline-flex items-center gap-2 font-semibold transition-all duration-200 cursor-pointer select-none'

  const variants = {
    primary: cn(
      base,
      'px-6 py-3.5 bg-[#7c3aed] text-white rounded-lg text-sm',
      'hover:bg-[#6d28d9] hover:-translate-y-0.5',
      'shadow-[0_0_0_rgba(124,58,237,0)] hover:shadow-[0_8px_30px_rgba(124,58,237,0.35)]'
    ),
    secondary: cn(
      base,
      'px-6 py-3.5 bg-transparent text-[#f5f5f0] rounded-lg text-sm border border-[#2a2a2a]',
      'hover:bg-[#1a1a1a] hover:border-[#3a3a3a] hover:-translate-y-0.5'
    ),
    ghost: cn(
      base,
      'px-4 py-2 bg-transparent text-[#888] rounded-md text-sm',
      'hover:bg-[#1a1a1a] hover:text-[#f5f5f0]'
    ),
    link: cn(
      base,
      'p-0 bg-transparent text-[#888] text-sm',
      'hover:text-[#f5f5f0] underline-offset-4 hover:underline'
    ),
  }

  if (href) {
    return (
      <a href={href} target={target} rel={rel} className={cn(variants[variant], className)}>
        {children}
      </a>
    )
  }

  return (
    <button onClick={onClick} className={cn(variants[variant], className)}>
      {children}
    </button>
  )
}
