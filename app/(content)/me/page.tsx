import EmotionChart from "@/components/EmotionChart";
import TodayEmotion from "@/components/TodayEmotion";
import Card from "@/components/epigram/Card";
import Comment from "@/components/epigram/Comment";
import { SecondaryButton } from "@/components/ui/SecondaryButton";
import Title from "@/components/ui/Title";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plus } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "마이 페이지",
};

export default function Me() {
  return (
    <div className="w-full h-full flex flex-col items-center">
      <div className="absolute flex flex-col items-center gap-6 top-40">
        <div className="flex flex-col items-center gap-4">
          <div className="w-[120px] h-[120px] rounded-full bg-illust-purple"></div>
          <div className="text-2xl font-medium text-black-950">지킬과 하이드</div>
        </div>
        <button className="rounded-[100px] px-4 py-1.5 text-gray-300 bg-line-#F2F2F2 text-xl font-medium">로그아웃</button>
      </div>
      <div className="w-full mt-16 lg:mt-32 bg-white rounded-3xl min-h-[50vh] pt-[276px] pb-[104px]">
        <div className="flex flex-col gap-40 w-[640px] mx-auto">
          <div className="w-full flex flex-col gap-16">
            <div className="flex justify-between items-center">
              <Title>오늘의 감정</Title>
              <p>2024.05.25</p>
            </div>
            <TodayEmotion />
          </div>
          <div>달력</div>
          <div className="flex flex-col gap-16">
            <Title>감정 차트</Title>
            <EmotionChart />
          </div>
        </div>
      </div>
      <div className="pt-24 w-[640px] flex flex-col justify-center items-center gap-[72px]">
        <Tabs defaultValue="epigrams">
          <TabsList className="mb-16">
            <TabsTrigger value="epigrams">내 에피그램(10)</TabsTrigger>
            <TabsTrigger value="comments">내 댓글(110)</TabsTrigger>
          </TabsList>
          <TabsContent value="epigrams">
            <div className="flex flex-col gap-12">
              <Card
                {...{
                  sentence:
                    "이 세상에는 위대한 진실이 하나 있어. 무언가를 온 마음을 다해 원한다면, 반드시 그렇게 된다는 거야. 무언가를 바라는 마음은 곧 우주의 마음으로부터 비롯된 것이기 때문이지.",
                  author: "파울로 코엘료",
                  tags: ["#나아가야할때", "#꿈을이루고싶을때"],
                }}
              />
              <Card
                {...{
                  sentence:
                    "이 세상에는 위대한 진실이 하나 있어. 무언가를 온 마음을 다해 원한다면, 반드시 그렇게 된다는 거야. 무언가를 바라는 마음은 곧 우주의 마음으로부터 비롯된 것이기 때문이지.",
                  author: "파울로 코엘료",
                  tags: ["#나아가야할때", "#꿈을이루고싶을때"],
                }}
              />
              <Card
                {...{
                  sentence:
                    "이 세상에는 위대한 진실이 하나 있어. 무언가를 온 마음을 다해 원한다면, 반드시 그렇게 된다는 거야. 무언가를 바라는 마음은 곧 우주의 마음으로부터 비롯된 것이기 때문이지.",
                  author: "파울로 코엘료",
                  tags: ["#나아가야할때", "#꿈을이루고싶을때"],
                }}
              />
            </div>
          </TabsContent>
          <TabsContent value="comments">
            <div className="flex flex-col items-center justify-center gap-4">
              <Comment
                {...{
                  username: "지킬과 하이드",
                  timeAgo: "1시간 전",
                  content: "오늘 하루 우울했었는데 덕분에 많은 힘 얻고 갑니다. 연금술사 책 다시 사서 오랜만에 읽어 봐야겠어요!",
                  me: true,
                }}
              />
              <Comment
                {...{
                  username: "지킬과 하이드",
                  timeAgo: "1시간 전",
                  content: "오늘 하루 우울했었는데 덕분에 많은 힘 얻고 갑니다. 연금술사 책 다시 사서 오랜만에 읽어 봐야겠어요!",
                  me: true,
                }}
              />
              <Comment
                {...{
                  username: "지킬과 하이드",
                  timeAgo: "1시간 전",
                  content: "오늘 하루 우울했었는데 덕분에 많은 힘 얻고 갑니다. 연금술사 책 다시 사서 오랜만에 읽어 봐야겠어요!",
                  me: true,
                }}
              />
            </div>
          </TabsContent>
        </Tabs>
        <SecondaryButton variant="icon" size="xl" text="xl" className="mx-auto mt-8">
          <Plus />
          <span>더보기</span>
        </SecondaryButton>
      </div>
    </div>
  );
}
