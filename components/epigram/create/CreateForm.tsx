"use client";

import { useEffect, useRef, useState } from "react";
import TextArea from "@/components/core/input/TextArea";
import TextField from "@/components/core/input/TextField";
import { Button } from "@/components/ui/button";

export default function CreateForm() {
  const [isTagFocused, setIsTagFocused] = useState(false);
  const [tags, setTags] = useState<[string, string, string]>([
    "우울",
    "슬픔",
    "절망",
  ]);
  const tagInputRef = useRef<HTMLDivElement>(null);

  //태그 입력 이벤트
  const handleTagList = () => {
    //태그 입력 중 , or enter로 구분하여
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        tagInputRef.current &&
        !tagInputRef.current.contains(e.target as Node)
      ) {
        setIsTagFocused(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="w-[640px] mt-14">
      <form>
        <div className="flex flex-col mb-[56px] gap-6">
          <label htmlFor="content" className="text-2xl font-semibold">
            내용 <span className="text-red-500">*</span>
          </label>
          <TextArea
            error
            className="textarea-solid w-full"
            rows={5}
            placeholder="500자 이내로 입력해주세요."
          />
        </div>
        <div className="flex flex-col mb-[56px] gap-6">
          <label htmlFor="author" className="text-2xl font-semibold">
            저자 <span className="text-red-500">*</span>
          </label>
          <div className="flex items-center mb-2">
            <input type="radio" id="direct" name="author" className="mr-2" />
            <label htmlFor="direct" className="mr-4">
              직접 입력
            </label>
            <input type="radio" id="unknown" name="author" className="mr-2" />
            <label htmlFor="unknown" className="mr-4">
              알 수 없음
            </label>
            <input type="radio" id="self" name="author" className="mr-2" />
            <label htmlFor="self">본인</label>
          </div>
          <TextField
            type="text"
            id="authorName"
            className="textField-outline w-full"
            placeholder="저자 이름 입력"
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
            />
            <TextField
              type="text"
              id="sourceURL"
              className="textField-outline w-full"
              placeholder="URL (ex. https://www.website.com)"
            />
          </div>
        </div>
        <div className="flex flex-col mb-4 gap-6">
          <label htmlFor="tags" className="text-2xl font-semibold">
            태그
          </label>
          {!isTagFocused && (
            <TextField
              type="text"
              id="tags"
              value={[...tags]}
              className="textField-outline"
              placeholder="입력하여 태그 검색 (최대 10자)"
              onFocus={() => setIsTagFocused(true)}
            />
          )}
          {isTagFocused && (
            <div ref={tagInputRef} className="flex">
              <TextField
                type="text"
                className="flex-grow px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="입력하여 태그 검색 (최대 10자)"
              />
              <Button
                type="button"
                onClick={() => {
                  setIsTagFocused(false);
                }}
                className="ml-4 px-4 w-[162px] h-16 bg-gray-700 text-white rounded-xl font-semibold text-xl"
              >
                완료
              </Button>
            </div>
          )}
        </div>
      </form>
    </div>
  );
}
