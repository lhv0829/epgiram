"use client";

import { useState } from "react";
import { useFormState } from "react-dom";
import { formAction } from "./actions";
import TagField from "../TagField";
import TextField from "@/components/core/input/textField";
import SearchWordChip from "@/components/SearchWordChip";
import FormArea from "@/components/epigram/create/FormArea";
import AuthorField from "../AuthorField";
import CreateButton from "../CreateButton";

interface FormState {
  content: string;
  author: string;
  referenceTitle: string;
  referenceUrl: string;
}

interface FieldErrors {
  content?: string[] | undefined;
  author?: string[] | undefined;
  referenceTitle?: string[] | undefined;
  referenceUrl?: string[] | undefined;
  tags?: string[] | undefined;
}

const hasErrors = (fieldErrors: FieldErrors): { [key: string]: boolean } => {
  const errorFlags: { [key: string]: boolean } = {
    content: false,
    author: false,
    referenceTitle: false,
    referenceUrl: false,
    tags: false,
  };

  for (const [key, value] of Object.entries(fieldErrors)) {
    errorFlags[key] = Array.isArray(value) ? value.length > 0 : !!value;
  }

  return errorFlags;
};

export default function CreateForm() {
  const [tags, setTags] = useState<string[]>([]);
  const [authorType, setAuthorType] = useState<string>("default");
  const [formState, setFormState] = useState<FormState>({
    content: "",
    author: "",
    referenceTitle: "",
    referenceUrl: "",
  });

  const [state, dispatch] = useFormState(formAction, null);

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedValue = e.target.value;
    setAuthorType(selectedValue);
    setFormState((prevState) => ({
      ...prevState,
      author: selectedValue !== "default" ? selectedValue : "",
    }));
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const {
    content,
    author,
    referenceTitle,
    referenceUrl,
    tags: errorTags,
  } = hasErrors(state?.fieldErrors || {});

  const isFormSubmit =
    Object.values(formState).every(
      (state) => state !== undefined && state !== ""
    ) && tags.length > 0;

  return (
    <div className="w-[640px] mt-14">
      <form action={dispatch}>
        <div className="flex flex-col mb-[56px] gap-6">
          <FormArea
            name="content"
            title="내용"
            rows={5}
            required={true}
            placeholder="500자 이내로 입력해주세요."
            error={content}
            errorMessage={state?.fieldErrors?.content}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex flex-col mb-[56px] gap-6">
          <AuthorField
            author={formState.author}
            authorType={authorType}
            handleRadioChange={handleRadioChange}
            error={author}
            errors={state?.fieldErrors?.author}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex flex-col mb-[56px] gap-6">
          <label htmlFor="source" className="text-2xl font-semibold">
            출처
          </label>
          <div className="flex flex-col gap-4">
            <div>
              <TextField
                type="text"
                id="referenceTitle"
                className="textField-outline w-full"
                placeholder="출처 제목 입력"
                name="referenceTitle"
                error={referenceTitle}
                errors={state?.fieldErrors?.referenceTitle}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <TextField
                type="text"
                id="referenceUrl"
                className="textField-outline w-full"
                placeholder="URL (ex. https://www.website.com)"
                name="referenceUrl"
                error={referenceUrl}
                errors={state?.fieldErrors?.referenceUrl}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col mb-4 gap-6">
          <label htmlFor="tags" className="text-2xl font-semibold">
            태그
          </label>
          <TagField
            error={errorTags}
            errors={state?.fieldErrors?.tags}
            setTags={setTags}
          />
          <div className="flex gap-4 flex-wrap">
            <input
              type="text"
              className="hidden"
              name="tags"
              value={tags.join(",")}
              readOnly
            />
            {tags.map((tag, index) => (
              <SearchWordChip key={index}>{tag}</SearchWordChip>
            ))}
          </div>
          <CreateButton isFormSubmit={isFormSubmit}>작성 완료</CreateButton>
        </div>
      </form>
    </div>
  );
}
