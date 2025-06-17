import React, { useEffect, useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import FormEngine from "FormEngine";
import type { FormFieldSchema } from "./types/FormFieldSchema";

interface DynamicFormProps {
  schema: FormFieldSchema[];
  onSubmit: (values: any) => void;
  formStyle?: React.CSSProperties;
  formClassName?: string;
  buttonStyle?: React.CSSProperties;
  buttonClassName?: string;
  submitButtonStyle?: React.CSSProperties;
  submitButtonClassName?: string;
  resetButtonStyle?: React.CSSProperties;
  resetButtonClassName?: string;
  submitLabel?: string;
  resetLabel?: string;
  hideSubmitButton?: boolean;
  children?: React.ReactNode;
  showReset?: boolean;
  onReset?: () => void;
  columns?: number;
  gap?: string;
  maxWidth?: number | string;

  extraActions?: {
    label: string;
    onClick: () => void;
    type?: "button" | "submit" | "reset";
    style?: React.CSSProperties;
    className?: string;
    icon?: React.ReactNode;
  }[];
}

const defaultButtonStyle: React.CSSProperties = {
  padding: "0.75rem 1.5rem",
  background: "#2563eb",
  color: "#fff",
  border: "none",
  borderRadius: "0.5rem",
  fontWeight: 600,
  boxShadow: "0 1px 2px 0 rgba(30,41,59,.06)",
  transition: "background 0.18s",
  cursor: "pointer"
};

const defaultFormStyle: React.CSSProperties = {
  background: "#fff",
  boxShadow: "0 4px 24px 0 rgba(30, 41, 59, 0.10)",
  borderRadius: "1rem",
  padding: "1.5rem",
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: "1.25rem 1.5rem",
  maxWidth: 800
};

const DynamicForm: React.FC<DynamicFormProps> = ({
  schema,
  onSubmit,
  formStyle,
  formClassName,
  submitButtonStyle,
  submitButtonClassName,
  resetButtonStyle,
  resetButtonClassName,
  submitLabel = "Submit",
  resetLabel = "Reset",
  extraActions,
  hideSubmitButton = false,
  children,
  showReset = false,
  onReset,
  columns,
  gap,
  maxWidth
}) => {
  const methods = useForm();
  const [isMd, setIsMd] = useState(
    typeof window !== "undefined" ? window.innerWidth >= 768 : false
  );

  useEffect(() => {
    const handler = () => setIsMd(window.innerWidth >= 768);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  // Compute grid columns based on props or screen size
  const gridColumns = columns ?? (isMd ? 2 : 1);

  // Merge default and user styles, with user styles taking precedence
  const mergedFormStyle: React.CSSProperties = {
    ...defaultFormStyle,
    gridTemplateColumns: `repeat(${gridColumns}, 1fr)`,
    gap: gap ?? defaultFormStyle.gap,
    maxWidth: maxWidth ?? defaultFormStyle.maxWidth,
    ...formStyle
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className={formClassName}
        style={mergedFormStyle}
      >
        {children}
        {schema.map((field) => (
          <FormEngine key={field.name} field={field} />
        ))}

        {(showReset || !hideSubmitButton) && (
          <div
            style={{
              gridColumn: "1 / -1",
              marginTop: "1rem",
              display: "flex",
              gap: "1rem"
            }}
          >
            {(showReset || !hideSubmitButton || extraActions?.length) && (
              <div
                style={{
                  gridColumn: "1 / -1",
                  marginTop: "1rem",
                  display: "flex",
                  gap: "1rem",
                  flexWrap: "wrap"
                }}
              >
                {extraActions?.map((action, index) => (
                  <button
                    key={`extra-btn-${index}`}
                    type={action.type ?? "button"}
                    onClick={action.onClick}
                    style={{ ...defaultButtonStyle, ...action.style }}
                    className={action.className}
                  >
                    {action.icon && (
                      <span style={{ marginRight: 8 }}>{action.icon}</span>
                    )}
                    {action.label}
                  </button>
                ))}
                {showReset && (
                  <button
                    type="button"
                    style={{ ...defaultButtonStyle, ...resetButtonStyle }}
                    className={resetButtonClassName}
                    onClick={() => {
                      methods.reset();
                      onReset?.();
                    }}
                  >
                    {resetLabel}
                  </button>
                )}
                {!hideSubmitButton && (
                  <button
                    type="submit"
                    style={{ ...defaultButtonStyle, ...submitButtonStyle }}
                    className={submitButtonClassName}
                    onMouseOver={(e) =>
                      (e.currentTarget.style.background = "#1d4ed8")
                    }
                    onMouseOut={(e) =>
                      (e.currentTarget.style.background = "#2563eb")
                    }
                  >
                    {submitLabel}
                  </button>
                )}
              </div>
            )}
          </div>
        )}
      </form>
    </FormProvider>
  );
};

export default DynamicForm;
