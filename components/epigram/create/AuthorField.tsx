import { InputHTMLAttributes } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import TextField from "@/components/core/input/textField";
import { Label } from "@/components/ui/label";

interface IAuthorFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  handleRadioChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  author: string;
  authorType: string;
  error: boolean;
  errors?: string[];
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function AuthorField({
  handleRadioChange,
  author,
  authorType,
  error,
  errors = [],
  onChange,
}: IAuthorFieldProps) {
  return (
    <>
      <label htmlFor="author" className="text-2xl font-semibold">
        저자 <span className="text-red-500">*</span>
      </label>
      <RadioGroup
        defaultValue="default"
        className="flex items-center space-x-2 [&_label]:text-xl"
        name="authorType"
        onChange={handleRadioChange}
      >
        <RadioGroupItem value="default" id="default" />
        <Label htmlFor="default">직접 입력</Label>
        <RadioGroupItem value="알 수 없음" id="unknown" />
        <Label htmlFor="unknown">알 수 없음</Label>
        <RadioGroupItem value="나다" id="me" />
        <Label htmlFor="me">본인</Label>
      </RadioGroup>
      <div className="text-end">
        <TextField
          type="text"
          id="authorName"
          className={`textField-outline w-full ${
            authorType !== "default" ? "bg-gray-100 cursor-not-allowed" : ""
          }`}
          placeholder="저자 이름 입력"
          name="author"
          value={author}
          onChange={onChange}
          error={error}
          errors={errors}
          readOnly={authorType !== "default"}
        />
        {/* {errors?.map((error, index) => (
          <span key={index} className="text-red-500">
            {error}
          </span>
        ))} */}
      </div>
    </>
  );
}
