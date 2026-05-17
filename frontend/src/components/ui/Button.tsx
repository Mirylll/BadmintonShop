import { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outlined'
  size?: 'sm' | 'md' | 'lg'
}

export default function Button({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...props
}: ButtonProps) {
  const base = 'rounded-pill font-body-medium text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[rgba(39,93,197,1)]'

  const variants = {
    primary: 'bg-nike-black text-white hover:bg-text-secondary',
    secondary: 'bg-white text-nike-black hover:bg-hover-gray',
    outlined: 'bg-transparent text-nike-black border border-border-secondary hover:border-border-primary hover:bg-hover-gray',
  }

  const sizes = {
    sm: 'px-4 py-1.5 text-xs',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
  }

  return (
    <button
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
