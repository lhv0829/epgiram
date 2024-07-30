import DeleteEpigramDialog from "@/components/epigram/DeleteEpigramDialog";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { MoreHorizontal } from "lucide-react";
import Link from "next/link";

interface AdditionalMenuProps {
  epigramId: number;
  handleClickDelete: () => void;
}

const AdditionalMenu = (props: AdditionalMenuProps) => {
  return (
    <Popover>
      <PopoverTrigger>
        <MoreHorizontal className="w-8 h-8" />
      </PopoverTrigger>
      <PopoverContent className="bg-background font-pre">
        <div className="flex flex-col justify-center items-center">
          <Link href={`/epigrams/${props.epigramId}/edit`}>
            <Button className="text-lg">수정</Button>
          </Link>
          <DeleteEpigramDialog handleDelete={props.handleClickDelete} />
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default AdditionalMenu;
