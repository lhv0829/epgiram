import { ReactNode, useState } from "react";
import { Dialog, DialogClose, DialogContent, DialogOverlay, DialogPortal, DialogTrigger } from "../ui/dialog";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

interface DeleteEpigramDialogProps {
  handleDelete: () => void;
}
const DeleteEpigramDialog = ({ handleDelete }: DeleteEpigramDialogProps) => {
  const [deletion, setDeletion] = useState(false);
  const router = useRouter();

  const handleClickDelete = () => {
    setDeletion(true);
    handleDelete();
  };

  const handleClickConfirm = () => {
    router.push("/epigrams");
  };
  return (
    <Dialog>
      <DialogTrigger>
        <Button className="text-lg">삭제</Button>
      </DialogTrigger>
      <DialogPortal>
        <DialogOverlay className="w-full h-full bg-black-950 bg-opacity-60" />
        {deletion ? (
          <DialogContent className="w-[400px] h-56 px-[38px] py-[30px] flex items-center justify-center font-pre">
            <div className="flex flex-col gap-10 items-center">
              <p className="text-2xl font-semibold text-black-700">에피그램이 삭제되었어요.</p>
              <DialogClose asChild>
                <Button className="text-white bg-error font-semibold text-xl w-[286px] h-16 px-4" onClick={handleClickConfirm}>
                  확인
                </Button>
              </DialogClose>
            </div>
          </DialogContent>
        ) : (
          <DialogContent className="w-[400px] h-56 px-[38px] py-[30px] flex items-center justify-center font-pre">
            <div className="flex flex-col gap-10 items-center">
              <p className="text-2xl font-semibold text-black-700">에피그램을 삭제하시겠어요?</p>
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

export default DeleteEpigramDialog;
