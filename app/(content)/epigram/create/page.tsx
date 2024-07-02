import TextArea from "@/components/core/input/textArea";
import TextField from "@/components/core/input/textField";
import { Button } from "@/components/ui/button";

export default function Create() {
  return (
    <form className=" w-[640px]">
      <div className="flex flex-col mb-[56px] gap-6">
        <label htmlFor="content" className="text-2xl font-semibold">
          내용 <span className="text-red-500">*</span>
        </label>
        <TextArea
          error
          className="textarea-solid"
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
          className="textField-outline"
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
            className="textField-outline"
            placeholder="출처 제목 입력"
          />
          <TextField
            type="text"
            id="sourceURL"
            className="textField-outline"
            placeholder="URL (ex. https://www.website.com)"
          />
        </div>
      </div>
      {/**태그 입력 전 */}
      {true && (
        <div className="flex flex-col mb-4 gap-6">
          <label htmlFor="tags" className="text-2xl font-semibold">
            태그
          </label>
          <TextField
            type="text"
            id="tags"
            error={true}
            className="textField-outline"
            placeholder="입력하여 태그 검색 (최대 10자)"
          />
        </div>
      )}
      {/**태그 입력 후 */}
      {false && (
        <div className="flex mb-4 gap-6">
          <TextField
            type="text"
            id="tags"
            className="textField-outline"
            placeholder="입력하여 태그 검색 (최대 10자)"
          />
          <Button>완료</Button>
        </div>
      )}
    </form>
  );
}
