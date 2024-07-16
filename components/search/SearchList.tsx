"use client";

import { useRouter } from "next/navigation";
import SearchWordChip from "../SearchWordChip";
import { useSearch } from "@/contexts/SearchContext";

interface ISearchListProps {}
export default function SearchList(props: ISearchListProps) {
  const { searchWords, addSearchWord } = useSearch();
  const router = useRouter();

  const handleSearchClick = (word: string) => {
    addSearchWord(word);
    router.push(`/search?word=${word}`);
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
