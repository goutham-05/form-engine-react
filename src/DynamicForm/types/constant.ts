export const FIELD_TYPES = {
  TEXT: "text",
  NUMBER: "number",
  EMAIL: "email",
  SELECT: "select",
  CHECKBOX: "checkbox",
  GROUP: "group",
  RADIO: "radio",
  TEXTAREA: "textarea",
  ADDITIONAL_EMAIL: "additionalEmail"
} as const;

export type FieldType = (typeof FIELD_TYPES)[keyof typeof FIELD_TYPES];
