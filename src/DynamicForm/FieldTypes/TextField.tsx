import React, { useCallback, useRef, useState } from "react";
import { useController, useFormContext } from "react-hook-form";
import type { FormFieldSchema } from "../types/FormFieldSchema";

interface TextFieldProps {
  field: FormFieldSchema;
  name: string;
  error?: any;
  register: any;
}

const TextFieldComponent: React.FC<TextFieldProps> = ({
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

  React.useEffect(() => {
    return () => {
      if (debounceTimer.current) {
        clearTimeout(debounceTimer.current);
      }
    };
  }, []);

  const helpTextPosition = field.helpTextAlignment ?? "underLabel";

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      controllerField.onChange(e);
      field.onChange?.(e);

      if (field.onValueChange) {
        field.onValueChange(value, { setValue, getValues, trigger });
      }

      if (error && field.showErrorOnBlur) {
        trigger(name);
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
    [field, setValue, getValues, trigger, controllerField]
  );

  const wrapperStyle = field.wrapperStyle ?? { marginBottom: "1rem" };
  const labelStyle = field.labelStyle ?? {
    display: "flex",
    alignItems: "center",
    gap: "0.4rem",
    marginBottom: "6px",
    fontWeight: 500,
    fontSize: "14px",
    color: "#333"
  };

  const inputStyle = {
    padding: "10px",
    border: "1px solid",
    borderColor: error ? "#f87171" : "#ccc",
    borderRadius: "6px",
    fontSize: "14px",
    width: "100%",
    backgroundColor: "#fff",
    color: "#111827",
    outline: "none",
    boxSizing: "border-box" as const,
    transition: "border-color 0.2s ease-in-out",
    opacity: field.disabled ? 0.6 : 1,
    cursor: field.disabled ? "not-allowed" : "text",
    ...field.inputStyle
  };

  const helpTextStyle = field.helpTextStyle ?? {
    fontSize: "12px",
    marginTop: "4px",
    color: "#6b7280"
  };

  const errorStyle = field.errorStyle ?? {
    color: "#d93025",
    marginTop: "6px",
    fontSize: "13px"
  };

  const Tooltip = field.tooltip ? (
    <span title={field.tooltip} style={{ cursor: "help", fontSize: "13px" }}>
      ❓
    </span>
  ) : null;

  const LabelIcon = field.icon ?? null;

  const getAutoErrorMessage = (error: any): string => {
    switch (error?.type) {
      case "required":
        return `${field.label} is required`;
      case "minLength":
        return `${field.label} must be at least ${field.validation?.minLength?.value} characters`;
      case "maxLength":
        return `${field.label} must be at most ${field.validation?.maxLength?.value} characters`;
      case "pattern":
        return `${field.label} format is invalid`;
      default:
        return "Invalid value";
    }
  };

  return (
    <div className={field.wrapperClass ?? ""} style={wrapperStyle}>
      <label
        htmlFor={name}
        className={field.labelClass ?? ""}
        style={labelStyle}
      >
        {field.label} {LabelIcon} {Tooltip}
        {loading && <span style={{ fontSize: "0.75rem" }}>⏳</span>}
      </label>

      {/* Show helpText directly under label if underLabel, otherwise after input */}
      {helpTextPosition === "underLabel" && field.helpText && (
        <p
          id={`${name}-description`}
          className={field.helpTextClass ?? ""}
          style={{
            ...helpTextStyle
          }}
        >
          {field.helpText}
        </p>
      )}

      <input
        id={name}
        type={field.type}
        placeholder={field.placeholder}
        aria-invalid={Boolean(error)}
        aria-describedby={field.helpText ? `${name}-description` : undefined}
        inputMode={field.inputMode}
        value={controllerField.value ?? ""}
        minLength={field.minLength}
        maxLength={field.maxLength}
        onChange={handleChange}
        onBlur={(e) => {
          field.onBlur?.(e);
          if (field.showErrorOnBlur) {
            trigger(name);
          }
        }}
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

      {/* Show helpText below input if not underLabel */}
      {helpTextPosition !== "underLabel" && field.helpText && (
        <p
          id={`${name}-description`}
          className={field.helpTextClass ?? ""}
          style={helpTextStyle}
        >
          {field.helpText}
        </p>
      )}

      {error && (
        <p className={field.errorClass ?? ""} style={errorStyle} role="alert">
          {field.errorText ||
            field.getErrorMessage?.(error) ||
            error.message ||
            getAutoErrorMessage(error)}
        </p>
      )}
    </div>
  );
};

export default React.memo(TextFieldComponent);
