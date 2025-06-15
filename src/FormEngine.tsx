import React, { useEffect } from "react";
import { Controller, useFormContext, useWatch } from "react-hook-form";
import CheckboxField from "DynamicForm/FieldTypes/CheckboxField";
import GroupFieldComponent from "DynamicForm/FieldTypes/GroupField";
import NumberField from "DynamicForm/FieldTypes/NumberField";
import RadioField from "DynamicForm/FieldTypes/RadioField";
import SelectField from "DynamicForm/FieldTypes/SelectField";
import TextAreaField from "DynamicForm/FieldTypes/TextAreaField";
import TextField from "DynamicForm/FieldTypes/TextField";
import type { FormFieldSchema } from "DynamicForm/types/FormFieldSchema";

const resolveNestedValue = (obj: any, path: string): any =>
  path.split(".").reduce((acc, key) => acc?.[key], obj);

interface Props {
  field: FormFieldSchema;
  parentName?: string;
}

const BaseFieldRenderer: React.FC<Props> = ({ field, parentName }) => {
  const { register, formState, control, setValue, getValues } =
    useFormContext();

  const qualifiedFieldName = parentName
    ? `${parentName}.${field.name}`
    : field.name;
  const error = resolveNestedValue(formState.errors, qualifiedFieldName);
  const formValues = useWatch({ control });

  // 🔍 Visibility evaluation
  let shouldRenderField = true;

  if (field.visibleWhen?.conditions?.length) {
    const { conditions, logic = "AND" } = field.visibleWhen;

    const results = conditions.map(({ field: target, value, operator }) => {
      const currentVal = resolveNestedValue(formValues, target);

      switch (operator) {
        case "equals":
          return currentVal === value;
        case "notEquals":
          return currentVal !== value;
        case "in":
          return Array.isArray(value) && value.includes(currentVal);
        case "notIn":
          return Array.isArray(value) && !value.includes(currentVal);
        case "exists":
          return (
            currentVal !== undefined && currentVal !== null && currentVal !== ""
          );
        case "notExists":
          return (
            currentVal === undefined || currentVal === null || currentVal === ""
          );
        default:
          return false;
      }
    });

    shouldRenderField =
      logic === "AND" ? results.every(Boolean) : results.some(Boolean);
  }

  // 🧹 Clear value if not visible and not preserved
  useEffect(() => {
    if (!shouldRenderField && !field.preserveValue) {
      const existing = resolveNestedValue(getValues(), qualifiedFieldName);
      if (existing !== undefined) {
        const fallback = field.defaultValue ?? "";
        setValue(qualifiedFieldName, fallback);
      }
    }
  }, [
    shouldRenderField,
    qualifiedFieldName,
    field.defaultValue,
    field.preserveValue,
    getValues,
    setValue
  ]);

  if (!shouldRenderField) return null;

  // 📦 Common props
  const sharedFieldProps = {
    field,
    name: qualifiedFieldName,
    error,
    register
  };

  if (typeof field.render === "function") {
    return field.render({
      name: qualifiedFieldName,
      error,
      register,
      defaultValue: field.defaultValue
    });
  }

  if (field.overrideComponent) {
    const OverrideComponent = field.overrideComponent;
    return (
      <OverrideComponent
        {...(field.overrideComponentProps ?? {})}
        field={field}
        name={qualifiedFieldName}
        error={error}
        register={register}
      />
    );
  }

  // 🧩 Field type rendering
  switch (field.type) {
    case "text":
    case "email":
      return <TextField {...sharedFieldProps} />;
    case "number":
      return <NumberField {...sharedFieldProps} />;
    case "textarea":
      return <TextAreaField {...sharedFieldProps} />;
    case "select":
      return <SelectField {...sharedFieldProps} />;
    case "radio":
      return <RadioField {...sharedFieldProps} />;
    case "checkbox":
      return (
        <CheckboxField
          field={field}
          name={qualifiedFieldName}
          register={register}
        />
      );
    case "group":
      return <GroupFieldComponent {...sharedFieldProps} />;
    default:
      return <p>Unsupported field type: {field.type}</p>;
  }
};

export default React.memo(BaseFieldRenderer);
