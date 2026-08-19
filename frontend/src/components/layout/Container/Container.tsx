import type { HTMLAttributes } from "react";
import "./Container.css";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg" | "xl";
}

function Container({
  children,
  size = "xl",
  className = "",
  ...props
}: ContainerProps) {
  return (
    <div
      className={`container container--${size} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

export default Container;