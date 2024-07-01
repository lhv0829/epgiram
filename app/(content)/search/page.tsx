import { Input } from "@/components/ui/input";
import Image from "next/image";

export default function Search() {
  return (
    <main>
      <header className="relative">
        <Input className="border-0 border-b-2" />
        <Image
          src="/search.png"
          alt="search"
          width={48}
          height={48}
          className="absolute bottom-0 right-0"
        />
      </header>
      <section>
        <header className="flex justify-between">
          <span>최근 검색어</span>
          <span className="text-red-500">모두 지우기</span>
        </header>
        <div className="flex gap-4">
          <span>꿈</span>
          <span>#나아가야할 때</span>
          <span>기분</span>
        </div>
      </section>
      {/**검색어가 있을 때 보여야 함. */}
      {false && (
        <section className="flex flex-col items-center gap-8">
          <div className="w-[640px] h-[138px] border-2">card</div>
          <div className="w-[640px] h-[138px] border-2">card</div>
          <div className="w-[640px] h-[138px] border-2">card</div>
        </section>
      )}
      {/**검색어가 없을 때 보여야 함. */}
      {true && (
        <section>
          <header>
            <span>인기 검색어</span>
            <span>05.23 10:00 업데이트</span>
          </header>
          <div className="p-4">
            <div className="flex items-center justify-between mb-4">
              <span className="font-semibold">인기 검색어</span>
              <span className="text-sm text-gray-500">
                05.23 10:00 업데이트
              </span>
            </div>
            <div className="grid grid-cols-2 gap-x-8">
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="mr-2">1</span> 책추천
                </li>
                <li className="flex items-center">
                  <span className="mr-2">2</span> 짧은영언
                </li>
                <li className="flex items-center">
                  <span className="mr-2">3</span> 통기타여
                </li>
                <li className="flex items-center">
                  <span className="mr-2">4</span> 에세이
                </li>
                <li className="flex items-center">
                  <span className="mr-2">5</span> 하루한줄
                </li>
              </ul>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="mr-2">6</span> 책추천
                </li>
                <li className="flex items-center">
                  <span className="mr-2">7</span> 짧은영언
                </li>
                <li className="flex items-center">
                  <span className="mr-2">8</span> 통기타여
                </li>
                <li className="flex items-center">
                  <span className="mr-2">9</span> 에세이
                </li>
                <li className="flex items-center">
                  <span className="mr-2">10</span> 하루한줄
                </li>
              </ul>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
