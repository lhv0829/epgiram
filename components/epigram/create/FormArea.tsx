import TextArea from "@/components/core/input/textArea";

interface IFormAreaProps {
  className?: string;
  rows?: number;
  placeholder?: string;
  name: string;
  title: string;
  required: boolean;
  errorMessage?: string[];
}

export default function FormArea(props: IFormAreaProps) {
  return (
    <>
      <label htmlFor={props.name} className="text-2xl font-semibold">
        {props.title}
        {props.required && <span className="text-red-500">*</span>}
      </label>
      <div className="text-end">
        <TextArea
          className={props.className || "textarea-solid w-full"}
          rows={props.rows}
          placeholder={props.placeholder}
          name={props.name}
        />
        <span className="text-red-500">{props.errorMessage}</span>
      </div>
    </>
  );
}
