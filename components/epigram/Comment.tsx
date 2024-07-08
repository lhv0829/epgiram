import React from "react";

interface ICommentProps {
  profileImage?: string;
  username: string;
  timeAgo: string;
  content: string;
  me?: boolean;
}

export default function Comment({
  username,
  timeAgo,
  content,
  me,
}: ICommentProps) {
  return (
    <div className="flex items-start px-6 py-[35px] bg-background border-t border-line-#CFDBEA max-w-[640px]">
      <div className="w-12 h-12 bg-gray-300 rounded-full overflow-hidden flex-shrink-0">
        <div className="w-full h-full bg-gray-300 rounded-full"></div>
      </div>
      <div className="ml-4 flex-1">
        <div className="flex items-center justify-between mb-4">
          <div className="flex gap-2">
            <span className="text-black-300">{username}</span>
            <span className="text-black-300">{timeAgo}</span>
          </div>
          {me && (
            <div className="flex gap-4 text-lg">
              <span className="underline text-gray-600 cursor-pointer">
                수정
              </span>
              <span className="underline text-red-500 cursor-pointer">
                삭제
              </span>
            </div>
          )}
        </div>
        <p className="text-black-700 mt-2 text-xl">{content}</p>
      </div>
    </div>
  );
}
