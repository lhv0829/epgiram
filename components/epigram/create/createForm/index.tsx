"use client";

import { useState } from "react";
import { useFormState } from "react-dom";
import TextField from "@/components/core/input/textField";
import { useFormData } from "@/contexts/FormProvider";
import { formAction } from "./actions";
import SearchWordChip from "@/components/SearchWordChip";
import TagField from "../TagField";
import FormArea from "@/components/epigram/create/FormArea";
import AuthorField from "../AuthorField";

export default function CreateForm() {
  const [tags, setTags] = useState<string[]>([]);
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
          <FormArea
            name="content"
            title="내용"
            rows={5}
            required={true}
            placeholder="500자 이내로 입력해주세요."
            errorMessage={state?.fieldErrors?.content}
          />
        </div>
        <div className="flex flex-col mb-[56px] gap-6">
          <AuthorField
            author={author}
            setAuthor={setAuthor}
            authorType={authorType}
            handleRadioChange={handleRadioChange}
            errorMessage={state?.fieldErrors.author}
          />
        </div>
        <div className="flex flex-col mb-[56px] gap-6">
          <label htmlFor="source" className="text-2xl font-semibold">
            출처
          </label>
          <div className="flex flex-col gap-4">
            <TextField
              type="text"
              id="referenceTitle"
              className="textField-outline w-full"
              placeholder="출처 제목 입력"
              name="referenceTitle"
              error={state?.fieldErrors.referenceTitle === null}
              errors={state?.fieldErrors.referenceTitle}
            />
            <TextField
              type="text"
              id="referenceUrl"
              className="textField-outline w-full"
              placeholder="URL (ex. https://www.website.com)"
              name="referenceUrl"
              error={state?.fieldErrors.referenceUrl === null}
              errors={state?.fieldErrors.referenceUrl}
            />
          </div>
        </div>
        <div className="flex flex-col mb-4 gap-6">
          <label htmlFor="tags" className="text-2xl font-semibold">
            태그
          </label>
          <TagField errors={state?.fieldErrors?.tags} setTags={setTags} />
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
