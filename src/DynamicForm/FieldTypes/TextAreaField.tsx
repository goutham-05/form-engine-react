import React, { useRef, useState } from "react";
import { useController, useFormContext } from "react-hook-form";
import { FormFieldSchema } from "../types/FormFieldSchema";

interface TextAreaFieldProps {
  field: FormFieldSchema;
  name: string;
  error?: any;
  register: any;
}

const TextAreaFieldComponent: React.FC<TextAreaFieldProps> = ({
  field,
  name,
  error,
  register
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

  // Clear any pending debounce timer on unmount
  React.useEffect(() => {
    return () => {
      if (debounceTimer.current) {
        clearTimeout(debounceTimer.current);
      }
    };
  }, []);

  const wrapperStyle = field.wrapperStyle ?? { marginBottom: "1rem" };
  const labelStyle = field.labelStyle ?? {
    display: "block",
    marginBottom: "6px",
    fontWeight: 500,
    fontSize: "14px",
    color: "#333"
  };

  const inputStyle: React.CSSProperties = {
    padding: "10px",
    border: "1px solid",
    borderColor: error ? "#f87171" : "#ccc",
    borderRadius: "6px",
    fontSize: "14px",
    width: "100%",
    minHeight: "100px",
    backgroundColor: "#fff",
    color: "#111827",
    outline: "none",
    boxSizing: "border-box",
    transition: "border-color 0.2s ease-in-out",
    opacity: field.disabled ? 0.6 : 1,
    cursor: field.disabled ? "not-allowed" : "text",
    ...field.inputStyle
  };

  const errorStyle = field.errorStyle ?? {
    color: "#d93025",
    marginTop: "6px",
    fontSize: "13px"
  };

  const helpTextStyle = field.helpTextStyle ?? {
    fontSize: "12px",
    marginTop: "4px",
    color: "#6b7280"
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    controllerField.onChange(e);
    field.onChange?.(e as unknown as React.ChangeEvent<HTMLInputElement>);

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
  };

  const value = controllerField.value ?? "";
  const wordCount = value.trim() === "" ? 0 : value.trim().split(/\s+/).length;

  return (
    <div className={field.wrapperClass ?? ""} style={wrapperStyle}>
      <label
        htmlFor={name}
        className={field.labelClass ?? ""}
        style={labelStyle}
      >
        {field.label}
        {field.tooltip && (
          <span
            title={field.tooltip}
            style={{ marginLeft: "6px", cursor: "help" }}
          >
            ℹ️
          </span>
        )}
        {loading && (
          <span style={{ fontSize: "0.75rem", marginLeft: "6px" }}>⏳</span>
        )}
      </label>

      <div style={{ display: "flex", alignItems: "flex-start" }}>
        {field.prefixIcon && (
          <span style={{ marginRight: "6px" }}>{field.prefixIcon}</span>
        )}

        <textarea
          id={name}
          aria-invalid={!!error}
          aria-required={field.required}
          aria-disabled={field.disabled}
          aria-describedby={field.helpText ? `${name}-description` : undefined}
          value={value}
          minLength={field.minLength}
          maxLength={field.maxLength}
          onChange={handleChange}
          onBlur={(e) => {
            controllerField.onBlur();
            field.onBlur?.(e as unknown as React.FocusEvent<HTMLInputElement>);
          }}
          className={field.inputClass ?? ""}
          style={inputStyle}
          disabled={field.disabled}
        />

        {field.suffixIcon && (
          <span style={{ marginLeft: "6px" }}>{field.suffixIcon}</span>
        )}
      </div>

      {field.helpText && (
        <p
          id={`${name}-description`}
          className={field.helpTextClass ?? ""}
          style={{
            ...helpTextStyle,
            marginLeft: "0"
          }}
        >
          {field.helpText}
        </p>
      )}

      {(field.maxLength || field.showWordCount) && (
        <div
          style={{
            fontSize: "12px",
            marginTop: "4px",
            textAlign: "right",
            color: "#9ca3af"
          }}
        >
          {field.showWordCount && <span>{wordCount} words</span>}
          {field.maxLength && (
            <span>
              {" "}
              {value.length}/{field.maxLength}
            </span>
          )}
        </div>
      )}

      {error && (
        <p className={field.errorClass ?? ""} style={errorStyle} role="alert">
          {error.message || "This field is required"}
        </p>
      )}
    </div>
  );
};

export default React.memo(TextAreaFieldComponent);
