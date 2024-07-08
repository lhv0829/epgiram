import { InputHTMLAttributes, forwardRef } from "react";

interface ITextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

const TextField = forwardRef<HTMLInputElement, ITextFieldProps>(
  ({ error, ...props }, ref) => {
    return (
      <div className="flex flex-col flex-grow text-end">
        <input
          {...props}
          ref={ref}
          className={`${props.className || ""} ${error ? "error" : ""}`}
        />
        <span className={` ${error ? "text-error visible" : "hidden"}`}>
          error
        </span>
      </div>
    );
  }
);

TextField.displayName = "TextField";

export default TextField;
