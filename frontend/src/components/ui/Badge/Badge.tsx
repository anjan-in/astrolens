import { type HTMLAttributes, forwardRef } from 'react';
import './Badge.css';

export type BadgeVariant = 'neutral' | 'primary' | 'success' | 'warning' | 'error';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
}

const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ variant = 'neutral', children, className = '', ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={['badge', `badge--${variant}`, className].filter(Boolean).join(' ')}
        {...props}
      >
        {children}
      </span>
    );
  }
);

Badge.displayName = 'Badge';
export default Badge;