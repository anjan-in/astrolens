import { 
    type HTMLAttributes, 
    forwardRef, 
    type ReactNode 
} from 'react';
import './Card.css';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  title?: string;
  description?: string;
  footer?: ReactNode;
  interactive?: boolean;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ title, description, footer, interactive = false, children, className = '', ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={['card', interactive ? 'card--interactive' : '', className].filter(Boolean).join(' ')}
        {...props}
      >
        {(title || description) && (
          <div className="card-header">
            {title && <h3 className="card-title">{title}</h3>}
            {description && <p className="card-description">{description}</p>}
          </div>
        )}
        <div className="card-body">{children}</div>
        {footer && <div className="card-footer">{footer}</div>}
      </div>
    );
  }
);

Card.displayName = 'Card';
export default Card;