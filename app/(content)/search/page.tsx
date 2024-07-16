import { Metadata } from "next";
import SearchSection from "@/components/search/SearchSection";

export const metadata: Metadata = {
  title: "에피그램 검색",
};

export default function Search() {
  return (
    <main className="w-[640px] mt-6">
      <SearchSection />
    </main>
  );
}
