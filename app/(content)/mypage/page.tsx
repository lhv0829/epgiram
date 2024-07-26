"use client";
import EmotionChart from "@/components/EmotionChart";
import TodayEmotion from "@/components/TodayEmotion";
import Card from "@/components/epigram/Card";
import Comment from "@/components/epigram/Comment";
import NoContent from "@/components/epigram/NoContent";
import MyProfileImage from "@/components/my/MyprofileImage";
import { SecondaryButton } from "@/components/ui/SecondaryButton";
import Title from "@/components/ui/Title";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getMyComment, getMyCommentTotalCount, getMyData } from "@/lib/fetch";
import { InfiniteQueryComment, User } from "@/lib/type";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { Plus } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import { useEffect } from "react";

// export const metadata: Metadata = {
//   title: "마이 페이지",
// };

export default function Me() {
  const { data: userData } = useQuery<User>({
    queryKey: ["myProfile"],
    queryFn: () => getMyData(),
  });

  const { data: myCommentTotalCount } = useQuery<number>({
    queryKey: ["myEpigramTotalCount", userData?.id],
    queryFn: () => getMyCommentTotalCount(userData!.id),
    enabled: !!userData?.id,
  });

  const {
    data: myComments,
    fetchNextPage: fetchNextMyComment,
    hasNextPage: hasNextMyComment,
  } = useInfiniteQuery({
    enabled: !!userData?.id,
    queryKey: ["myComments", userData?.id],
    queryFn: ({ pageParam }) => getMyComment(userData!.id, pageParam),
    initialPageParam: 0,
    select: (data: InfiniteQueryComment) => ({
      comments: [...data.pages.map((page) => page.list.flat())],
      pageParams: [data.pages.map(({ nextCursor }) => nextCursor)],
    }),
    getNextPageParam: (lastPage) => (lastPage.nextCursor !== null ? Number(lastPage.nextCursor) : undefined),
  });

  const handleClickMore = () => {
    if (hasNextMyComment) fetchNextMyComment();
  };

  return (
    <div className="w-full h-full flex flex-col items-center">
      <div className="absolute flex flex-col items-center gap-6 top-40">
        <div className="flex flex-col items-center gap-4">
          <MyProfileImage profileIamge={userData?.image as string} nickname={userData?.nickname as string} />
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
            <TabsTrigger value="comments">내 댓글({myCommentTotalCount})</TabsTrigger>
          </TabsList>
          <TabsContent value="epigrams">
            <div className="flex flex-col gap-12"></div>
          </TabsContent>
          <TabsContent value="comments">
            {myCommentTotalCount === 0 ? (
              <NoContent button="에피그램 둘러보기">
                아직 작성한 댓글이 없어요!
                <br />
                댓글을 달고 다른 사람과 교류해보세요.
              </NoContent>
            ) : (
              <div className="flex flex-col justify-center">
                <div className="flex flex-col items-center justify-center">
                  {myComments?.comments.map((comments) =>
                    comments.map((comment) => (
                      <Link href={`/epigrams/${comment.epigramId}`} className="w-full">
                        <Comment commentData={comment} epigramId={comment.epigramId} userId={userData?.id as number} />
                      </Link>
                    ))
                  )}
                </div>
                <SecondaryButton variant="icon" size="xl" text="xl" className="mx-auto my-8" onClick={handleClickMore}>
                  <Plus />
                  <span>더보기</span>
                </SecondaryButton>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
