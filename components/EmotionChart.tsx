import Anger from "@/public/emojis/Anger";
import HeartFace from "@/public/emojis/HeartFace";
import Sad from "@/public/emojis/Sad";
import SmilingFace from "@/public/emojis/SmilingFace";
import Thinking from "@/public/emojis/Thinking";
import { Chart } from "primereact/chart";

const EmotionChart = () => {
  const data = {
    datasets: [
      {
        label: "My First Dataset",
        data: [35, 20, 19, 17, 9],
        backgroundColor: ["rgba(72, 187, 152, 1)", "rgba(251, 200, 91, 1)", "rgba(199, 209, 224, 1)", "rgba(227, 233, 241, 1)", "rgba(239, 243, 248, 1)"],
        hoverOffset: 4,
        spacing: 4,
        borderRadius: 50,
        cutout: "85%",
      },
    ],
  };
  const config = {
    type: "doughnut",
    data: data,
  };
  return (
    <div className="flex justify-between items-center px-28 py-6 w-[640px] border rounded-lg border-blue-200">
      <div className="relative w-fit h-fit">
        <div className="absolute flex flex-col items-center justify-center gap-2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <SmilingFace width={40} height={40} />
          <p className="font-pre text-lg font-bold text-black-600">기쁨</p>
        </div>
        <Chart type="doughnut" data={data} className="w-64 h-64" />
      </div>
      <div className="flex flex-col gap-3.5">
        <div className="flex gap-4">
          <div className="w-4 h-4 rounded-sm bg-illust-green" />
          <SmilingFace width={24} height={24} />
          <p className="text-black-600 font-pre text-xl font-semibold">35%</p>
        </div>
        <div className="flex gap-4">
          <div className="w-4 h-4 rounded-sm bg-illust-yellow" />
          <HeartFace width={24} height={24} />
          <p className="text-gray-200 font-pre text-xl font-semibold">20%</p>
        </div>
        <div className="flex gap-4">
          <div className="w-4 h-4 rounded-sm bg-sub-gray-1" />
          <Thinking width={24} height={24} />
          <p className="text-gray-200 font-pre text-xl font-semibold">19%</p>
        </div>
        <div className="flex gap-4">
          <div className="w-4 h-4 rounded-sm bg-sub-gray-2" />
          <Sad width={24} height={24} />
          <p className="text-gray-200 font-pre text-xl font-semibold">17%</p>
        </div>
        <div className="flex gap-4">
          <div className="w-4 h-4 rounded-sm bg-sub-gray-3" />
          <Anger width={24} height={24} />
          <p className="text-gray-200 font-pre text-xl font-semibold">9%</p>
        </div>
      </div>
    </div>
  );
};

export default EmotionChart;
