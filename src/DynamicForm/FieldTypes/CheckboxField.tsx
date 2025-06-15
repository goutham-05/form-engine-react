import React, { useRef, useState } from "react";
import { useFormContext, useController } from "react-hook-form";
import { FormFieldSchema } from "../types/FormFieldSchema";

interface CheckboxFieldProps {
  field: FormFieldSchema;
  name: string;
  register: any;
  error?: any;
}

const CheckboxFieldComponent: React.FC<CheckboxFieldProps> = ({
  field,
  name,
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
    fieldState: { error: controllerError }
  } = useController({
    name,
    control,
    defaultValue: field.defaultValue ?? (field.options ? [] : false),
    rules: {
      required: field.required,
      validate: field.validation?.custom
    }
  });

  const getAutoErrorMessage = (error: any): string => {
    switch (error?.type) {
      case "required":
        return `${field.label} is required`;
      default:
        return "Invalid selection";
    }
  };

  const handleDebounced = (value: any) => {
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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    value?: string
  ) => {
    const isGroup = !!field.options?.length;
    const newValue = isGroup
      ? e.target.checked
        ? [...(controllerField.value || []), value]
        : controllerField.value.filter((v: string) => v !== value)
      : e.target.checked;

    controllerField.onChange(newValue);
    field.onChange?.(e);
    field.onValueChange?.(newValue, { setValue, getValues, trigger });
    handleDebounced(newValue);

    if ((error || controllerError) && field.showErrorOnBlur) {
      trigger(name); // clear error once fixed
    }
  };

  const inputStyle = {
    width: "16px",
    height: "16px",
    accentColor: "#004DB2",
    cursor: field.disabled ? "not-allowed" : "pointer",
    ...field.inputStyle
  };

  const labelStyle = field.labelStyle ?? {
    fontSize: "14px",
    color: isDarkMode ? "#e5e7eb" : "#333"
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

  const wrapperStyle = field.wrapperStyle ?? { marginBottom: "1rem" };

  const optionWrapperStyle = field.optionWrapperStyle ?? {
    display: "flex",
    alignItems: "center",
    gap: "8px"
  };

  const checkBoxGroupStyle = field.checkBoxGroupStyle ?? {
    display: "flex",
    flexDirection: "column",
    gap: "0.75rem"
  };

  const isGroup = !!field.options?.length;

  return (
    <div className={field.wrapperClass ?? ""} style={wrapperStyle}>
      {(field.checkboxLabel ?? field.label) && (
        <label
          htmlFor={name}
          className={field.labelClass ?? ""}
          style={labelStyle}
        >
          {field.checkboxLabel ?? field.label}
        </label>
      )}

      <div
        className={field.checkboxGroupClass ?? ""}
        style={isGroup ? checkBoxGroupStyle : optionWrapperStyle}
      >
        {isGroup ? (
          field.options?.map((opt) => {
            const isChecked = controllerField.value?.includes(opt.value);
            const inputId = `${name}-${opt.value}`;
            const helpTextAlignment = opt.helpTextAlignment ?? "underLabel";

            return (
              <div
                key={opt.value}
                style={{ display: "flex", flexDirection: "column" }}
              >
                <label
                  htmlFor={inputId}
                  className={field.optionWrapperClass ?? ""}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    cursor: field.disabled ? "not-allowed" : "pointer"
                  }}
                  title={opt.tooltip}
                >
                  <input
                    id={inputId}
                    type="checkbox"
                    value={opt.value}
                    checked={isChecked}
                    onChange={(e) => handleChange(e, opt.value)}
                    onBlur={() => {
                      if (field.showErrorOnBlur) trigger(name);
                    }}
                    className={field.inputClass ?? ""}
                    style={inputStyle}
                    disabled={field.disabled || opt.disabled}
                    aria-describedby={
                      opt.helpText ? `${inputId}-desc` : undefined
                    }
                  />
                  <span>{opt.label}</span>
                </label>
                {opt.helpText && (
                  <div
                    id={`${inputId}-desc`}
                    role="note"
                    style={{
                      ...helpTextStyle,
                      marginLeft:
                        helpTextAlignment === "underLabel" ? "24px" : "0"
                    }}
                  >
                    {opt.helpText}
                  </div>
                )}
              </div>
            );
          })
        ) : (
          <label
            className={field.optionWrapperClass ?? ""}
            style={optionWrapperStyle}
          >
            <input
              id={name}
              type="checkbox"
              className={field.inputClass ?? ""}
              style={inputStyle}
              checked={!!controllerField.value}
              onChange={(e) => handleChange(e)}
              onBlur={() => {
                if (field.showErrorOnBlur) trigger(name);
              }}
              disabled={field.disabled}
              aria-describedby={
                field.helpText ? `${name}-description` : undefined
              }
            />
            <span>{field.label}</span>
          </label>
        )}
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

      {(error || controllerError) && (
        <p className={field.errorClass ?? ""} style={errorStyle} role="alert">
          {field.errorText ||
            field.getErrorMessage?.(error || controllerError) ||
            (error || controllerError)?.message ||
            getAutoErrorMessage(error || controllerError)}
        </p>
      )}
    </div>
  );
};

export default React.memo(CheckboxFieldComponent);
