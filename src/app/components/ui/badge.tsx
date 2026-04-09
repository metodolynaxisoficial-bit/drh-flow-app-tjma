import { HTMLAttributes, forwardRef } from 'react';

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'success' | 'warning' | 'error' | 'info' | 'default' | 'pending' | 'secondary' | 'outline' | 'destructive';
}

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ variant = 'default', className = '', children, ...props }, ref) => {
    const variants = {
      success: 'bg-green-50 text-green-700 border-green-200',
      warning: 'bg-amber-50 text-amber-700 border-amber-200',
      error: 'bg-red-50 text-red-700 border-red-200',
      info: 'bg-blue-50 text-blue-700 border-blue-200',
      default: 'bg-[var(--tjma-gray-100)] text-[var(--tjma-gray-700)] border-[var(--tjma-gray-200)]',
      pending: 'bg-yellow-50 text-yellow-700 border-yellow-200',
      secondary: 'bg-[var(--tjma-gray-100)] text-[var(--tjma-gray-700)] border-[var(--tjma-gray-200)]',
      outline: 'bg-transparent border-[var(--tjma-gray-300)] text-[var(--tjma-gray-700)]',
      destructive: 'bg-red-50 text-red-700 border-red-200',
    };
    
    return (
      <span
        ref={ref}
        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${variants[variant]} ${className}`}
        {...props}
      >
        {children}
      </span>
    );
  }
);

Badge.displayName = 'Badge';
