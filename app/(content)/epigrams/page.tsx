"use client";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import TodayEmotion from "@/components/TodayEmotion";
import Card from "@/components/epigram/Card";
import Comment from "@/components/epigram/Comment";
import NoContent from "@/components/epigram/NoContent";
import { SecondaryButton } from "@/components/ui/SecondaryButton";
import Title from "@/components/ui/Title";
import {
  getRecentEpigramTotalCount,
  getRecentCommentTotalCount,
  getRecentEpigrams,
  getTodayEpigram,
  getRecentComments,
  getMyData,
  getTodayEmotion,
  postEmotion,
} from "@/lib/fetch";
import { Comment as CommentType, Emotion, EmotionData, Epigram, InfiniteQueryComment, InfiniteQueryEpigram, Tag, User } from "@/lib/type";
import { useInfiniteQuery, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Plus } from "lucide-react";
import Link from "next/link";
// import { Metadata } from "next";
import { useEffect, useState } from "react";

// export const metadata: Metadata = {
//   title: "Main",
// };

export default function Main() {
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [limit, setLimit] = useState(3);
  const queryClient = useQueryClient();

  const { data: todayEpigram } = useQuery<Epigram, Error>({
    queryKey: ["todayEpigram"],
    queryFn: () => getTodayEpigram(),
  });

  const { data: epigramTotalCount } = useQuery<number>({
    queryKey: ["epigramTotalCount"],
    queryFn: () => getRecentEpigramTotalCount(),
  });

  const { data: commentTotalCount } = useQuery<number>({
    queryKey: ["commentTotalCount"],
    queryFn: () => getRecentCommentTotalCount(),
  });

  const { data: user } = useQuery<User>({
    queryKey: ["userId"],
    queryFn: () => getMyData(),
  });

  const { data: todayEmotion } = useQuery<EmotionData>({
    queryKey: ["todayEmotion", user?.id],
    queryFn: () => getTodayEmotion(user?.id as number),
    enabled: !!user?.id,
  });

  const {
    data: recentEpigrams,
    fetchNextPage: fetchNextEpigram,
    hasNextPage: hasNextEpigram,
  } = useInfiniteQuery({
    queryKey: ["recentEmpigrams"],
    queryFn: ({ pageParam }) => getRecentEpigrams(pageParam, limit),
    initialPageParam: 0,
    select: (data: InfiniteQueryEpigram) => ({
      epigrams: [...data.pages.map((page) => page.list.flat())],
      pageParams: [data.pages.map(({ nextCursor }) => nextCursor)],
    }),
    getNextPageParam: (lastPage) => (lastPage.nextCursor !== null ? Number(lastPage.nextCursor) : undefined),
  });

  const {
    data: recentComment,
    fetchNextPage: fetchNextComment,
    hasNextPage: hasNextComment,
  } = useInfiniteQuery({
    queryKey: ["recentComments"],
    queryFn: ({ pageParam }) => getRecentComments(pageParam),
    refetchOnMount: true,
    initialPageParam: 0,
    select: (data: InfiniteQueryComment) => ({
      comments: [...data.pages.map((page) => page.list.flat())],
      pageParams: [data.pages.map(({ nextCursor }) => nextCursor)],
    }),
    getNextPageParam: (lastPage) => (lastPage.nextCursor !== null ? Number(lastPage.nextCursor) : undefined),
  });

  const { mutate: postTodayEmotion } = useMutation({
    mutationFn: async (emotionData: string) => postEmotion(emotionData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todayEmotion", user?.id] });
    },
  });

  const handleClickMoreEpigrams = () => {
    if (hasNextEpigram) fetchNextEpigram();
  };

  const handleClickMoreComment = () => {
    if (hasNextComment) fetchNextComment();
  };

  const handleClickEmotion = (value: string) => {
    postTodayEmotion(value);
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

  useEffect(() => {
    if (limit === 3) setLimit(4);
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
            id: todayEpigram?.id as number,
          }}
        />
      </div>
      {!todayEmotion && (
        <div className="flex flex-col gap-6 lg:gap-10">
          <Title>오늘의 감정은 어떤가요?</Title>
          <TodayEmotion onChange={handleClickEmotion} />
        </div>
      )}

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
              epigrams?.map((epigram: Epigram) => (
                <Card key={epigram?.id} sentence={epigram?.content} author={epigram?.author} tags={epigram?.tags} id={epigram.id} />
              ))
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
          {commentTotalCount === 0 ? (
            <NoContent button="에피그램 둘러보기">
              아직 작성된 댓글이 없어요!
              <br />
              에피그램을 둘러보고 댓글을 작성해보세요
            </NoContent>
          ) : (
            recentComment?.comments.map((comment) =>
              comment?.map((comment: CommentType) => (
                <Link href={`/epigrams/${comment.epigramId}`} key={comment.id} className="w-full">
                  <Comment commentData={comment} epigramId={comment.epigramId} />
                </Link>
              ))
            )
          )}
        </div>
        {commentTotalCount !== undefined && commentTotalCount > 5 && (
          <SecondaryButton variant="icon" size="xl" text="xl" className="mx-auto my-8" onClick={handleClickMoreComment}>
            <Plus />
            <span>더보기</span>
          </SecondaryButton>
        )}
      </div>
      {showScrollButton && <ScrollToTopButton />}
    </div>
  );
}
