"use client";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import TodayEmotion from "@/components/TodayEmotion";
import Card from "@/components/epigram/Card";
import Comment from "@/components/epigram/Comment";
import NoContent from "@/components/epigram/NoContent";
import { SecondaryButton } from "@/components/ui/SecondaryButton";
import Title from "@/components/ui/Title";
import { getEpigramTotalCount, getRecentEpigrams, getTodayEpigram } from "@/lib/fetch";
import { Epigram, InfiniteQueryEpigram, Tag } from "@/lib/type";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { Plus } from "lucide-react";
// import { Metadata } from "next";
import { useEffect, useState } from "react";

// export const metadata: Metadata = {
//   title: "Main",
// };

export default function Main() {
  const [showScrollButton, setShowScrollButton] = useState(false);
  const { data: todayEpigram } = useQuery<Epigram, Error>({
    queryKey: ["todayEpigram"],
    queryFn: () => getTodayEpigram(),
  });

  const { data: epigramTotalCount } = useQuery<number>({
    queryKey: ["epigramTotalCount"],
    queryFn: () => getEpigramTotalCount(),
  });

  const {
    data: recentEpigrams,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery({
    queryKey: ["moreEmpigrams"],
    queryFn: ({ pageParam }) => getRecentEpigrams(pageParam),
    initialPageParam: 0,
    select: (data: InfiniteQueryEpigram) => ({
      totalCount: data.pages[0].totalCount,
      epigrams: [...data.pages.map((page) => page.list.flat())],
      pageParams: [data.pages.map(({ nextCursor }) => nextCursor)],
    }),
    getNextPageParam: (lastPage) => (lastPage.nextCursor !== null ? Number(lastPage.nextCursor) : undefined),
  });

  const handleClickMoreEpigrams = () => {
    if (hasNextPage) fetchNextPage();
  };

  const commentProps = {
    username: "지킬과 하이드",
    timeAgo: "1시간 전",
    content: "오늘 하루 우울했었는데 덕분에 많은 힘 얻고 갑니다. 연금술사 책 다시 사서 오랜만에 읽어 봐야겠어요!",
    me: true,
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.outerHeight / 3) setShowScrollButton(true);
      else setShowScrollButton(false);
    };

    window.addEventListener("scroll", handleScroll);

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
            sentence: todayEpigram?.content as string,
            author: todayEpigram?.author as string,
            tags: todayEpigram?.tags as Array<Tag>,
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
          {epigramTotalCount === 0 ? (
            <NoContent button="에피그램 만들기">
              아직 작성된 에피그램이 없어요!
              <br />
              에피그램을 작성해보세요
            </NoContent>
          ) : (
            recentEpigrams?.epigrams.map((epigrams) =>
              epigrams?.map((epigram: Epigram) => <Card key={epigram?.id} sentence={epigram?.content} author={epigram?.author} tags={epigram?.tags} />)
            )
          )}
        </div>
        {epigramTotalCount !== undefined && epigramTotalCount > 3 && (
          <SecondaryButton variant="icon" size="xl" text="xl" className="mx-auto mt-8" onClick={handleClickMoreEpigrams}>
            <Plus />
            <span>더보기</span>
          </SecondaryButton>
        )}
      </div>
      <div className="flex flex-col gap-4 lg:gap-10 mt-8 lg:mt-10">
        <Title>최신 댓글</Title>
        <div className="flex flex-col items-center justify-center gap-4">
          <Comment {...commentProps} />
          <Comment {...commentProps} />
        </div>
        <SecondaryButton variant="icon" size="xl" text="xl" className="mx-auto my-8">
          <Plus />
          <span>더보기</span>
        </SecondaryButton>
      </div>
      {showScrollButton && <ScrollToTopButton />}
    </div>
  );
}
