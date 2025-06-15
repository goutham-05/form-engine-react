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
import { FormWizard, FIELD_TYPES } from "dynamic-form-form-engine-react";

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

```css
.df-form {
  background: #fff;
  border-radius: 1rem;
  box-shadow: 0 4px 24px 0 rgba(30, 41, 59, 0.1);
  padding: 2rem 1.5rem;
  max-width: 420px;
  margin: 2rem auto;
  font-family: "Inter", system-ui, sans-serif;
}
.df-field-label {
  font-weight: 500;
  margin-bottom: 0.35rem;
  color: #1e293b;
}
.df-input,
.df-textarea,
.df-select {
  width: 100%;
  padding: 0.7rem 1rem;
  border-radius: 0.5rem;
  border: 1px solid #cbd5e1;
  font-size: 1rem;
  background: #f9fafb;
  transition: border 0.2s;
}
.df-input:focus,
.df-textarea:focus,
.df-select:focus {
  border-color: #6366f1;
  background: #fff;
}
.df-checkbox,
.df-radio {
  accent-color: #6366f1;
  margin-right: 0.5rem;
}
.df-btn {
  padding: 0.8rem 1.2rem;
  border-radius: 0.5rem;
  background: #6366f1;
  color: #fff;
  font-weight: 600;
}
.df-btn:active {
  background: #4338ca;
}
.df-btn.df-btn-reset {
  background: #f1f5f9;
  color: #334155;
}
.df-error {
  color: #ef4444;
  font-size: 0.93rem;
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
