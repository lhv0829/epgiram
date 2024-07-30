"use client";

import Comment from "@/components/epigram/Comment";
import CommentInput from "@/components/epigram/CommentInput";
import HashTag from "@/components/epigram/HashTag";
import { SecondaryButton } from "@/components/ui/SecondaryButton";
import { deleteEpigram, deleteEpigramLike, getEpigramComment, getEpigramDetailData, getMyData, postComment, postEpigramLike } from "@/lib/fetch";
import { Comment as CommentType, Epigram, InfiniteQueryComment, PostCommentData, User } from "@/lib/type";
import { notifyManager, useInfiniteQuery, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { ArrowUpRightFromSquare, Plus, ThumbsUp } from "lucide-react";
import { Metadata } from "next";
import { use, useEffect, useState } from "react";
import AdditionalMenu from "../../../../components/epigram/AdditionalMenu";
import { useRouter } from "next/navigation";

// export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
//   const { id } = params;
//   return {
//     title: id,
//   };
// }

export default function EpigramDetail({ params }: { params: { id: number } }) {
  const queryClient = useQueryClient();
  const [editingComment, setEiditingComment] = useState("");
  const [isPrivate, setIsPrivate] = useState(true);
  const { data: epigramData } = useQuery<Epigram>({
    queryKey: ["epigram", params.id],
    queryFn: () => getEpigramDetailData(params.id),
  });

  const {
    data: commentData,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery({
    queryKey: ["epigramComments", params.id],
    queryFn: ({ pageParam }) => getEpigramComment(params.id, pageParam),
    initialPageParam: 0,
    select: (data: InfiniteQueryComment) => ({
      totalCount: data.pages[0].totalCount,
      comments: [...data.pages.map((page) => page.list.flat())],
      pageParams: [data.pages.map(({ nextCursor }) => nextCursor)],
    }),
    getNextPageParam: (lastPage) => (lastPage.nextCursor !== null ? Number(lastPage.nextCursor) : undefined),
  });

  const { mutate: addComment } = useMutation({
    mutationFn: async (commentData: PostCommentData) => postComment(commentData),
    onSuccess: () => {
      notifyManager.batch(() => {
        queryClient.invalidateQueries({ queryKey: ["epigramComments", params.id] });
        queryClient.invalidateQueries({ queryKey: ["recentComments"] });
      });
    },
  });

  const { mutate: removeEpigram } = useMutation({
    mutationFn: async (epigramId: number) => deleteEpigram(epigramId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["recentEpigrams"] });
    },
  });

  const { data: userData } = useQuery<User>({
    queryKey: ["user"],
    queryFn: () => getMyData(),
  });

  const { mutate: likeEpigram } = useMutation({
    mutationFn: async (epigramId: number) => postEpigramLike(epigramId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["epigram", params.id] });
    },
  });

  const { mutate: cancelLikeEpigram } = useMutation({
    mutationFn: async (epigramId: number) => deleteEpigramLike(epigramId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["epigram", params.id] });
    },
  });

  const handleClickLike = () => {
    if (epigramData) {
      epigramData.isLiked ? cancelLikeEpigram(epigramData.id) : likeEpigram(epigramData.id);
    }
  };

  const handleClickSave = () => {
    const newCommentData = {
      content: editingComment,
      epigramId: params.id,
      isPrivate: !isPrivate,
    };

    addComment(newCommentData);
    setEiditingComment("");
  };

  const handleClickMoreComment = () => {
    if (hasNextPage) fetchNextPage();
  };

  const handleClickDelete = () => {
    removeEpigram(params.id);
  };

  const handleClickShare = () => {
    const currentUrl = `${window.location.origin}/epigrams/${params.id}`;

    navigator.clipboard
      .writeText(currentUrl)
      .then(() => alert("현재 페이지 링크가 클립보드에 복사되었습니다."))
      .catch((err) => console.error("클립보드 복사 실패:", err));
  };

  return (
    <div className="w-full h-full bg-background">
      <div className="notebook-pattern h-[392px] w-full flex justify-center">
        <div className="w-[640px] mt-8 flex flex-col gap-10">
          <div className="w-full mx-auto flex flex-col gap-8">
            <div className="flex justify-between">
              <div className="flex items-center gap-6">
                {epigramData?.tags?.map((tag) => (
                  <HashTag key={tag.id}>{tag.name}</HashTag>
                ))}
              </div>
              {userData?.id === epigramData?.writerId && <AdditionalMenu handleClickDelete={handleClickDelete} epigramId={params.id} />}
            </div>
            <div className="font-iropke text-3xl text-black-700">{epigramData?.content}</div>
            <div className="font-iropke text-2xl text-blue-400 text-right">- {epigramData?.author} -</div>
          </div>
          <div className="flex gap-6 items-center justify-center">
            <SecondaryButton variant="like" size="sm" text="xl" bold="semibold" onClick={handleClickLike}>
              <ThumbsUp />
              <span>{epigramData?.likeCount}</span>
            </SecondaryButton>
            <SecondaryButton onClick={handleClickShare} variant="share" size="md" text="xl" bold="medium">
              <span>왕도로 가는 길</span>
              <ArrowUpRightFromSquare />
            </SecondaryButton>
          </div>
        </div>
      </div>
      <div className="w-full zigzag-pattern"></div>
      <div className="w-[640px] mt-12 mx-auto flex flex-col gap-6">
        <p className="font-pre text-black-600 text-lg font-semibold lg:text-xl">댓글({commentData?.totalCount})</p>
        <CommentInput
          editingContent={editingComment}
          setEditingContent={setEiditingComment}
          handleClickSave={handleClickSave}
          type="new"
          profileImage={userData?.image}
          isPrivate={isPrivate}
          setIsPrivate={setIsPrivate}
        />
        <div className="flex flex-col items-center justify-center mt-4">
          {commentData?.comments.map((comment) =>
            comment?.map((comment: CommentType) => <Comment key={comment?.id} commentData={comment} epigramId={params.id} userId={userData?.id as number} />)
          )}
        </div>
        {commentData?.totalCount !== undefined && commentData?.totalCount > 5 && (
          <SecondaryButton variant="icon" size="xl" text="xl" className="mx-auto my-8" onClick={handleClickMoreComment}>
            <Plus />
            <span>더보기</span>
          </SecondaryButton>
        )}
      </div>
    </div>
  );
}
