import { type LabelHTMLAttributes, forwardRef } from 'react';
import './Label.css';

export interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  required?: boolean;
  disabled?: boolean;
}

const Label = forwardRef<HTMLLabelElement, LabelProps>(
  ({ children, required = false, disabled = false, className = '', ...props }, ref) => {
    const classNames = [
      'label',
      required ? 'label--required' : '',
      disabled ? 'label--disabled' : '',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <label ref={ref} className={classNames} {...props}>
        {children}
      </label>
    );
  }
);

Label.displayName = 'Label';
export default Label;