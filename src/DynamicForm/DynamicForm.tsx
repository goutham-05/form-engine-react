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
  submitLabel?: string;
  hideSubmitButton?: boolean;
  children?: React.ReactNode;
  showReset?: boolean;
  onReset?: () => void;
  columns?: number;
  gap?: string;
  maxWidth?: number | string;
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
  buttonStyle,
  buttonClassName,
  submitLabel = "Submit",
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
            {showReset && (
              <button
                type="button"
                style={{
                  ...defaultButtonStyle,
                  background: "#e5e7eb",
                  color: "#111827"
                }}
                className={buttonClassName}
                onClick={() => {
                  methods.reset();
                  onReset?.();
                }}
              >
                Reset
              </button>
            )}
            {!hideSubmitButton && (
              <button
                type="submit"
                style={{ ...defaultButtonStyle, ...buttonStyle }}
                className={buttonClassName}
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
      </form>
    </FormProvider>
  );
};

export default DynamicForm;
