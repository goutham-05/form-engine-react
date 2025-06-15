import React from "react";
import { useFormContext } from "react-hook-form";
import { FieldType } from "./constant";

/**
 * Schema definition for a single form field used in DynamicForm
 */
export interface FormFieldSchema {
  /** Unique field name (used as key in form data) */
  name: string;

  /** Label to display above the field */
  label: string;

  /** Type of the field: text, select, radio, checkbox, group, etc. */
  type: FieldType;

  /** Default value for the field */
  defaultValue?: unknown;

  /** Whether the field is required */
  required?: boolean;

  /** Whether the field is disabled */
  disabled?: boolean;

  /** Input placeholder text */
  placeholder?: string;

  /** Delay in milliseconds for debounced change handler */
  debounceMs?: number;

  /** Field color theme */
  theme?: "dark" | "light";

  tooltip?: string;
  /** Optional icon to display in the field */
  icon?: React.ReactNode;

  /** Optional help text shown below the field */
  helpText?: string;
  helpTextClass?: string;
  helpTextStyle?: React.CSSProperties;

  /** Allowed pattern for character input */
  allowedPattern?: RegExp;

  /** Input mode (for better mobile keyboards) */
  inputMode?:
    | "text"
    | "numeric"
    | "decimal"
    | "tel"
    | "email"
    | "url"
    | "search";

  /** Validation rules */
  validation?: {
    pattern?: { value: RegExp; message: string };
    minLength?: { value: number; message: string };
    maxLength?: { value: number; message: string };
    custom?: (value: any) => boolean | string;
  };

  /** Conditional visibility of the field */
  visibleWhen?: {
    logic?: "AND" | "OR";
    conditions: {
      field: string;
      value: any | any[];
      operator?:
        | "equals"
        | "notEquals"
        | "in"
        | "notIn"
        | "exists"
        | "notExists";
    }[];
  };

  /** Whether to preserve value if field becomes hidden */
  preserveValue?: boolean;

  /** Declare field dependency */
  dependsOn?: string;

  maxLength?: number;
  minLength?: number;

  showWordCount?: boolean;
  /** Optional prefix icon */
  prefixIcon?: React.ReactNode;
  /** Optional suffix icon */
  suffixIcon?: React.ReactNode;

  /** Options used for select, radio, or checkbox */
  // options?: { label: string; value: string }[];

  options?: {
    label: string;
    value: string;
    helpText?: string;
    disabled?: boolean;
    icon?: React.ReactNode; // optional
    tooltip?: string;
    helpTextAlignment?: "underLabel" | "underButton"; // optional
  }[];

  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onClick?: (event: React.MouseEvent<HTMLInputElement>) => void;
  onMouseEnter?: (event: React.MouseEvent<HTMLInputElement>) => void;
  onMouseLeave?: (event: React.MouseEvent<HTMLInputElement>) => void;
  onMouseOver?: (event: React.MouseEvent<HTMLInputElement>) => void;
  onMouseDown?: (event: React.MouseEvent<HTMLInputElement>) => void;
  onMouseUp?: (event: React.MouseEvent<HTMLInputElement>) => void;

  /**
   * Alignment of help text relative to radio checkbox options
   * - 'underLabel' (default): aligns help text with label
   * - 'underButton': aligns help text under the radio/checkbox circle
   */
  helpTextAlignment?: "underLabel" | "underButton";

  /** Optional endpoint to fetch dynamic options */
  apiEndpoint?: string;

  /** Callback to generate options dynamically */
  getOptions?: (
    parentValue: any
  ) =>
    | { label: string; value: string }[]
    | Promise<{ label: string; value: string }[]>;

  /** Raw change event handler */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;

  /** Raw keyDown event handler */
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;

  /** Called when value changes (non-debounced) */
  onValueChange?: (
    value: any,
    utils: {
      setValue: ReturnType<typeof useFormContext>["setValue"];
      getValues: ReturnType<typeof useFormContext>["getValues"];
      trigger: ReturnType<typeof useFormContext>["trigger"];
    }
  ) => void;

  /** Called when value changes (debounced) */
  onValueChangeDebounced?: (
    value: any,
    utils: {
      setValue: ReturnType<typeof useFormContext>["setValue"];
      getValues: ReturnType<typeof useFormContext>["getValues"];
      trigger: ReturnType<typeof useFormContext>["trigger"];
    }
  ) => Promise<void> | void;

  /** Styling options */
  wrapperClass?: string;
  wrapperStyle?: React.CSSProperties;
  labelClass?: string;
  labelStyle?: React.CSSProperties;
  inputClass?: string;
  inputStyle?: React.CSSProperties;
  errorClass?: string;
  errorStyle?: React.CSSProperties;

  /** Checkbox group styles */
  checkboxGroupClass?: string;
  checkBoxGroupStyle?: React.CSSProperties;
  checkboxLabel?: string;
  /** Radio group styles */
  radioGroupClass?: string;
  radioGroupStyle?: React.CSSProperties;
  radioInputClass?: string;
  radioInputStyle?: React.CSSProperties;
  inline?: boolean;

  /** Option wrapper styles */
  optionWrapperClass?: string;
  optionWrapperStyle?: React.CSSProperties;

  /** Group field support */
  children?: FormFieldSchema[];
  layoutClass?: string;
  layoutStyle?: React.CSSProperties;

  /** Advanced rendering control */
  render?: (fieldProps: {
    name: string;
    error?: any;
    register: any;
    defaultValue?: any;
  }) => React.ReactNode;

  overrideComponent?: React.FC<{
    field: FormFieldSchema;
    name: string;
    error?: any;
    register: any;
  }>;

  overrideComponentProps?: Record<string, any>;

  useRenderFirst?: boolean;

  /** Optional metadata */
  metaData?: {
    buttonText?: string;
  };

  stepDependencies?: {
    stepIndex: number;
    field: string;
    value: any;
  }[];
}
