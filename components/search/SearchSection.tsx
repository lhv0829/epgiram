"use client";

import { SearchProvider } from "@/contexts/SearchContext";
import SearchController from "./SearchController";
import SearchInput from "./SearchInput";
import SearchList from "./SearchList";
import CombinCard from "./CombinCard";

interface ISearchSectionProps {}
export default function SearchSection(props: ISearchSectionProps) {
  const resultForm = {
    id: "1",
    content:
      "이 세상에는 위대한 진실이 하나 있어. 무언가를 온 마음을 다해 원한다면, 반드시 그렇게 된다는 거야.",
    author: "파우울로 코엘료",
    tags: ["#새로운영감", "#새로운영감", "#새로운영감"],
  };

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
        <CombinCard {...resultForm} />
        <CombinCard {...resultForm} />
        <CombinCard {...resultForm} />
      </section>
    </SearchProvider>
  );
}
