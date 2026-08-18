import type { HTMLAttributes } from "react";
import "./Skeleton.css";

export interface SkeletonProps
  extends HTMLAttributes<HTMLDivElement> {
  width?: string;
  height?: string;
  radius?: "sm" | "md" | "lg" | "full";
}

function Skeleton({
  width = "100%",
  height = "1rem",
  radius = "md",
  className = "",
  style,
  ...props
}: SkeletonProps) {
  return (
    <div
      className={`skeleton skeleton--${radius} ${className}`}
      style={{
        width,
        height,
        ...style,
      }}
      aria-hidden="true"
      {...props}
    />
  );
}

export default Skeleton;