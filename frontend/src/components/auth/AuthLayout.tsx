import { ReactNode } from 'react'
import { Link } from 'react-router-dom'

interface AuthLayoutProps {
  title: string
  subtitle?: string
  children: ReactNode
  bottomText: string
  bottomLink: string
  bottomLabel: string
}

export default function AuthLayout({
  title,
  subtitle,
  children,
  bottomText,
  bottomLink,
  bottomLabel,
}: AuthLayoutProps) {
  return (
    <div className="mx-auto max-w-[420px] px-4 py-16">
      <div className="flex flex-col items-center text-center">
        <img src="/logo.svg" alt="Miruri Shop" className="h-12 w-12 mb-4" />
        <h1 className="text-heading1 font-heading text-nike-black">{title}</h1>
        {subtitle && (
          <p className="mt-2 text-[16px] font-body text-text-secondary">{subtitle}</p>
        )}
      </div>

      <div className="mt-8 space-y-5">{children}</div>

      <div className="mt-8 pt-6 border-t border-border-secondary text-center">
        <p className="text-[14px] font-body text-text-secondary">
          {bottomText}{' '}
          <Link to={bottomLink} className="font-body-medium text-text-primary underline hover:text-text-secondary transition-colors">
            {bottomLabel}
          </Link>
        </p>
      </div>
    </div>
  )
}
