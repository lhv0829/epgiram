import SearchWordChip from "@/components/SearchWordChip";
import EditButton from "@/components/EditButton";
import EmotionSelect from "@/components/EmotionSelect";
import { RadioDemo } from "@/components/RadioDemo";
import { SwitchDemo } from "@/components/SwitchDemo";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import TodayEmotion from "@/components/TodayEmotion";

import { Calendar } from "@/components/ui/calendar";
import EmotionChart from "@/components/EmotionChart";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <div className=" text-2xl">landing 확인</div>
      <div className=" text-2xl font-pre">landing 확인 Pretendard</div>
      <div className=" text-2xl font-iropke">landing 확인 Iropke Batang</div>
      <EmotionSelect />
      <EditButton />
      <RadioDemo />
      <SwitchDemo />
      <ScrollToTopButton />
      <TodayEmotion />
      <Calendar />
      <EmotionChart />
    </>
  );
}
