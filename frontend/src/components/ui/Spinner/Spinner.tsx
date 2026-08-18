import type { HTMLAttributes } from "react";
import "./Spinner.css";

export interface SpinnerProps extends HTMLAttributes<HTMLSpanElement> {
  size?: "sm" | "md" | "lg";
}

function Spinner({
  size = "md",
  ...props
}: SpinnerProps) {
  return (
    <span
      className={`spinner spinner--${size}`}
      role="status"
      aria-label="Loading"
      {...props}
    />
  );
}

export default Spinner;