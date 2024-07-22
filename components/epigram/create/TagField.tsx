import TextField from "@/components/core/input/textField";
import { Dispatch, SetStateAction, useState } from "react";

export default function TagField({
  errors,
  setTags,
}: {
  errors: string[] | undefined;
  setTags: Dispatch<SetStateAction<string[]>>;
}) {
  const [isComposing, setIsComposing] = useState<boolean>(false);

  const [tag, setTag] = useState<string>("");

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!isComposing && e.key === "Enter" && tag.trim() !== "") {
      e.preventDefault();
      setTags((prevTags: string[]) => {
        const updateTags = [...prevTags];
        if (!updateTags.includes(tag)) {
          updateTags.push(tag);
        }
        return updateTags;
      });
      setTag("");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTag(e.target.value);
  };
  const handleCompositionStart = () => {
    setIsComposing(true);
  };

  const handleCompositionEnd = () => {
    setIsComposing(false);
  };

  return (
    <div>
      <TextField
        type="text"
        id="tags"
        value={tag}
        className="textField-outline"
        errors={[]}
        placeholder="입력하여 태그 검색 (최대 10자)"
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        onCompositionStart={handleCompositionStart}
        onCompositionEnd={handleCompositionEnd}
      />
      {errors?.map((error, index) => (
        <span key={index}>{error}</span>
      ))}
    </div>
  );
}
