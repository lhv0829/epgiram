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
import NoContent from "@/components/epigram/NoContent";

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
      <TodayEmotion />
      <Calendar />
      <EmotionChart />
      <NoContent button="에피그램 만들기">
        아직 작성한 에피그램이 없어요!
        <br />
        에피그램을 작성하고 감정을 공유해보세요.
      </NoContent>
      <NoContent button="에피그램 둘러보기">
        아직 작성한 댓글이 없어요!
        <br />
        댓글을 달고 다른 사람들과 교류해보세요.
      </NoContent>
    </>
  );
}
