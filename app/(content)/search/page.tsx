import SearchInput from "@/components/search/SearchInput";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "에피그램 검색",
};

export default function Search() {
  return (
    <main className="w-[640px] mt-6">
      <SearchInput />
      {/* <section>
        <header className="flex justify-between">
          <span>최근 검색어</span>
          <span className="text-red-500">모두 지우기</span>
        </header>
        <div className="flex gap-4">
          <span>꿈</span>
          <span>#나아가야할 때</span>
          <span>기분</span>
        </div>
      </section> */}
    </main>
  );
}
