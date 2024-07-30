import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";
import HeartFace from "@/public/emojis/HeartFace";
import { EmotionData } from "@/lib/type";
import SmilingFace from "@/public/emojis/SmilingFace";
import Thinking from "@/public/emojis/Thinking";
import Sad from "@/public/emojis/Sad";
import Anger from "@/public/emojis/Anger";
import ModifyEmotion from "./ModifyEmotion";

interface DayProps {
  date: Date;
  dayData: EmotionData[];
  onChange: (value: string) => void;
}

const DAY_EMOJI = {
  MOVED: <HeartFace width={36} height={36} />,
  HAPPY: <SmilingFace width={36} height={36} />,
  WORRIED: <Thinking width={36} height={36} />,
  SAD: <Sad width={36} height={36} />,
  ANGRY: <Anger width={36} height={36} />,
};

const Day = (props: DayProps) => {
  const today = new Date();
  const isToday =
    today.getUTCFullYear() === props.date.getUTCFullYear() &&
    today.getUTCMonth() === props.date.getUTCMonth() &&
    today.getUTCDate() === props.date.getUTCDate();
  const emotionObject = props.dayData?.reduce((acc, emotion) => {
    const emotionDate = new Date(emotion.createdAt);
    if (emotionDate.getUTCFullYear() === props.date.getUTCFullYear() && emotionDate.getUTCMonth() === props.date.getUTCMonth()) {
      acc[emotionDate.getUTCDate()] = emotion.emotion;
    }
    return acc;
  }, {} as Record<number, string>);

  const hasEmotion = emotionObject && props.date.getUTCDate() in emotionObject;
  return (
    <ModifyEmotion value={emotionObject[props.date.getUTCDate()] as keyof typeof DAY_EMOJI} onChange={props.onChange}>
      {hasEmotion ? (
        <div
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "h-11 w-11 md:h-[54px] md:w-[54px] lg:w-[91px] lg:h-[91px] flex flex-col p-0 text-gray-200 aria-selected:opacity-100",
            isToday && "border-[3px] rounded-[3px] border-illust-red lg:border-[6px]"
          )}
        >
          <p className="font-bold text-lg font-pre">{props.date.getUTCDate()}</p>
          {emotionObject !== undefined && DAY_EMOJI[emotionObject[props.date.getUTCDate()] as keyof typeof DAY_EMOJI]}
        </div>
      ) : (
        <div
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "h-11 w-11 md:h-[54px] md:w-[54px] lg:w-[91px] lg:h-[91px] p-0 text-gray-200 aria-selected:opacity-100",
            isToday && "border-[3px] rounded-[3px] border-illust-red lg:border-[6px]"
          )}
        >
          <p className="font-semibold text-2xl">{props.date.getUTCDate()}</p>
        </div>
      )}
    </ModifyEmotion>
  );
};

export default Day;
