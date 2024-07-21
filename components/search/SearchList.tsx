"use client";

import { useRouter } from "next/navigation";
import SearchWordChip from "../SearchWordChip";
import { useSearch } from "@/contexts/SearchProvider";

export default function SearchList() {
  const { searchWords, addSearchWord } = useSearch();
  const router = useRouter();

  const handleSearchClick = (word: string) => {
    addSearchWord(word);
    router.push(`/search?keyword=${word}`);
  };

  return (
    <div className="flex flex-wrap gap-4">
      {searchWords.map((word, index) => (
        <button key={index} onClick={() => handleSearchClick(word)}>
          <SearchWordChip>{word}</SearchWordChip>
        </button>
      ))}
    </div>
  );
}
