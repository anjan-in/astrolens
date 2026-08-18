import {
  forwardRef,
  type InputHTMLAttributes,
} from "react";
import "./Input.css";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  hint?: string;
  required?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      id,
      label,
      error,
      hint,
      required = false,
      className = "",
      ...props
    },
    ref,
  ) => {
    const describedBy = [
      hint ? `${id}-hint` : "",
      error ? `${id}-error` : "",
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <div className="input-field">
        {label && (
          <label className="input-field__label" htmlFor={id}>
            {label}

            {required && (
              <span
                className="input-field__required"
                aria-hidden="true"
              >
                *
              </span>
            )}
          </label>
        )}

        <input
          ref={ref}
          id={id}
          className={`input ${error ? "input--error" : ""} ${className}`}
          aria-invalid={Boolean(error)}
          aria-describedby={describedBy || undefined}
          {...props}
        />

        {hint && !error && (
          <p id={`${id}-hint`} className="input-field__hint">
            {hint}
          </p>
        )}

        {error && (
          <p
            id={`${id}-error`}
            className="input-field__error"
            role="alert"
          >
            {error}
          </p>
        )}
      </div>
    );
  },
);

Input.displayName = "Input";

export default Input;