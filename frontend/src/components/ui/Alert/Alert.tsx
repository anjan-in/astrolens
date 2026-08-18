import type { ReactNode } from "react";
import {
  AlertCircle,
  CheckCircle2,
  Info,
  TriangleAlert,
} from "lucide-react";
import "./Alert.css";

export type AlertVariant =
  | "info"
  | "success"
  | "warning"
  | "error";

export interface AlertProps {
  variant?: AlertVariant;
  title?: string;
  children: ReactNode;
}

const icons = {
  info: Info,
  success: CheckCircle2,
  warning: TriangleAlert,
  error: AlertCircle,
};

function Alert({
  variant = "info",
  title,
  children,
}: AlertProps) {
  const Icon = icons[variant];

  return (
    <div
      className={`alert alert--${variant}`}
      role={variant === "error" ? "alert" : "status"}
    >
      <Icon className="alert__icon" size={20} />

      <div className="alert__content">
        {title && (
          <h4 className="alert__title">
            {title}
          </h4>
        )}

        <div className="alert__message">
          {children}
        </div>
      </div>
    </div>
  );
}

export default Alert;