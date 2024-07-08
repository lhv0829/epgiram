"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";

interface IGnbprops {}

export default function Gnb(props: IGnbprops) {
  const pathName = usePathname();
  const pathParts = pathName.split("/").pop();

  const getTitle = (path?: string) => {
    switch (path) {
      case "create":
        return "에피그램 만들기";
      case "me":
        return "내 정보";
      case "update":
        return "프로필 수정";
      case "search":
        return "에피그램 검색";
      default:
        return "Epigram";
    }
  };

  const title = getTitle(pathParts);

  const showLogo =
    pathParts === undefined || pathParts === "" || pathParts === "epigram";

  return (
    <nav className="flex items-center justify-between w-full px-[120px] py-[26px] border-b border-line-#CFDBEA">
      {pathParts === "create" || pathParts === "update" ? (
        <button className="text-base font-bold">
          <Image src="/icons/left.svg" alt="back icon" width={36} height={36} />
        </button>
      ) : (
        <button>
          <Image
            src="/icons/search.svg"
            alt="search icon"
            width={36}
            height={36}
          />
        </button>
      )}
      <div className="flex items-center gap-2">
        {showLogo && (
          <Image src="/icons/logo.svg" alt="logo" width={48} height={48} />
        )}
        <span className="text-[26px] font-bold">{title}</span>
      </div>
      <div className="flex items-center gap-2">
        {pathParts === "create" ? (
          <button className="text-base font-bold text-white px-4 border h-11 rounded-lg bg-black-500">
            완료
          </button>
        ) : pathParts === "update" ? null : (
          <button>
            <Image src="/icons/me.svg" alt="user icon" width={36} height={36} />
          </button>
        )}
      </div>
    </nav>
  );
}
