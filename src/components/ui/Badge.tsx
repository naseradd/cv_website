'use client'
import { cn } from '@/lib/utils'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'accent' | 'indigo' | 'outline' | 'dim'
  className?: string
}

export function Badge({ children, variant = 'accent', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold tracking-wide border',
        variant === 'accent' && 'bg-[rgba(124,58,237,0.12)] border-[rgba(124,58,237,0.25)] text-[#a78bfa]',
        variant === 'indigo' && 'bg-[rgba(79,70,229,0.12)] border-[rgba(79,70,229,0.25)] text-[#818cf8]',
        variant === 'outline' && 'bg-transparent border-[#2a2a2a] text-[#888]',
        variant === 'dim' && 'bg-[#1a1a1a] border-[#2a2a2a] text-[#888]',
        className
      )}
    >
      {children}
    </span>
  )
}

export function LiveBadge({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold border',
        'bg-[rgba(124,58,237,0.08)] border-[rgba(124,58,237,0.2)] text-[#a78bfa]',
        className
      )}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-[#a78bfa] animate-pulseDot" />
      {children}
    </span>
  )
}
