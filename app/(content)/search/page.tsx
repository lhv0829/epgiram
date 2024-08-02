import { Metadata } from "next";
import SearchSection from "@/components/search/SearchSection";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "에피그램 검색",
};

export default function Search() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <main className="w-[640px] mt-6">
        <SearchSection />
      </main>
    </Suspense>
  );
}
