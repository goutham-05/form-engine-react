# 🚀 DynamicForm Usage Guide

This guide shows how to use `<DynamicForm />` with your schema.

---

## 📦 Import

```tsx
import { DynamicForm } from "@your-org/form-engine";
```

---

## 🧩 Basic Usage

```tsx
<DynamicForm schema={formSchema} onSubmit={(values) => console.log(values)} />
```

---

## 📄 Props

| Prop        | Type                  | Description |
|-------------|-----------------------|-------------|
| `schema`    | `FormFieldSchema[]`   | Your form structure |
| `onSubmit`  | `(data) => void`      | Callback with final values |
| `defaultValues` | `object`         | Optional default form values |

---

## ✨ Features

- Auto handles field rendering
- Custom error messages
- Built-in debounce + API interaction
- Show/hide fields based on conditions
- Group fields + validations

---

## ✅ Example Schema

```ts
const schema = [
  {
    name: "firstName",
    label: "First Name",
    type: "text",
    required: true
  },
  {
    name: "gender",
    label: "Gender",
    type: "radio",
    options: [
      { label: "Male", value: "male" },
      { label: "Female", value: "female" }
    ]
  }
];
```

---

## 🔍 Custom Components

Use `overrideComponent` or `render` for full flexibility.

```ts
{
  name: "customEmail",
  label: "Email",
  type: "text",
  overrideComponent: MyCustomEmailComponent
}
```

---

## 🧪 Debug

Use `onValueChange` or `onValueChangeDebounced` to track values dynamically.