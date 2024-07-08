import HeartFace from "@/public/emojis/HeartFace";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import SmilingFace from "@/public/emojis/SmilingFace";
import Thinking from "@/public/emojis/Thinking";
import Sad from "@/public/emojis/Sad";
import Anger from "@/public/emojis/Anger";

const EmotionSelect = () => {
  return (
    <Select>
      <SelectTrigger className="mx-auto">
        <SelectValue placeholder="필터: 없음" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup className="w-fit flex p-4 gap-2">
          <SelectItem value="heart" className="p-2 rounded-lg bg-[#AFBACD26] bg-opacity-15 hover:border-[3px] hover:p-[5px] hover:border-illust-yellow">
            <HeartFace />
          </SelectItem>
          <SelectItem value="smile" className="p-2 rounded-lg bg-[#AFBACD26] bg-opacity-15 hover:border-[3px] hover:p-[5px] hover:border-illust-green">
            <SmilingFace />
          </SelectItem>
          <SelectItem value="think" className="p-2 rounded-lg bg-[#AFBACD26] bg-opacity-15 hover:border-[3px] hover:p-[5px] hover:border-illust-purple">
            <Thinking />
          </SelectItem>
          <SelectItem value="sand" className="p-2 rounded-lg bg-[#AFBACD26] bg-opacity-15 hover:border-[3px] hover:p-[5px] hover:border-illust-blue">
            <Sad />
          </SelectItem>
          <SelectItem value="anger" className="p-2 rounded-lg bg-[#AFBACD26] bg-opacity-15 hover:border-[3px] hover:p-[5px] hover:border-illust-red">
            <Anger />
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default EmotionSelect;
