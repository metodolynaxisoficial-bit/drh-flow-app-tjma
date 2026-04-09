import { ButtonHTMLAttributes, forwardRef } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'link' | 'default' | 'destructive';
  size?: 'sm' | 'md' | 'lg' | 'default' | 'icon';
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', className = '', children, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center gap-2 rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed font-medium';
    
    const variants = {
      primary: 'bg-[var(--tjma-navy)] text-white hover:bg-[var(--tjma-navy-light)] active:bg-[var(--tjma-navy-dark)] shadow-sm',
      secondary: 'bg-[var(--tjma-gold)] text-[var(--tjma-navy-dark)] hover:bg-[var(--tjma-gold-light)] active:bg-[var(--tjma-gold-dark)] shadow-sm',
      outline: 'border-2 border-[var(--tjma-navy)] text-[var(--tjma-navy)] hover:bg-[var(--tjma-navy)] hover:text-white',
      ghost: 'text-[var(--tjma-navy)] hover:bg-[var(--tjma-gray-100)] active:bg-[var(--tjma-gray-200)]',
      link: 'text-[var(--tjma-navy)] underline-offset-4 hover:underline',
      default: 'bg-[var(--tjma-navy)] text-white hover:bg-[var(--tjma-navy-light)] active:bg-[var(--tjma-navy-dark)] shadow-sm',
      destructive: 'bg-red-600 text-white hover:bg-red-700 active:bg-red-800 shadow-sm',
    };
    
    const sizes = {
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-5 py-2.5 text-base',
      lg: 'px-6 py-3 text-lg',
      default: 'px-5 py-2.5 text-base',
      icon: 'p-2.5',
    };
    
    return (
      <button
        ref={ref}
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
