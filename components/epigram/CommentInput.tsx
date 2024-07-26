import { SetStateAction } from "react";
import TextArea from "../core/input/textArea";
import { MainButton } from "../ui/MainButton";
import { Switch } from "../ui/switch";
import Image from "next/image";

interface CommentInputProps {
  editingContent: string;
  setEditingContent: (value: SetStateAction<string>) => void;
  handleClickCancel?: () => void;
  handleClickSave: () => void;
  type: "new" | "edit";
  profileImage?: string | "";
  isPrivate: boolean;
  setIsPrivate: (value: SetStateAction<boolean>) => void;
}

const CommentInput = (props: CommentInputProps) => {
  return (
    <div className="flex items-start gap-4 px-6 py-[35px] bg-background w-full">
      <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
        <Image src={props.profileImage || ""} alt="유저 프로필 이미지" />
      </div>
      <div className="grow flex flex-col gap-4">
        <TextArea value={props.editingContent} onChange={(e) => props.setEditingContent(e.target.value)} className="rounded-lg" />
        <div className="flex justify-between items-center">
          <div className="flex gap-2">
            <p className="text-gray-400 text-lg font-semibold font-pre">공개</p>
            <Switch defaultChecked checked={props.isPrivate} onCheckedChange={(e) => props.setIsPrivate(e)} />
          </div>
          <div className="flex gap-2">
            {props.type === "edit" && (
              <MainButton size="sm" radius="lg" text="lg" onClick={props.handleClickCancel}>
                취소
              </MainButton>
            )}
            <MainButton size="sm" radius="lg" text="lg" onClick={props.handleClickSave}>
              저장
            </MainButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentInput;
