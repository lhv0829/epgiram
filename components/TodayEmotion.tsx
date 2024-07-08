import HeartFace from "@/public/emojis/HeartFace";
import { ToggleGroup, ToggleGroupItem } from "./ui/toggle-group";
import SmilingFace from "@/public/emojis/Sad";
import Thinking from "@/public/emojis/Thinking";
import Sad from "@/public/emojis/Sad";
import Anger from "@/public/emojis/Anger";

const TodayEmotion = () => {
  return (
    <ToggleGroup type="single" className="flex gap-8">
      <ToggleGroupItem value="moved" border="moved">
        <HeartFace />
      </ToggleGroupItem>
      <ToggleGroupItem value="happy" border="happy">
        <SmilingFace />
      </ToggleGroupItem>
      <ToggleGroupItem value="thinking" border="thinking">
        <Thinking />
      </ToggleGroupItem>
      <ToggleGroupItem value="sad" border="sad">
        <Sad />
      </ToggleGroupItem>
      <ToggleGroupItem value="anger" border="anger">
        <Anger />
      </ToggleGroupItem>
    </ToggleGroup>
  );
};

export default TodayEmotion;
