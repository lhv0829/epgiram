"use client";

import { useInfiniteQuery, QueryFunctionContext } from "@tanstack/react-query";
import CombinCard from "./CombinCard";
import Loading from "../core/skeleton/loading";
import { Post } from "./types";
import { useIntersectionObserver } from "./hooks/useIntersectionObserver";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Suspense } from "react";

const fetchPage = async ({ pageParam, queryKey }: QueryFunctionContext<[string]>) => {
  const [keyword] = queryKey;
  const url = pageParam ? `/api/search?keyword=${keyword}&cursor=${pageParam}` : `/api/search?keyword=${keyword}`;
  const response = await fetch(url).then((res) => res.json());
  return {
    data: response.results,
    nextCursor: response.nextCursor,
  };
};

export default function CardList() {
  const params = useSearchParams();
  const [keyword, setKeyword] = useState<string | null>(null);

  useEffect(() => {
    const kw = params.get("keyword");
    setKeyword(kw);
  }, [params]);

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, status } = useInfiniteQuery({
    queryKey: [keyword] as [string],
    queryFn: fetchPage,
    getNextPageParam: (lastPage) => lastPage.nextCursor,
    initialPageParam: null,
    enabled: !!keyword,
  });

  const loadMoreRef = useIntersectionObserver(() => {
    if (hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  });

  if (keyword && status === "pending") {
    return <Loading />;
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <section>
        {data?.pages.map((page, pageIndex) => page.data.map((result: Post, index: number) => <CombinCard key={`${pageIndex}-${index}`} {...result} />))}
        <div ref={loadMoreRef} />
        {isFetchingNextPage && <Loading />}
      </section>
    </Suspense>
  );
}
