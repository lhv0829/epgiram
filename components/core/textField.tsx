import { InputHTMLAttributes } from "react";
import { Input } from "../ui/input";

interface ITextFIeldProps extends InputHTMLAttributes<HTMLInputElement> {}

export default function TextField(props: ITextFIeldProps) {
  return (
    <div className="text-right">
      <Input {...props} className={props.className} />
      <span>error</span>
    </div>
  );
}
