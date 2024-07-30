import HeartFace from "@/public/emojis/HeartFace";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import SmilingFace from "@/public/emojis/SmilingFace";
import Thinking from "@/public/emojis/Thinking";
import Sad from "@/public/emojis/Sad";
import Anger from "@/public/emojis/Anger";

interface EmotionSelectProps {
  value: string;
  onChange: (value: string) => void;
}
const EmotionSelect = (props: EmotionSelectProps) => {
  return (
    <Select value={props.value} onValueChange={(value: string) => props.onChange(value)}>
      <SelectTrigger className="mx-auto">
        <SelectValue placeholder="필터: 없음" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup className="w-fit flex p-4 gap-2">
          <SelectItem value="MOVED" className="p-2 rounded-lg bg-[#AFBACD26] bg-opacity-15 hover:border-[3px] hover:p-[5px] hover:border-illust-yellow">
            <HeartFace />
          </SelectItem>
          <SelectItem value="HAPPY" className="p-2 rounded-lg bg-[#AFBACD26] bg-opacity-15 hover:border-[3px] hover:p-[5px] hover:border-illust-green">
            <SmilingFace />
          </SelectItem>
          <SelectItem value="WORRIED" className="p-2 rounded-lg bg-[#AFBACD26] bg-opacity-15 hover:border-[3px] hover:p-[5px] hover:border-illust-purple">
            <Thinking />
          </SelectItem>
          <SelectItem value="SAD" className="p-2 rounded-lg bg-[#AFBACD26] bg-opacity-15 hover:border-[3px] hover:p-[5px] hover:border-illust-blue">
            <Sad />
          </SelectItem>
          <SelectItem value="ANGRY" className="p-2 rounded-lg bg-[#AFBACD26] bg-opacity-15 hover:border-[3px] hover:p-[5px] hover:border-illust-red">
            <Anger />
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default EmotionSelect;
