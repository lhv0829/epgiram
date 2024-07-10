"use client";

import { SearchProvider } from "@/contexts/SearchContext";
import SearchController from "./SearchController";
import SearchInput from "./SearchInput";
import SearchList from "./SearchList";
import CombinCard from "./CombinCard";

interface ISearchSectionProps {}
export default function SearchSection(props: ISearchSectionProps) {
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
        <CombinCard />
        <CombinCard />
        <CombinCard />
      </section>
    </SearchProvider>
  );
}
