"use client";

import { useEffect, useState } from "react";
import CommentInput from "./CommentInput";
import { Comment as CommentType, PatchCommentData, User } from "@/lib/type";
import Image from "next/image";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { patchComment } from "@/lib/fetch";
import DeleteCommentDialog from "./DeleteCommentDialog";
import { format } from "date-fns";

interface ICommentProps {
  commentData: CommentType;
  epigramId: number;
  userId?: number;
}

export default function Comment({ commentData, epigramId, userId = undefined }: ICommentProps) {
  const queryClient = useQueryClient();
  const [isEditable, setIsEditable] = useState(false);
  const [editingContent, setEditingContent] = useState(commentData.content);
  const [isPrivate, setIsPrivate] = useState(commentData.isPrivate);
  const { id: commentId } = commentData;

  const userData = queryClient.getQueryData<User>(["user"]);

  const { mutate: modifyComment } = useMutation({
    mutationFn: async (commentData: PatchCommentData) => patchComment({ commentData, commentId }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["epigramComment", epigramId] });
    },
  });

  const handleClickEdit = () => {
    setIsEditable(true);
  };
  const handleClickCancel = () => {
    setEditingContent(commentData.content);
    setIsEditable(false);
  };
  const handleClickSave = () => {
    const modifiedData = {
      isPrivate: !isPrivate,
      content: editingContent,
    };
    modifyComment(modifiedData);
    setIsEditable(false);
  };

  return (
    <div className="flex items-start gap-4 px-6 py-[35px] bg-background border-t border-line-#CFDBEA w-full">
      {!isEditable && (
        <>
          <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
            <Image src={commentData.writer.image || ""} alt="유저 프로필 이미지" />
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between mb-4">
              <div className="flex gap-2">
                <span className="text-black-300">{commentData.writer.nickname}</span>
                <span className="text-black-300">{format(commentData.createdAt, "yyyy-MM-dd hh:mm:ss")}</span>
              </div>
              {userId === commentData.writer.id && (
                <div className="flex gap-4 text-lg">
                  <span onClick={handleClickEdit} className="underline text-gray-600 cursor-pointer">
                    수정
                  </span>
                  <DeleteCommentDialog commentId={commentData.id} epigramId={epigramId} />
                </div>
              )}
            </div>
            <p className="text-black-700 mt-2 text-xl">{commentData.content}</p>
          </div>
        </>
      )}
      {isEditable && (
        <CommentInput
          editingContent={editingContent}
          setEditingContent={setEditingContent}
          handleClickSave={handleClickSave}
          handleClickCancel={handleClickCancel}
          type="edit"
          profileImage={userData?.image}
          isPrivate={isPrivate}
          setIsPrivate={setIsPrivate}
        />
      )}
    </div>
  );
}
