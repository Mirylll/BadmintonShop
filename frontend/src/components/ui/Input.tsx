import { InputHTMLAttributes, forwardRef } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className = '', ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block mb-1.5 text-[14px] font-body-medium text-text-primary">
            {label}
          </label>
        )}
        <input
          ref={ref}
          className={`w-full bg-light-gray rounded-[8px] px-4 py-3 text-[16px] font-body text-text-primary placeholder-text-secondary outline-none transition-colors duration-200 focus:border focus:border-border-active focus:ring-2 focus:ring-[rgba(39,93,197,1)] ${error ? 'border border-nike-red' : ''} ${className}`}
          {...props}
        />
        {error && (
          <p className="mt-1 text-[13px] font-body-medium text-nike-red">{error}</p>
        )}
      </div>
    )
  },
)

Input.displayName = 'Input'
export default Input
