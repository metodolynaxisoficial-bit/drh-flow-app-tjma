import { HTMLAttributes, forwardRef } from 'react';
import { AlertCircle, CheckCircle, Info, AlertTriangle } from 'lucide-react';

interface AlertProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'success' | 'warning' | 'error' | 'info';
  title?: string;
}

export const Alert = forwardRef<HTMLDivElement, AlertProps>(
  ({ variant = 'info', title, className = '', children, ...props }, ref) => {
    const variants = {
      success: 'bg-green-50 border-green-200 text-green-800',
      warning: 'bg-amber-50 border-amber-200 text-amber-800',
      error: 'bg-red-50 border-red-200 text-red-800',
      info: 'bg-blue-50 border-blue-200 text-blue-800',
    };
    
    const icons = {
      success: <CheckCircle className="h-5 w-5 text-green-600" />,
      warning: <AlertTriangle className="h-5 w-5 text-amber-600" />,
      error: <AlertCircle className="h-5 w-5 text-red-600" />,
      info: <Info className="h-5 w-5 text-blue-600" />,
    };
    
    return (
      <div
        ref={ref}
        className={`flex gap-3 p-4 border rounded-lg ${variants[variant]} ${className}`}
        {...props}
      >
        <div className="flex-shrink-0">{icons[variant]}</div>
        <div className="flex-1">
          {title && <h4 className="mb-1 font-semibold">{title}</h4>}
          <div className="text-sm">{children}</div>
        </div>
      </div>
    );
  }
);

Alert.displayName = 'Alert';
