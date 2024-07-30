import { PopoverTrigger } from "@radix-ui/react-popover";
import TodayEmotion from "../TodayEmotion";
import { Popover, PopoverContent } from "../ui/popover";
import { ReactNode } from "react";
interface ModifyEmotionProps {
  children: ReactNode;
  value: string;
  onChange: (value: string) => void;
}

const ModifyEmotion = (props: ModifyEmotionProps) => {
  return (
    <Popover>
      <PopoverTrigger>{props.children}</PopoverTrigger>
      <PopoverContent className="p-4 w-fit h-fit bg-white border-0">
        <TodayEmotion value={props.value} onChange={props.onChange} />
      </PopoverContent>
    </Popover>
  );
};

export default ModifyEmotion;
