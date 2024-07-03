// textfield.tsx
import { InputHTMLAttributes } from "react";

interface ITextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

export default function TextField({ error, ...props }: ITextFieldProps) {
  return (
    <div className="flex flex-col text-end">
      <input
        {...props}
        className={` ${error ? "error" : ""} ${props.className || ""}`}
      />
      <span className={` ${error ? "text-error visible" : "hidden"}`}>
        error
      </span>
    </div>
  );
}
