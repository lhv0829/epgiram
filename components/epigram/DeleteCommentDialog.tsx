import { ReactNode, useState } from "react";
import { Dialog, DialogClose, DialogContent, DialogOverlay, DialogPortal, DialogTrigger } from "../ui/dialog";
import { Button } from "../ui/button";
import { deleteComment } from "@/lib/fetch";
import { useMutation, useQueryClient } from "@tanstack/react-query";

interface DeleteCommentDialogProps {
  commentId: number;
  epigramId: number;
}
const DeleteCommentDialog = ({ commentId, epigramId }: DeleteCommentDialogProps) => {
  const queryClient = useQueryClient();
  const [deletion, setDeletion] = useState(false);
  const { mutate: removeComment } = useMutation({
    mutationFn: async (commentId: number) => deleteComment(commentId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["epigramComments", epigramId] });
    },
  });
  const handleClickDelete = () => {
    removeComment(commentId);
    setDeletion(true);
  };
  return (
    <Dialog>
      <DialogTrigger>
        <span className="underline text-red-500 cursor-pointer">삭제</span>
      </DialogTrigger>
      <DialogPortal>
        <DialogOverlay className="w-full h-full bg-black-950 bg-opacity-60" />
        {deletion ? (
          <DialogContent className="w-[400px] h-56 px-[38px] py-[30px] flex items-center justify-center font-pre">
            <div className="flex flex-col gap-10 items-center">
              <p className="text-2xl font-semibold text-black-700">댓글이 삭제되었어요.</p>
              <DialogClose asChild>
                <Button className="text-white bg-error font-semibold text-xl w-[286px] h-16 px-4">확인</Button>
              </DialogClose>
            </div>
          </DialogContent>
        ) : (
          <DialogContent className="w-[400px] h-56 px-[38px] py-[30px] flex items-center justify-center font-pre">
            <div className="flex flex-col gap-10 items-center">
              <p className="text-2xl font-semibold text-black-700">댓글을 삭제하시겠어요?</p>
              <div className="flex gap-4">
                <DialogClose asChild>
                  <Button className="bg-blue-200 text-black-700 text-xl w-[136px] h-14 px-4">취소</Button>
                </DialogClose>
                <Button className="text-white bg-error font-semibold text-xl w-[136px] h-14 px-4" onClick={handleClickDelete}>
                  확인
                </Button>
              </div>
            </div>
          </DialogContent>
        )}
      </DialogPortal>
    </Dialog>
  );
};

export default DeleteCommentDialog;
