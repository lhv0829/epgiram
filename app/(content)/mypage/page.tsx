"use client";
import EmotionChart from "@/components/EmotionChart";
import TodayEmotion from "@/components/TodayEmotion";
import Card from "@/components/epigram/Card";
import Comment from "@/components/epigram/Comment";
import NoContent from "@/components/epigram/NoContent";
import Day from "@/components/my/Day";
import MyProfileImage from "@/components/my/MyprofileImage";
import { SecondaryButton } from "@/components/ui/SecondaryButton";
import Title from "@/components/ui/Title";
import { Calendar } from "@/components/ui/calendar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  getMonthlyEmotion,
  getMyComment,
  getMyCommentTotalCount,
  getMyData,
  getMyEpigram,
  getTodayEmotion,
  postEmotion,
} from "@/lib/fetch";
import {
  EmotionData,
  Epigram,
  InfiniteQueryComment,
  InfiniteQueryEpigram,
  User,
} from "@/lib/type";
import {
  notifyManager,
  useInfiniteQuery,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { format } from "date-fns";
import { Plus } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import { redirect, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import EmotionSelect from "@/components/EmotionSelect";
import Cookies from "js-cookie";

// export const metadata: Metadata = {
//   title: "마이 페이지",
// };

export default function Me() {
  const queryClient = useQueryClient();
  const [month, setMonth] = useState(new Date());
  const [filterValue, setFilterValue] = useState("");
  const [filteredData, setFilteredData] = useState<EmotionData[]>([]);
  const router = useRouter();
  const date = new Date();
  const { data: userData } = useQuery<User>({
    queryKey: ["myProfile"],
    queryFn: () => getMyData(),
  });

  const { data: myCommentTotalCount } = useQuery<number>({
    queryKey: ["myEpigramTotalCount", userData?.id],
    queryFn: () => getMyCommentTotalCount(userData!.id),
    enabled: !!userData?.id,
  });

  const { data: todayEmotion } = useQuery<EmotionData>({
    queryKey: ["todayEmotion", userData?.id],
    queryFn: () => getTodayEmotion(userData?.id as number),
    enabled: !!userData?.id,
  });

  const { data: monthlyEmotion } = useQuery<EmotionData[]>({
    queryKey: [
      "monthlyEmotion",
      userData?.id,
      month.getFullYear(),
      month.getMonth() + 1,
    ],
    queryFn: () =>
      getMonthlyEmotion(
        userData!.id,
        month.getFullYear(),
        month.getMonth() + 1
      ),
  });

  const { mutate: postTodayEmotion } = useMutation({
    mutationFn: async (emotionData: string) => postEmotion(emotionData),
    onSuccess: () => {
      notifyManager.batch(() => {
        queryClient.invalidateQueries({
          queryKey: ["todayEmotion", userData?.id],
        });
        queryClient.invalidateQueries({
          queryKey: [
            "monthlyEmotion",
            userData?.id,
            month.getFullYear(),
            month.getMonth() + 1,
          ],
        });
      });
    },
  });

  const {
    data: myEpigram,
    fetchNextPage: fetchNextMyEpigram,
    hasNextPage: hasNextMyEpigram,
  } = useInfiniteQuery({
    queryKey: ["myEmpigrams"],
    queryFn: ({ pageParam }) => getMyEpigram(userData!.id, pageParam),
    initialPageParam: 0,
    select: (data: InfiniteQueryEpigram) => ({
      totalCount: data.pages[0].totalCount,
      epigrams: [...data.pages.map((page) => page.list.flat())],
      pageParams: [data.pages.map(({ nextCursor }) => nextCursor)],
    }),
    getNextPageParam: (lastPage) =>
      lastPage.nextCursor !== null ? Number(lastPage.nextCursor) : undefined,
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
    getNextPageParam: (lastPage) =>
      lastPage.nextCursor !== null ? Number(lastPage.nextCursor) : undefined,
  });

  const handleClickMoreEpigram = () => {
    if (hasNextMyEpigram) fetchNextMyEpigram();
  };

  const handleClickMoreComment = () => {
    if (hasNextMyComment) fetchNextMyComment();
  };

  const handleClickEmotion = (value: string) => {
    postTodayEmotion(value);
  };

  const handleClickLogout = () => {
    Cookies.remove("accessToken");
    Cookies.remove("refreshToken");
    router.push("/");
  };

  useEffect(() => {
    if (monthlyEmotion) {
      setFilteredData(
        monthlyEmotion?.filter(
          (emotionData) => emotionData.emotion === filterValue
        )
      );
    }
  }, [filterValue]);

  return (
    <div className="w-full h-full flex flex-col items-center">
      <div className="absolute flex flex-col items-center gap-6 top-40">
        <div className="flex flex-col items-center gap-4">
          <MyProfileImage
            profileIamge={userData?.image as string}
            nickname={userData?.nickname as string}
          />
          <div className="text-2xl font-medium text-black-950">
            지킬과 하이드
          </div>
        </div>
        <button
          onClick={handleClickLogout}
          className="rounded-[100px] px-4 py-1.5 text-gray-300 bg-line-#F2F2F2 text-xl font-medium"
        >
          로그아웃
        </button>
      </div>
      <div className="w-full mt-16 lg:mt-32 bg-white rounded-3xl min-h-[50vh] pt-[276px] pb-[104px]">
        <div className="flex flex-col gap-40 w-[640px] mx-auto">
          <div className="w-full flex flex-col gap-16">
            <div className="flex justify-between items-center">
              <Title>오늘의 감정</Title>
              <p>{format(date, "yyyy.MM.dd")}</p>
            </div>
            <TodayEmotion
              onChange={handleClickEmotion}
              value={todayEmotion?.emotion}
            />
          </div>
          <div className="relative">
            <div className="absolute right-28 top-2 z-10">
              <EmotionSelect value={filterValue} onChange={setFilterValue} />
            </div>
            <Calendar
              onMonthChange={setMonth}
              month={month}
              components={{
                Day: (props) => (
                  <Day
                    {...props}
                    dayData={
                      filteredData.length !== 0
                        ? filteredData
                        : monthlyEmotion || []
                    }
                    onChange={console.log}
                  />
                ),
              }}
            />
          </div>
          <div className="flex flex-col gap-16">
            <Title>감정 차트</Title>
            {monthlyEmotion === undefined || monthlyEmotion?.length === 0 ? (
              <div className="flex flex-col gap-4 justify-center items-center px-28 py-6 w-[640px] border rounded-lg border-blue-200">
                <p className="font-pre text-2xl font-semibold">
                  아직 선택한 감정이 없습니다
                </p>
                <p className="font-pre text-2xl font-semibold">
                  감정을 표현해 보세요.
                </p>
              </div>
            ) : (
              <EmotionChart emotionData={monthlyEmotion} />
            )}
          </div>
        </div>
      </div>
      <div className="pt-24 w-[640px] flex flex-col items-center gap-[72px]">
        <Tabs defaultValue="epigrams" className="w-full">
          <TabsList className="mb-16">
            <TabsTrigger value="epigrams">
              내 에피그램({myEpigram?.totalCount})
            </TabsTrigger>
            <TabsTrigger value="comments">
              내 댓글({myCommentTotalCount})
            </TabsTrigger>
          </TabsList>
          <TabsContent value="epigrams">
            {myEpigram?.totalCount === 0 ? (
              <NoContent button="에피그램 생성하기" link="/addepigram">
                아직 작성한 에피그램이 없어요!
                <br />
                에피그램을 작성하고 감정을 공유해보세요.
              </NoContent>
            ) : (
              <div className="flex flex-col gap-12">
                {myEpigram?.epigrams.map((epigrams) =>
                  epigrams?.map((epigram: Epigram) => (
                    <Card
                      key={epigram?.id}
                      sentence={epigram?.content}
                      author={epigram?.author}
                      tags={epigram?.tags}
                      id={epigram.id}
                    />
                  ))
                )}
                {myEpigram?.totalCount !== undefined &&
                  myEpigram.totalCount > 4 && (
                    <SecondaryButton
                      variant="icon"
                      size="xl"
                      text="xl"
                      className="mx-auto my-8"
                      onClick={handleClickMoreEpigram}
                    >
                      <Plus />
                      <span>더보기</span>
                    </SecondaryButton>
                  )}
              </div>
            )}
          </TabsContent>
          <TabsContent value="comments">
            {myCommentTotalCount === 0 ? (
              <NoContent button="에피그램 둘러보기" link="/epigrams">
                아직 작성한 댓글이 없어요!
                <br />
                댓글을 달고 다른 사람과 교류해보세요.
              </NoContent>
            ) : (
              <div className="flex flex-col justify-center">
                <div className="flex flex-col items-center justify-center">
                  {myComments?.comments.map((comments) =>
                    comments.map((comment) => (
                      <Link
                        href={`/epigrams/${comment.epigramId}`}
                        className="w-full"
                        key={comment.id}
                      >
                        <Comment
                          commentData={comment}
                          epigramId={comment.epigramId}
                          userId={userData?.id as number}
                        />
                      </Link>
                    ))
                  )}
                </div>
                {myCommentTotalCount !== undefined &&
                  myCommentTotalCount > 5 && (
                    <SecondaryButton
                      variant="icon"
                      size="xl"
                      text="xl"
                      className="mx-auto my-8"
                      onClick={handleClickMoreComment}
                    >
                      <Plus />
                      <span>더보기</span>
                    </SecondaryButton>
                  )}
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
