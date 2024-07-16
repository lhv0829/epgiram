"use client";

import { useState } from "react";
import SearchIcon from "@/public/icons/search.svg";
import { useSearch } from "@/contexts/SearchContext";
import { useRouter } from "next/navigation";

export default function SearchInput() {
  const router = useRouter();
  const [inputValue, setInputValue] = useState("");
  const { addSearchWord } = useSearch();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (inputValue.trim()) {
      addSearchWord(inputValue.trim());
      router.push(`/search?word=${inputValue.trim()}`);
      setInputValue("");
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="relative flex items-center w-full">
      <input
        type="text"
        name="word"
        value={inputValue}
        onChange={handleChange}
        className="py-6 h-20 w-full border-b border-0 border-blue-800 bg-blue-100 text-2xl"
      />
      <button type="submit" className="flex items-center">
        <SearchIcon className="text-blue-800 absolute right-1" />
      </button>
    </form>
  );
}
