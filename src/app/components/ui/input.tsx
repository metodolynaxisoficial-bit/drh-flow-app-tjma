import { InputHTMLAttributes, forwardRef } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className = '', error, ...props }, ref) => {
    return (
      <div className="w-full">
        <input
          ref={ref}
          className={`w-full px-4 py-2.5 bg-white border ${
            error ? 'border-[var(--tjma-error)]' : 'border-[var(--tjma-gray-300)]'
          } rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--tjma-gold)] focus:border-transparent transition-all ${className}`}
          {...props}
        />
        {error && <p className="mt-1 text-sm text-[var(--tjma-error)]">{error}</p>}
      </div>
    );
  }
);

Input.displayName = 'Input';
