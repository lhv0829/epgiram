import HeartFace from "@/public/emojis/HeartFace";
import { ToggleGroup, ToggleGroupItem } from "./ui/toggle-group";
import SmilingFace from "@/public/emojis/SmilingFace";
import Thinking from "@/public/emojis/Thinking";
import Sad from "@/public/emojis/Sad";
import Anger from "@/public/emojis/Anger";

const TodayEmotion = () => {
  return (
    <ToggleGroup type="single" className="flex gap-8">
      <div className="flex flex-col items-center gap-2">
        <ToggleGroupItem value="moved" border="moved">
          <HeartFace />
        </ToggleGroupItem>
        <span className="text-[#999] text-md lg:text-xl font-semibold font-pre">감동</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <ToggleGroupItem value="happy" border="happy">
          <SmilingFace />
        </ToggleGroupItem>
        <span className="text-[#999] text-md lg:text-xl font-semibold font-pre">기쁨</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <ToggleGroupItem value="thinking" border="thinking">
          <Thinking />
        </ToggleGroupItem>
        <span className="text-[#999] text-md lg:text-xl font-semibold font-pre">고민</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <ToggleGroupItem value="sad" border="sad">
          <Sad />
        </ToggleGroupItem>
        <span className="text-[#999] text-md lg:text-xl font-semibold font-pre">슬픔</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <ToggleGroupItem value="anger" border="anger">
          <Anger />
        </ToggleGroupItem>
        <span className="text-[#999] text-md lg:text-xl font-semibold font-pre">분노</span>
      </div>
    </ToggleGroup>
  );
};

export default TodayEmotion;
