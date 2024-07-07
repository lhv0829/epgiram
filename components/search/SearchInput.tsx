import { InputHTMLAttributes } from "react";
import SearchIcon from "@/public/icons/search.svg";

interface ISearchInputProps extends InputHTMLAttributes<HTMLInputElement> {}
export default function SearchInput(props: ISearchInputProps) {
  return (
    <div className="relative flex items-center w-full">
      <input
        type="text"
        className="py-6 h-20 w-full border-b border-0 border-blue-800 bg-blue-100 text-2xl"
        {...props}
      />
      <SearchIcon className="text-blue-800 absolute right-1" />
    </div>
  );
}
