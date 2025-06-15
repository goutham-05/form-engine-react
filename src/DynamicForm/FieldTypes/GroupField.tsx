import React, { useEffect } from "react";
import {
  FieldError,
  FieldErrorsImpl,
  Merge,
  useController,
  useFormContext,
  useWatch
} from "react-hook-form";
import { FormFieldSchema } from "../types/FormFieldSchema";
import MemoizedFieldRenderer from "FormEngine";

export function getErrorMessage(
  error:
    | string
    | FieldError
    | Merge<FieldError, FieldErrorsImpl<any>>
    | undefined
): string {
  if (!error) return "";

  if (typeof error === "string") return error;

  if (typeof error === "object") {
    if ("message" in error && typeof error.message === "string") {
      return error.message;
    }

    const entries = Object.entries(error as Record<string, any>);
    for (const [, val] of entries) {
      if (val?.message) return val.message;
    }
  }

  return "Field validation error";
}

interface GroupFieldProps {
  field: FormFieldSchema;
  name: string;
  error?: any;
  register: any;
}

const GroupFieldComponent: React.FC<GroupFieldProps> = ({
  field,
  name,
  error
}) => {
  const { control } = useFormContext();

  const {
    field: groupField,
    formState: { errors }
  } = useController({
    name,
    control,
    rules: {
      required: field.required,
      validate: field.validation?.custom
    },
    defaultValue: field.defaultValue ?? {}
  });

  const watchedGroupValue = useWatch({ name, control });
  const groupError = errors?.[name];
  const isDarkMode = field.theme === "dark";

  const wrapperStyle = field.wrapperStyle ?? { marginBottom: "1rem" };
  const labelStyle = field.labelStyle ?? {
    display: "block",
    marginBottom: "6px",
    fontWeight: 500,
    fontSize: "14px",
    color: isDarkMode ? "#e5e7eb" : "#333"
  };
  const errorStyle = field.errorStyle ?? {
    color: "#d93025",
    marginTop: "6px",
    fontSize: "13px"
  };
  const helpTextStyle = field.helpTextStyle ?? {
    fontSize: "12px",
    marginTop: "4px",
    color: isDarkMode ? "#9ca3af" : "#6b7280"
  };

  // Prevent unnecessary loop
  useEffect(() => {
    const hasChanged =
      JSON.stringify(watchedGroupValue) !== JSON.stringify(groupField.value);
    if (hasChanged) groupField.onChange(watchedGroupValue);
  }, [watchedGroupValue, groupField]);

  return (
    <div className={field.wrapperClass ?? ""} style={wrapperStyle}>
      {/* ✅ Render checkboxLabel if provided */}
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
        id={name}
        className={field.layoutClass ?? ""}
        style={field.layoutStyle}
      >
        {field.children?.map((child) => (
          <MemoizedFieldRenderer
            key={child.name}
            field={child}
            parentName={name}
          />
        ))}
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

      {(error || groupError) && (
        <p className={field.errorClass ?? ""} style={errorStyle} role="alert">
          {getErrorMessage(error || groupError)}
        </p>
      )}
    </div>
  );
};

export default React.memo(GroupFieldComponent);
