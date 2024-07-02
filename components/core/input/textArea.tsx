import { TextareaHTMLAttributes } from "react";

interface ITextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: boolean;
}

export default function TextArea({ error, ...props }: ITextAreaProps) {
  return (
    <div className="flex flex-col text-right">
      <textarea
        {...props}
        className={`${error ? "error" : ""} ${props.className || ""}`}
      ></textarea>
      <span className={` ${error ? "text-error visible" : "hidden"}`}>
        error
      </span>
    </div>
  );
}
