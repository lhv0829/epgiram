"use client";

import { useEffect, useState } from "react";
import SearchWordChip from "../SearchWordChip";
import { useSearch } from "@/contexts/SearchContext";

interface ISearchListProps {}
export default function SearchList(props: ISearchListProps) {
  const { searchWords } = useSearch();

  return (
    <div className="flex flex-wrap gap-4">
      {searchWords.map((word, index) => (
        <SearchWordChip key={index}>{word}</SearchWordChip>
      ))}
    </div>
  );
}
