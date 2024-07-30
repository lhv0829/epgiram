import { Emoji, EmotionData } from "@/lib/type";
import Anger from "@/public/emojis/Anger";
import HeartFace from "@/public/emojis/HeartFace";
import Sad from "@/public/emojis/Sad";
import SmilingFace from "@/public/emojis/SmilingFace";
import Thinking from "@/public/emojis/Thinking";
import { Chart } from "primereact/chart";
import { ReactNode } from "react";
interface EmotionChartProps {
  emotionData: EmotionData[];
}

const EMOTION_CHAR = {
  MOVED: "감동",
  HAPPY: "기쁨",
  WORRIED: "고민",
  SAD: "슬픔",
  ANGRY: "분노",
};

const DAY_EMOJI = {
  MOVED: <HeartFace width={36} height={36} />,
  HAPPY: <SmilingFace width={36} height={36} />,
  WORRIED: <Thinking width={36} height={36} />,
  SAD: <Sad width={36} height={36} />,
  ANGRY: <Anger width={36} height={36} />,
};

const chartColor = ["bg-illust-green", "bg-illust-yellow", "bg-sub-gray-1", "bg-sub-gray-2", "bg-sub-gray-3"];

const EmotionChart = (props: EmotionChartProps) => {
  const emotionObject = props.emotionData?.reduce((acc, emotion) => {
    acc[emotion.emotion] = (acc[emotion.emotion] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);
  const sortedEmotions = Object.entries(emotionObject).sort(([, a], [, b]) => b - a);
  const sortedEmotionObject = Object.fromEntries(sortedEmotions);
  const totalEmotion = props.emotionData.length;
  const emotionRank = Object.keys(sortedEmotionObject);

  const mostFrequent = Object.keys(emotionObject).reduce((a, b) => (emotionObject[a] > emotionObject[b] ? a : b)) as keyof typeof DAY_EMOJI;
  const data = {
    datasets: [
      {
        data: Object.values(sortedEmotionObject),
        backgroundColor: ["rgba(72, 187, 152, 1)", "rgba(251, 200, 91, 1)", "rgba(199, 209, 224, 1)", "rgba(227, 233, 241, 1)", "rgba(239, 243, 248, 1)"],
        hoverOffset: 4,
        spacing: 4,
        borderRadius: 50,
        cutout: "85%",
      },
    ],
  };
  return (
    <div className="flex justify-between items-center px-28 py-6 w-[640px] border rounded-lg border-blue-200">
      <div className="relative w-fit h-fit">
        <div className="absolute flex flex-col items-center justify-center gap-2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          {DAY_EMOJI[mostFrequent]}
          <p className="font-pre text-lg font-bold text-black-600">{EMOTION_CHAR[mostFrequent]}</p>
        </div>
        <Chart type="doughnut" data={data} className="w-64 h-64" />
      </div>
      <div className="flex flex-col gap-3.5">
        {emotionRank.map((emotion, index) => {
          const emotionEmoji = emotion as keyof typeof DAY_EMOJI;
          return (
            <div className="flex gap-4" key={emotion}>
              <div className={`w-4 h-4 rounded-sm ${chartColor[index]}`} />
              {DAY_EMOJI[emotionEmoji]}
              <p className="text-black-600 font-pre text-xl font-semibold">{Math.floor((sortedEmotionObject[emotionEmoji] / totalEmotion) * 100)}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EmotionChart;
