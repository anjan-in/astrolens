import type { InputHTMLAttributes } from "react";
import "./Checkbox.css";

export interface CheckboxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  label: string;
  error?: string;
}

function Checkbox({
  id,
  label,
  error,
  ...props
}: CheckboxProps) {
  return (
    <div className="checkbox-field">
      <label className="checkbox">
        <input
          id={id}
          type="checkbox"
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${id}-error` : undefined}
          {...props}
        />

        <span className="checkbox__control" aria-hidden="true" />

        <span className="checkbox__label">
          {label}
        </span>
      </label>

      {error && (
        <p
          id={`${id}-error`}
          className="checkbox__error"
          role="alert"
        >
          {error}
        </p>
      )}
    </div>
  );
}

export default Checkbox;