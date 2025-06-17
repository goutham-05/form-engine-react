# 🧩 Form Engine

A flexible, schema-driven dynamic form builder for React powered by [React Hook Form](https://react-hook-form.com/). Build professional, complex forms, multi-step wizards, and admin panels—without repetitive boilerplate!

---

## ✨ Features

- **Schema-based configuration:** Define forms as easy-to-maintain JSON objects.
- **Validation out of the box:** Supports required, regex, length, and custom logic.
- **Debounced updates:** Reduce unnecessary validations and API calls.
- **Conditional visibility:** Show/hide fields or groups based on form state.
- **Grouped & nested fields:** Logical sections and sub-forms.
- **Custom rendering:** Full override or slot for your own UI.
- **Multi-step wizard:** Stepper forms built-in.
- **Modern default styling:** Easily override with your own.
- **100% extensible:** Use in admin panels, CRMs, onboarding, settings, and more!

---

## 📦 Installation

```bash
npm install form-engine-react
# or
yarn add form-engine-react
```

---

## ⚡ Quick Start

### Basic Dynamic Form

```tsx
import React from "react";
import {
  DynamicForm,
  FIELD_TYPES,
  type FormFieldSchema
} from "form-engine-react";

const schema: FormFieldSchema[] = [
  {
    name: "email",
    label: "Email",
    type: FIELD_TYPES.EMAIL,
    required: true,
    validation: {
      pattern: {
        value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
        message: "Invalid email format"
      }
    }
  },
  {
    name: "subscribe",
    label: "Subscribe",
    type: FIELD_TYPES.CHECKBOX,
    defaultValue: false
  }
];

export default function App() {
  return (
    <DynamicForm
      schema={schema}
      onSubmit={(data) => alert(JSON.stringify(data, null, 2))}
      showReset
    />
  );
}
```

### Multi-Step Wizard

```tsx
import React from "react";
import { FormWizard, FIELD_TYPES } from "form-engine-react";

const steps = [
  {
    title: "Personal Info",
    fields: [
      {
        name: "firstName",
        label: "First Name",
        type: FIELD_TYPES.TEXT,
        required: true
      },
      {
        name: "lastName",
        label: "Last Name",
        type: FIELD_TYPES.TEXT,
        required: true
      }
    ]
  },
  {
    title: "Contact",
    fields: [
      { name: "email", label: "Email", type: FIELD_TYPES.EMAIL, required: true }
    ]
  }
];

export default function WizardDemo() {
  return (
    <FormWizard
      steps={steps}
      onSubmit={(data) => alert(JSON.stringify(data, null, 2))}
      showProgress
      wizardStyle={{ maxWidth: 480, margin: "2rem auto" }}
    />
  );
}
```

---

## 🎨 Styling

- **Out-of-the-box:** Uses modern, accessible inline styles.
- **Full customization:**
  - Pass your own `formClassName`, `buttonClassName`, or use the `formStyle` prop.
  - Add `inputClass`, `wrapperClass`, and other overrides per field in your schema.
- **Custom CSS:**  
  Create a file (e.g. `form-styles.css`) and pass your class names!

---

## 🧱 Supported Field Types

- `text`
- `email`
- `number`
- `textarea`
- `select`
- `radio`
- `checkbox` (single & multi)
- `group` (nested fields)
- **Custom:** with `render` or `overrideComponent`
- **Wizard:** with `<FormWizard />`

---

## 🧩 Example Schema

```js
export const schema = [
  {
    name: "email",
    label: "Email",
    type: "email",
    required: true,
    validation: {
      pattern: {
        value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
        message: "Invalid email format"
      }
    }
  },
  {
    name: "subscribe",
    label: "Subscribe",
    type: "checkbox",
    defaultValue: false
  },
  {
    name: "preferences",
    label: "Preferences",
    type: "group",
    validation: {
      custom: (value) => value?.email || value?.sms || "Select at least one"
    },
    children: [
      { name: "email", label: "Email", type: "checkbox" },
      { name: "sms", label: "SMS", type: "checkbox" }
    ]
  }
];
```

---

## 👩‍🎨 CSS Example

```js
import {
  DynamicForm,
  FIELD_TYPES,
  type FormFieldSchema
} from "@goutham1494/form-engine";

export const signupFormSchema: FormFieldSchema[] = [
  {
    name: "firstName",
    label: "First Name",
    type: FIELD_TYPES.TEXT,
    required: true,
    placeholder: "Enter your first name",
    helpText: "Your given name",
    wrapperStyle: { marginBottom: 24 },
    labelStyle: { fontWeight: 600, fontSize: "1rem", color: "#374151" },
    inputStyle: {
      background: "#f9fafb",
      borderRadius: 8,
      padding: "12px 14px",
      border: "1px solid #d1d5db",
      width: "100%"
    },
    errorStyle: { color: "#dc2626", fontSize: "0.875rem" }
  },
  {
    name: "lastName",
    label: "Last Name",
    type: FIELD_TYPES.TEXT,
    required: true,
    placeholder: "Enter your last name",
    helpText: "Your family name",
    wrapperStyle: { marginBottom: 24 },
    labelStyle: { fontWeight: 600, fontSize: "1rem", color: "#374151" },
    inputStyle: {
      background: "#f9fafb",
      borderRadius: 8,
      padding: "12px 14px",
      border: "1px solid #d1d5db",
      width: "100%"
    },
    errorStyle: { color: "#dc2626", fontSize: "0.875rem" }
  },
  {
    name: "email",
    label: "Email Address",
    type: FIELD_TYPES.EMAIL,
    required: true,
    placeholder: "you@example.com",
    helpText: "We'll never share your email.",
    inputMode: "email",
    validation: {
      pattern: {
        value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
        message: "Invalid email format"
      }
    },
    wrapperStyle: { marginBottom: 24 },
    labelStyle: { fontWeight: 600, fontSize: "1rem", color: "#374151" },
    inputStyle: {
      background: "#f9fafb",
      borderRadius: 8,
      padding: "12px 14px",
      border: "1px solid #d1d5db",
      width: "100%"
    },
    errorStyle: { color: "#dc2626", fontSize: "0.875rem" }
  },
  {
    name: "password",
    label: "Password",
    type: FIELD_TYPES.TEXT,
    helpText: "Must be at least 6 characters",
    required: true,
    placeholder: "Create a password",
    inputMode: "text",
    validation: {
      minLength: {
        value: 6,
        message: "Password must be at least 6 characters"
      }
    },
    wrapperStyle: { marginBottom: 24 },
    labelStyle: { fontWeight: 600, fontSize: "1rem", color: "#374151" },
    inputStyle: {
      background: "#f9fafb",
      borderRadius: 8,
      padding: "12px 14px",
      border: "1px solid #d1d5db",
      width: "100%"
    },
    errorStyle: { color: "#dc2626", fontSize: "0.875rem" }
  },
  {
    name: "confirmPassword",
    label: "Confirm Password",
    type: FIELD_TYPES.TEXT,
    required: true,
    placeholder: "Re-enter password",
    inputMode: "text",
    validation: {
      custom: (value: any, allValues: any) =>
        value === allValues.password || "Passwords do not match"
    },
    wrapperStyle: { marginBottom: 24 },
    labelStyle: { fontWeight: 600, fontSize: "1rem", color: "#374151" },
    inputStyle: {
      background: "#f9fafb",
      borderRadius: 8,
      padding: "12px 14px",
      border: "1px solid #d1d5db",
      width: "100%"
    },
    errorStyle: { color: "#dc2626", fontSize: "0.875rem" }
  },
  {
    name: "terms",
    checkboxLabel: "",
    label: "I agree to the Terms and Privacy Policy",
    type: FIELD_TYPES.CHECKBOX,
    required: true,
    wrapperStyle: {
      marginTop: 24,
      gridColumn: "1 / -1"
    },
    labelStyle: {
      fontWeight: 500,
      fontSize: "0.95rem",
      color: "#374151"
    },
    checkboxGroupClass: "signup-terms-checkbox-group",
    errorStyle: {
      color: "#dc2626",
      fontSize: "0.875rem"
    }
  }
];
export default function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #f5f7fa, #e0ecf8)",
        padding: "60px 16px"
      }}
    >
      <div
        style={{
          maxWidth: 480,
          width: "100%",
          background: "#ffffff",
          borderRadius: 20,
          boxShadow: "0 20px 60px rgba(0,0,0,0.08)",
          padding: "48px 40px",
          display: "flex",
          flexDirection: "column",
          gap: 40
        }}
      >
        <h2
          style={{
            margin: 0,
            fontSize: "2.25rem",
            fontWeight: 700,
            color: "#1976d2",
            textAlign: "center"
          }}
        >
          Register Your Account
        </h2>

        <div style={{ marginTop: 8 }}>
          <DynamicForm
            schema={signupFormSchema}
            onSubmit={(values) => console.log("submitted", values)}
            showReset
            resetLabel="Cancel"
            submitLabel="Create"
            extraActions={[
              {
                label: "Save as Draft",
                onClick: () => alert("Draft saved"),
                style: { background: "#f3f4f6", color: "#111827" }
              }
            ]}
          />
        </div>
      </div>
    </div>
  );
}

```

## 🙌 Contributing

- **Open issues/PRs:** Bug fixes, features, or docs are welcome!
- **Pre-commit:** Run `npm run lint`
- **Code of Conduct:** Be nice!

---

## 📄 License

MIT License

Copyright (c) 2025 Goutham Posannapeta

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

---
