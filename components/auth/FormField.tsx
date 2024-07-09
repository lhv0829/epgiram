// FormField.tsx
import React from "react";
import TextField from "../core/input/textField";

interface FormFieldProps {
  label: string;
  name: string;
  placeholder: string;
  type?: string;
  errors?: string[];
}

const FormField: React.FC<FormFieldProps> = ({
  label,
  name,
  placeholder,
  type = "text",
  errors = [],
}) => {
  const error = errors.length > 0 ? true : false;
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <TextField
        className="textField-solid"
        name={name}
        placeholder={placeholder}
        type={type}
        error={error}
        errors={errors}
      />
    </>
  );
};

export default FormField;
