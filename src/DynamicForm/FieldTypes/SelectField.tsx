import React, { useEffect, useState } from "react";
import { useController, useFormContext, useWatch } from "react-hook-form";
import { FormFieldSchema } from "../types/FormFieldSchema";

interface SelectFieldProps {
  field: FormFieldSchema;
  name: string;
  error?: any;
  register: any;
}

const SelectFieldComponent: React.FC<SelectFieldProps> = ({
  field,
  name,
  error
}) => {
  const { control, setValue, getValues, trigger } = useFormContext();
  const { field: controllerField } = useController({
    name,
    control,
    defaultValue: field.defaultValue ?? "",
    rules: { required: field.required }
  });

  const parentValue = useWatch({ name: field.dependsOn || "__no_field__" });
  const [dynamicOptions, setDynamicOptions] = useState(field.options || []);
  const [loading, setLoading] = useState(false);
  const [fetchError, setFetchError] = useState<string | null>(null);

  // Fetch dynamic options if needed
  useEffect(() => {
    let isMounted = true;
    const updateOptions = async () => {
      if (field.getOptions) {
        setLoading(true);
        setFetchError(null);
        try {
          const result = field.getOptions(parentValue);
          const resolved = result instanceof Promise ? await result : result;
          if (isMounted) setDynamicOptions(resolved || []);
        } catch (err) {
          if (isMounted) {
            setFetchError("Failed to load options.");
            setDynamicOptions([]);
          }
        } finally {
          if (isMounted) setLoading(false);
        }
      } else {
        setDynamicOptions(field.options || []);
      }
    };
    updateOptions();
    return () => {
      isMounted = false;
    };
  }, [field, parentValue]);

  const wrapperStyle = field.wrapperStyle ?? { marginBottom: "1rem" };
  const labelStyle = field.labelStyle ?? {
    display: "block",
    marginBottom: "6px",
    fontWeight: 500,
    fontSize: "14px",
    color: "#333"
  };
  const selectStyle = {
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
    appearance: "none" as any,
    WebkitAppearance: "none" as any,
    MozAppearance: "none" as any,
    paddingRight: "2rem",
    cursor: field.disabled ? "not-allowed" : "pointer",
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

  // ---- Find selected option to show extra helpText below ----
  const selectedOption = dynamicOptions.find(
    (opt) => opt.value === controllerField.value
  );

  // Custom renderer support
  if (typeof field.render === "function") {
    return field.render({
      name,
      error,
      register: undefined,
      defaultValue: field.defaultValue
    });
  }

  return (
    <div className={field.wrapperClass ?? ""} style={wrapperStyle}>
      <label
        htmlFor={name}
        className={field.labelClass ?? ""}
        style={labelStyle}
      >
        {field.label}
        {loading && <span style={{ fontSize: "0.75rem" }}> ⏳</span>}
      </label>

      <div style={{ position: "relative", width: "100%" }}>
        <select
          id={name}
          {...controllerField}
          onChange={(e) => {
            const value = e.target.value;
            controllerField.onChange(value);
            field.onChange?.(
              e as unknown as React.ChangeEvent<HTMLInputElement>
            );
            field.onValueChange?.(value, { setValue, getValues, trigger });
            field.onValueChangeDebounced?.(value, {
              setValue,
              getValues,
              trigger
            });
          }}
          className={field.inputClass ?? ""}
          style={selectStyle}
          disabled={field.disabled || loading}
          aria-describedby={field.helpText ? `${name}-description` : undefined}
          aria-invalid={!!error}
        >
          <option value="">{loading ? "Loading..." : "Select..."}</option>
          {dynamicOptions.map((opt) => (
            <option
              key={opt.value}
              value={opt.value}
              disabled={opt.disabled}
              title={opt.tooltip} // native browser tooltip!
            >
              {opt.label}
            </option>
          ))}
        </select>
        <span
          style={{
            position: "absolute",
            right: "0.75rem",
            top: "50%",
            transform: "translateY(-50%)",
            pointerEvents: "none",
            fontSize: "1rem",
            color: "#6b7280"
          }}
          aria-hidden="true"
        >
          ▼
        </span>
      </div>

      {/* Show global helpText, if present */}
      {field.helpText && (
        <p
          id={`${name}-description`}
          className={field.helpTextClass ?? ""}
          style={helpTextStyle}
        >
          {field.helpText}
        </p>
      )}

      {/* Show helpText for selected option, if any */}
      {selectedOption?.helpText && (
        <div style={{ ...helpTextStyle, marginTop: "2px" }}>
          {selectedOption.helpText}
        </div>
      )}

      {fetchError && (
        <p style={{ color: "orange", fontSize: "0.875rem", marginTop: "4px" }}>
          {fetchError}
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

export default React.memo(SelectFieldComponent);
