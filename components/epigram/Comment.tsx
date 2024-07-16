"use client";

import { useState } from "react";
import TextArea from "../core/input/textArea";
import { MainButton } from "../ui/MainButton";
import { Switch } from "../ui/switch";

interface ICommentProps {
  profileImage?: string;
  username: string;
  timeAgo: string;
  content: string;
  me?: boolean;
}

export default function Comment({ username, timeAgo, content, me }: ICommentProps) {
  const [isEditable, setIsEditable] = useState(false);
  const [editingContent, setEditingContent] = useState(content);
  const [comment, setComment] = useState(content);
  const handleClickEdit = () => {
    setIsEditable(true);
  };
  const handleClickCancel = () => {
    setEditingContent(comment);
    setIsEditable(false);
  };
  const handleClickSave = () => {
    setComment(editingContent);
    setIsEditable(false);
  };
  return (
    <div className="flex items-start gap-4 px-6 py-[35px] bg-background border-t border-line-#CFDBEA w-full">
      <div className="w-12 h-12 bg-gray-300 rounded-full overflow-hidden flex-shrink-0">
        {/* <div className="w-full h-full bg-gray-300 rounded-full"></div> */}
      </div>
      {!isEditable && (
        <div className="flex-1">
          <div className="flex items-center justify-between mb-4">
            <div className="flex gap-2">
              <span className="text-black-300">{username}</span>
              <span className="text-black-300">{timeAgo}</span>
            </div>
            {me && (
              <div className="flex gap-4 text-lg">
                <span onClick={handleClickEdit} className="underline text-gray-600 cursor-pointer">
                  수정
                </span>
                <span className="underline text-red-500 cursor-pointer">삭제</span>
              </div>
            )}
          </div>
          <p className="text-black-700 mt-2 text-xl">{comment}</p>
        </div>
      )}
      {isEditable && (
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
      )}
    </div>
  );
}
