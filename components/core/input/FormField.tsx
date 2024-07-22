// FormField.tsx
import React from "react";
import TextField from "./textField";

interface FormFieldProps {
  label: string;
  name: string;
  className?: string;
  placeholder: string;
  type?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  errors?: string[];
}

const FormField: React.FC<FormFieldProps> = ({
  label,
  name,
  className = "textField-solid",
  placeholder,
  type = "text",
  onChange,
  onBlur,
  errors = [],
}) => {
  const error = errors.length > 0 ? true : false;
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <TextField
        className={className}
        onChange={onChange}
        onBlur={onBlur}
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
