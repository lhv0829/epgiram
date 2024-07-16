"use client";

import { useState } from "react";
import { useFormState } from "react-dom";
import TextArea from "@/components/core/input/textArea";
import TextField from "@/components/core/input/textField";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useFormData } from "@/contexts/FormProvider";
import { formAction } from "./actions";
import SearchWordChip from "@/components/SearchWordChip";
import TagField from "../TagField";

export default function CreateForm() {
  const [tags, setTags] = useState<string[]>([
    "이건 태그가 아니야",
    "그럼 뭔데?",
    "나 자신",
    "뭐래는고냐",
  ]);
  const [tag, setTag] = useState<string>("");
  const [authorType, setAuthorType] = useState<string>("default");
  const [author, setAuthor] = useState<string>("");
  const { formRef } = useFormData();

  const [state, dispatch] = useFormState(formAction, null);

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedValue = e.target.value;
    setAuthorType(selectedValue);
    if (selectedValue !== "default") {
      setAuthor(selectedValue);
    } else {
      setAuthor("");
    }
  };

  return (
    <div className="w-[640px] mt-14">
      <form action={dispatch} ref={formRef}>
        <div className="flex flex-col mb-[56px] gap-6">
          <label htmlFor="content" className="text-2xl font-semibold">
            내용 <span className="text-red-500">*</span>
          </label>
          <TextArea
            className="textarea-solid w-full"
            rows={5}
            placeholder="500자 이내로 입력해주세요."
            name="content"
          />
        </div>
        <div className="flex flex-col mb-[56px] gap-6">
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
          <TextField
            type="text"
            id="authorName"
            className={`textField-outline w-full ${
              authorType !== "default" ? "bg-gray-100 cursor-not-allowed" : ""
            }`}
            placeholder="저자 이름 입력"
            name="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            error={false}
            readOnly={authorType !== "default"}
          />
        </div>
        <div className="flex flex-col mb-[56px] gap-6">
          <label htmlFor="source" className="text-2xl font-semibold">
            출처
          </label>
          <div className="flex flex-col gap-4">
            <TextField
              type="text"
              id="sourceTitle"
              className="textField-outline w-full"
              placeholder="출처 제목 입력"
              name="sourceTitle"
              errors={[]}
            />
            <TextField
              type="text"
              id="sourceURL"
              className="textField-outline w-full"
              placeholder="URL (ex. https://www.website.com)"
              name="sourceURL"
              errors={[]}
            />
          </div>
        </div>
        <div className="flex flex-col mb-4 gap-6">
          <label htmlFor="tags" className="text-2xl font-semibold">
            태그
          </label>
          <TagField setTags={setTags} />
          <div className="flex gap-4 flex-wrap">
            <input
              type="text"
              className="hidden"
              name="tags"
              value={tags}
              readOnly
            />
            {tags.map((tag, index) => (
              <SearchWordChip key={index}>{tag}</SearchWordChip>
            ))}
          </div>
        </div>
      </form>
    </div>
  );
}
