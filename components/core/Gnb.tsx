"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Cookies from "js-cookie";

export default function Gnb() {
  const pathName = usePathname();
  const pathParts = pathName.split("/").pop();

  const getTitle = (path?: string) => {
    switch (path) {
      case "addepigram":
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

  const showLogo = title === "Epigram";
  const isAuthPage = pathParts === "login" || pathParts === "join";
  const isBackPage = pathParts === "addepigram" || pathParts === "update" || pathParts === "search";

  return (
    <nav className="flex items-center justify-between w-full px-[120px] py-[26px] border-b border-line-#CFDBEA bg-white">
      {isAuthPage ? (
        <div></div>
      ) : isBackPage ? (
        <Link href="/epigrams" className="text-base font-bold">
          <Image src="/icons/left.svg" alt="back icon" width={36} height={36} />
        </Link>
      ) : (
        <Link href="/search">
          <Image src="/icons/search.svg" alt="search icon" width={36} height={36} />
        </Link>
      )}
      <div className="flex items-center gap-2">
        {showLogo && <Image src="/icons/logo.svg" alt="logo" width={48} height={48} />}
        <span className="text-[26px] font-bold">{title}</span>
      </div>
      <div className="flex items-center gap-2">
        {isAuthPage ? (
          <div></div>
        ) : pathParts === "update" ? null : (
          <Link href={`${Cookies.get("accessToken") ? "/mypage" : "/login"}`}>
            <Image src="/icons/me.svg" alt="user icon" width={36} height={36} />
          </Link>
        )}
      </div>
    </nav>
  );
}
