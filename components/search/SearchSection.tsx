"use client";

import { SearchProvider } from "@/contexts/SearchProvider";
import SearchController from "./SearchController";
import SearchInput from "./SearchInput";
import SearchList from "./SearchList";
import CombinCard from "./CombinCard";
import { useInfiniteScroll } from "./hook/useInfiniteScroll";
import Loading from "../core/skeleton/loading";

interface ISearchSectionProps {}
interface IResultForm {
  id: string;
  content: string;
  author: string;
  tags: string[];
}

const initialResults: IResultForm[] = [
  {
    id: "1",
    content:
      "이 세상에는 위대한 진실이 하나 있어. 무언가를 온 마음을 다해 원한다면, 반드시 그렇게 된다는 거야.",
    author: "파우울로 코엘료",
    tags: ["#새로운영감", "#새로운영감", "#새로운영감"],
  },
];

const fetchMoreData = async (): Promise<IResultForm[]> => {
  return [
    {
      id: "2",
      content:
        "이 세상에는 위대한 진실이 하나 있어. 무언가를 온 마음을 다해 원한다면, 반드시 그렇게 된다는 거야.",
      author: "파우울로 코엘료",
      tags: ["#새로운영감", "#새로운영감", "#새로운영감"],
    },
    {
      id: "3",
      content:
        "이 세상에는 위대한 진실이 하나 있어. 무언가를 온 마음을 다해 원한다면, 반드시 그렇게 된다는 거야.",
      author: "파우울로 코엘료",
      tags: ["#새로운영감", "#새로운영감", "#새로운영감"],
    },
  ];
};

export default function SearchSection(props: ISearchSectionProps) {
  const { data, lastElementRef, hasMore, loading } = useInfiniteScroll(
    initialResults,
    fetchMoreData
  );

  return (
    <SearchProvider>
      <section className="flex flex-col gap-10">
        <header>
          <SearchInput />
        </header>
        <SearchController />
        <SearchList />
      </section>
      <section>
        {data.map((result, index) => (
          <CombinCard
            key={result.id}
            {...result}
            ref={index === data.length - 1 ? lastElementRef : null}
          />
        ))}
        {loading && <Loading />}
        {!hasMore && <p>No more results</p>}
      </section>
    </SearchProvider>
  );
}
