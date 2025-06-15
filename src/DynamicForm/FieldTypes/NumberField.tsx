import React, { useCallback, useRef, useState } from "react";
import { useController, useFormContext } from "react-hook-form";
import { FormFieldSchema } from "../types/FormFieldSchema";

interface NumberFieldProps {
  field: FormFieldSchema;
  name: string;
  error?: any;
  register: any;
}

const NumberFieldComponent: React.FC<NumberFieldProps> = ({
  field,
  name,
  error
}) => {
  const { setValue, getValues, trigger, control } = useFormContext();
  const { field: controllerField } = useController({
    name,
    control,
    defaultValue: field.defaultValue ?? "",
    rules: {
      required: field.required,
      pattern: field.validation?.pattern,
      minLength: field.validation?.minLength,
      maxLength: field.validation?.maxLength,
      validate: field.validation?.custom
    }
  });

  const debounceTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [loading, setLoading] = useState(false);
  const isDarkMode = field.theme === "dark";
  const isNumberField = field.type === "number";

  // Clear any pending debounce timer on unmount
  React.useEffect(() => {
    return () => {
      if (debounceTimer.current) {
        clearTimeout(debounceTimer.current);
      }
    };
  }, []);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = isNumberField ? +e.target.value : e.target.value;

      controllerField.onChange(e);
      field.onChange?.(e);

      if (field.onValueChange) {
        field.onValueChange(value, { setValue, getValues, trigger });
      }

      if (field.onValueChangeDebounced) {
        if (debounceTimer.current) clearTimeout(debounceTimer.current);
        setLoading(true);
        debounceTimer.current = setTimeout(async () => {
          await field.onValueChangeDebounced?.(value, {
            setValue,
            getValues,
            trigger
          });
          setLoading(false);
        }, field.debounceMs ?? 500);
      }
    },
    [controllerField, field, isNumberField, setValue, getValues, trigger]
  );

  const getDefaultInputStyle = (
    isDark: boolean,
    hasError: boolean
  ): React.CSSProperties => ({
    padding: "10px",
    border: "1px solid",
    borderColor: hasError ? "#f87171" : isDark ? "#4b5563" : "#ccc",
    borderRadius: "6px",
    fontSize: "14px",
    width: "100%",
    backgroundColor: isDark ? "#1f2937" : "#fff",
    color: isDark ? "#f9fafb" : "#111827",
    outline: "none",
    boxSizing: "border-box",
    transition: "border-color 0.2s ease-in-out",
    opacity: field.disabled ? 0.6 : 1,
    cursor: field.disabled ? "not-allowed" : "text"
  });

  const getDefaultLabelStyle = (isDark: boolean): React.CSSProperties => ({
    display: "flex",
    alignItems: "center",
    gap: "6px",
    marginBottom: "6px",
    fontWeight: 500,
    fontSize: "14px",
    color: isDark ? "#e5e7eb" : "#333"
  });

  const wrapperStyle = field.wrapperStyle ?? { marginBottom: "1rem" };
  const labelStyle = field.labelStyle ?? getDefaultLabelStyle(isDarkMode);
  const inputStyle = {
    ...getDefaultInputStyle(isDarkMode, Boolean(error)),
    ...field.inputStyle
  };
  const helpTextStyle = field.helpTextStyle ?? {
    fontSize: "12px",
    marginTop: "4px",
    color: isDarkMode ? "#9ca3af" : "#6b7280"
  };
  const errorStyle = field.errorStyle ?? {
    color: "#d93025",
    marginTop: "6px",
    fontSize: "13px"
  };

  const renderLabel = () => (
    <label htmlFor={name} className={field.labelClass ?? ""} style={labelStyle}>
      {field.icon && <span>{field.icon}</span>}
      <span title={field.tooltip}>{field.label}</span>
      {loading && <span style={{ fontSize: "0.75rem" }}>⏳</span>}
    </label>
  );

  return (
    <div className={field.wrapperClass ?? ""} style={wrapperStyle}>
      {renderLabel()}

      <input
        id={name}
        type={isNumberField ? "number" : "text"}
        inputMode={field.inputMode ?? (isNumberField ? "numeric" : "text")}
        placeholder={field.placeholder}
        aria-invalid={Boolean(error)}
        aria-describedby={field.helpText ? `${name}-description` : undefined}
        value={controllerField.value ?? ""}
        onChange={handleChange}
        onKeyDown={(e) => {
          if (field.allowedPattern) {
            const char = e.key;
            const isControlKey = [
              "Backspace",
              "Delete",
              "ArrowLeft",
              "ArrowRight",
              "Tab"
            ].includes(char);
            if (!isControlKey && !field.allowedPattern.test(char)) {
              e.preventDefault();
            }
          }
          field.onKeyDown?.(e);
        }}
        className={field.inputClass ?? ""}
        style={inputStyle}
        disabled={field.disabled}
      />

      {field.helpText && (
        <p
          id={`${name}-description`}
          className={field.helpTextClass ?? ""}
          style={{
            ...helpTextStyle,
            marginLeft: field.helpTextAlignment === "underLabel" ? "24px" : "0"
          }}
        >
          {field.helpText}
        </p>
      )}

      {error && (
        <p className={field.errorClass ?? ""} style={errorStyle} role="alert">
          {error.message || "This field is required"}
        </p>
      )}
    </div>
  );
};

export default React.memo(NumberFieldComponent);
