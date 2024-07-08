import HeartFace from "@/public/emojis/HeartFace";
import SmilingFace from "@/public/emojis/Sad";
import { Chart } from "primereact/chart";

const EmotionChart = () => {
  const data = {
    labels: ["moved", "happy", "think", "sad", "anger"],
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
    <div>
      <div>
        <HeartFace />
      </div>
      <Chart type="doughnut" data={data} className="w-64 h-64" />
    </div>
  );
};

export default EmotionChart;
