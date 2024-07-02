import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Create() {
  return (
    <form className=" w-[640px]">
      <div className="mb-4">
        <label htmlFor="content" className="block font-medium mb-1">
          내용 <span className="text-red-500">*</span>
        </label>
        <textarea
          id="content"
          className="w-full p-3 border rounded resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="500자 이내로 입력해주세요."
          rows={5}
        ></textarea>
      </div>
      <div className="mb-4">
        <label htmlFor="author" className="block font-medium mb-1">
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
        <Input
          type="text"
          id="authorName"
          className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="저자 이름 입력"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="source" className="block font-medium mb-1">
          출처
        </label>
        <Input
          type="text"
          id="sourceTitle"
          className="w-full p-3 border rounded mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="출처 제목 입력"
        />
        <Input
          type="text"
          id="sourceURL"
          className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="URL (ex. https://www.website.com)"
        />
      </div>
      {/**태그 입력 전 */}
      {true && (
        <div className="mb-4">
          <label htmlFor="tags" className="block font-medium mb-1">
            태그
          </label>
          <Input
            type="text"
            id="tags"
            className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="입력하여 태그 검색 (최대 10자)"
          />
        </div>
      )}
      {/**태그 입력 후 */}
      {false && (
        <div className="mb-4 flex">
          <Input
            type="text"
            id="tags"
            className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="입력하여 태그 검색 (최대 10자)"
          />
          <Button>완료</Button>
        </div>
      )}
    </form>
  );
}
