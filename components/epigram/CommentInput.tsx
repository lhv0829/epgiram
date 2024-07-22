import { SetStateAction } from "react";
import TextArea from "../core/input/textArea";
import { MainButton } from "../ui/MainButton";
import { Switch } from "../ui/switch";

interface CommentInputProps {
  editingContent: string;
  setEditingContent: (value: SetStateAction<string>) => void;
  handleClickCancel: () => void;
  handleClickSave: () => void;
}

const CommentInput = ({ editingContent, setEditingContent, handleClickCancel, handleClickSave }: CommentInputProps) => {
  return (
    <div className="flex items-start gap-4 px-6 py-[35px] bg-background border-t border-line-#CFDBEA w-full">
      <div className="w-12 h-12 bg-gray-300 rounded-full overflow-hidden flex-shrink-0"></div>
      <div className="grow flex flex-col gap-4">
        <TextArea value={editingContent} onChange={(e) => setEditingContent(e.target.value)} className="rounded-lg" />
        <div className="flex justify-between items-center">
          <div className="flex gap-2">
            <p className="text-gray-400 text-lg font-semibold font-pre">공개</p>
            <Switch />
          </div>
          <div className="flex gap-2">
            <MainButton size="sm" radius="lg" text="lg" onClick={handleClickCancel}>
              취소
            </MainButton>
            <MainButton size="sm" radius="lg" text="lg" onClick={handleClickSave}>
              저장
            </MainButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentInput;
