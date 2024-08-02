"use client";

import SearchController from "./SearchController";
import SearchInput from "./SearchInput";
import SearchList from "./SearchList";
import CardList from "./CardList";
import { SearchProvider } from "@/contexts/SearchProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function SearchSection() {
  return (
    <QueryClientProvider client={queryClient}>
      <SearchProvider>
        <section className="flex flex-col gap-10">
          <header>
            <SearchInput />
          </header>
          <SearchController />
          <SearchList />
        </section>
        <CardList />
      </SearchProvider>
    </QueryClientProvider>
  );
}
