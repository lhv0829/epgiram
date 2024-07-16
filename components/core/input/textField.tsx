import { InputHTMLAttributes, forwardRef } from "react";

interface ITextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  errors?: string[];
}

const TextField = forwardRef<HTMLInputElement, ITextFieldProps>(
  ({ error, errors, ...rest }, ref) => {
    return (
      <div className="flex flex-col flex-grow text-end">
        <input
          {...rest}
          ref={ref}
          className={`${rest.className || ""} ${error ? "error" : ""}`}
        />
        {errors?.map((message, key) => (
          <span
            key={key}
            className={` ${error ? "text-error visible" : "hidden"}`}
          >
            {message}
          </span>
        ))}
      </div>
    );
  }
);

TextField.displayName = "TextField";

export default TextField;
