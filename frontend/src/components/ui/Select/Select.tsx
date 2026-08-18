import type { SelectHTMLAttributes } from "react";
import "./Select.css";

export interface SelectOption {
  label: string;
  value: string;
  disabled?: boolean;
}

export interface SelectProps
  extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  hint?: string;
  options: SelectOption[];
  required?: boolean;
}

function Select({
  id,
  label,
  error,
  hint,
  options,
  required = false,
  ...props
}: SelectProps) {
  const describedBy = [
    hint ? `${id}-hint` : "",
    error ? `${id}-error` : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className="select-field">
      {label && (
        <label className="select-field__label" htmlFor={id}>
          {label}

          {required && (
            <span
              className="select-field__required"
              aria-hidden="true"
            >
              *
            </span>
          )}
        </label>
      )}

      <select
        id={id}
        className={`select ${error ? "select--error" : ""}`}
        aria-invalid={Boolean(error)}
        aria-describedby={describedBy || undefined}
        {...props}
      >
        <option value="">Select an option</option>

        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
            disabled={option.disabled}
          >
            {option.label}
          </option>
        ))}
      </select>

      {hint && !error && (
        <p id={`${id}-hint`} className="select-field__hint">
          {hint}
        </p>
      )}

      {error && (
        <p
          id={`${id}-error`}
          className="select-field__error"
          role="alert"
        >
          {error}
        </p>
      )}
    </div>
  );
}

export default Select;