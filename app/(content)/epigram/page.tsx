"use client";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import TodayEmotion from "@/components/TodayEmotion";
import Card from "@/components/epigram/Card";
import Comment from "@/components/epigram/Comment";
import { SecondaryButton } from "@/components/ui/SecondaryButton";
import Title from "@/components/ui/Title";
import { Plus } from "lucide-react";
// import { Metadata } from "next";
import { useEffect, useState } from "react";

// export const metadata: Metadata = {
//   title: "Main",
// };

export default function Main() {
  const [showScrollButton, setShowScrollButton] = useState(false);
  const cardProps = {
    sentence: "오랫동안 꿈을 그리는 사람은 마침내 그 꿈을 닮아 간다.",
    author: "앙드레 말로",
    tags: ["#나아가야할때", "#꿈을이루고싶을때"],
  };

  const commentProps = {
    username: "지킬과 하이드",
    timeAgo: "1시간 전",
    content: "오늘 하루 우울했었는데 덕분에 많은 힘 얻고 갑니다. 연금술사 책 다시 사서 오랜만에 읽어 봐야겠어요!",
    me: true,
  };

  useEffect(() => {
    // 페이지가 렌더링 되면 무조건 맨위로 스크롤 한다.

    const handleScroll = () => {
      // 일정 구간 스크롤이 내려가면 버튼을 보여준다.
      if (window.scrollY > window.outerHeight / 3) setShowScrollButton(true);
      else setShowScrollButton(false);
    };

    // window에 scroll 이벤트를 넣는다.
    window.addEventListener("scroll", handleScroll);

    // 페이지를 벗어날 때 이벤트를 제거한다.
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex flex-col w-[312px] md:w-96 lg:w-[640px] pt-8 lg:pt-[120px] gap-10 lg:gap-[120px]">
      <div className="flex flex-col gap-6 lg:gap-10">
        <Title>오늘의 에피그램</Title>
        <Card
          {...{
            sentence:
              "이 세상에는 위대한 진실이 하나 있어. 무언가를 온 마음을 다해 원한다면, 반드시 그렇게 된다는 거야. 무언가를 바라는 마음은 곧 우주의 마음으로부터 비롯된 것이기 때문이지.",
            author: "파울로 코엘료",
            tags: ["#나아가야할때", "#꿈을이루고싶을때"],
          }}
        />
      </div>
      <div className="flex flex-col gap-6 lg:gap-10">
        <Title>오늘의 감정은 어떤가요?</Title>
        <TodayEmotion />
      </div>
      <div className="flex flex-col gap-6 lg:gap-10 mt-8 lg:mt-10">
        <Title>최신 에피그램</Title>
        <div className="flex flex-col gap-4">
          <Card
            {...{
              sentence:
                "이 세상에는 위대한 진실이 하나 있어. 무언가를 온 마음을 다해 원한다면, 반드시 그렇게 된다는 거야. 무언가를 바라는 마음은 곧 우주의 마음으로부터 비롯된 것이기 때문이지.",
              author: "파울로 코엘료",
              tags: ["#나아가야할때", "#꿈을이루고싶을때"],
            }}
          />
          {[...Array(2)].map((_, index) => (
            <Card key={index} {...cardProps} />
          ))}
        </div>
        <SecondaryButton variant="icon" size="xl" text="xl" className="mx-auto mt-8">
          <Plus />
          <span>더보기</span>
        </SecondaryButton>
      </div>
      <div className="flex flex-col gap-4 lg:gap-10 mt-8 lg:mt-10">
        <Title>최신 댓글</Title>
        <div className="flex flex-col items-center justify-center gap-4">
          <Comment {...commentProps} />
          <Comment {...commentProps} />
        </div>
        <SecondaryButton variant="icon" size="xl" text="xl" className="mx-auto mt-8">
          <Plus />
          <span>더보기</span>
        </SecondaryButton>
      </div>
      {showScrollButton && <ScrollToTopButton />}
    </div>
  );
}
