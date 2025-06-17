import React, { useRef, useState } from "react";
import { useFormContext, useController } from "react-hook-form";
import { FormFieldSchema } from "../types/FormFieldSchema";

interface RadioFieldProps {
  field: FormFieldSchema;
  name: string;
  register: any;
  error?: any;
}

const RadioFieldComponent: React.FC<RadioFieldProps> = ({
  field,
  name,
  register,
  error
}) => {
  const { control, setValue, getValues, trigger } = useFormContext();
  const debounceTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [loading, setLoading] = useState(false);
  const isDarkMode = field.theme === "dark";

  React.useEffect(() => {
    return () => {
      if (debounceTimer.current) clearTimeout(debounceTimer.current);
    };
  }, []);

  const {
    field: controllerField,
    fieldState: { error: fieldError }
  } = useController({
    name,
    control,
    rules: { required: field.required }
  });

  const getAutoErrorMessage = (error: any): string => {
    switch (error?.type) {
      case "required":
        return `${field.label} is required`;
      default:
        return "Invalid selection";
    }
  };

  const wrapperStyle = field.wrapperStyle ?? { marginBottom: "1rem" };
  const labelStyle = field.labelStyle ?? {
    display: "block",
    marginBottom: "6px",
    fontWeight: 500,
    fontSize: "14px",
    color: isDarkMode ? "#e5e7eb" : "#333"
  };

  const radioGroupStyle = field.radioGroupStyle ?? {
    display: "flex",
    flexDirection: field.inline ? "row" : "column",
    gap: "0.75rem",
    alignItems: field.inline ? "center" : "flex-start",
    flexWrap: field.inline ? "wrap" : "nowrap"
  };

  const radioInputStyle = {
    width: "16px",
    height: "16px",
    accentColor: "#004DB2",
    cursor: field.disabled ? "not-allowed" : "pointer",
    transition: "all 0.2s ease",
    ...field.inputStyle
  };

  const helpTextStyle = field.helpTextStyle ?? {
    fontSize: "12px",
    color: isDarkMode ? "#9ca3af" : "#6b7280",
    marginTop: "4px"
  };

  const errorStyle = field.errorStyle ?? {
    color: "#d93025",
    marginTop: "6px",
    fontSize: "13px"
  };

  const handleChange = (
    value: string,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    controllerField.onChange(value);
    field.onChange?.(event);
    field.onValueChange?.(value, { setValue, getValues, trigger });

    if ((error || fieldError) && field.showErrorOnBlur) {
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
  };

  return (
    <div className={field.wrapperClass ?? ""} style={wrapperStyle}>
      <label className={field.labelClass ?? ""} style={labelStyle}>
        {field.label}
        {loading && <span style={{ fontSize: "0.75rem" }}> ⏳</span>}
      </label>

      <div className={field.radioGroupClass ?? ""} style={radioGroupStyle}>
        {field.options?.map((option) => {
          const helpTextAlignment = option.helpTextAlignment ?? "underLabel";
          const inputId = `${name}-${option.value}`;
          const isSelected = controllerField.value === option.value;

          return (
            <div
              key={option.value}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start"
              }}
            >
              <label
                htmlFor={inputId}
                className={field.optionWrapperClass}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  cursor: field.disabled ? "not-allowed" : "pointer"
                }}
                title={option.tooltip}
              >
                <input
                  id={inputId}
                  type="radio"
                  value={option.value}
                  checked={isSelected}
                  onChange={(e) => handleChange(e.target.value, e)}
                  onBlur={() => {
                    if (field.showErrorOnBlur) trigger(name);
                  }}
                  className={field.inputClass}
                  style={radioInputStyle}
                  disabled={field.disabled || option.disabled}
                  aria-describedby={
                    option.helpText ? `${inputId}-desc` : undefined
                  }
                />
                <span
                  style={{
                    fontSize: "14px",
                    fontWeight: isSelected ? 600 : 400,
                    color: isSelected ? "#004DB2" : undefined
                  }}
                >
                  {option.label}
                </span>
              </label>

              {option.helpText && (
                <div
                  id={`${inputId}-desc`}
                  role="note"
                  style={{
                    ...helpTextStyle,
                    marginLeft:
                      helpTextAlignment === "underLabel" ? "24px" : "0"
                  }}
                >
                  {option.helpText}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {field.helpText && (
        <p
          id={`${name}-description`}
          className={field.helpTextClass ?? ""}
          style={helpTextStyle}
        >
          {field.helpText}
        </p>
      )}

      {(error || fieldError) && (
        <p className={field.errorClass ?? ""} style={errorStyle} role="alert">
          {field.errorText ||
            field.getErrorMessage?.(error || fieldError) ||
            (error || fieldError)?.message ||
            getAutoErrorMessage(error || fieldError)}
        </p>
      )}
    </div>
  );
};

export default React.memo(RadioFieldComponent);
