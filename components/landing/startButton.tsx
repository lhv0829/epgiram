"use client";

import { useRouter } from "next/navigation";
import { getCookieValue } from "@/lib/getCookie";
import { MainButton } from "../ui/MainButton";

interface IStartButtonProps {}
export default function StartButton(props: IStartButtonProps) {
  const router = useRouter();

  const handleClick = () => {
    const accessToken = getCookieValue("accessToken");
    if (accessToken) {
      router.push("/epigrams");
    } else {
      router.push("/login");
    }
  };

  return (
    <MainButton size={"lg"} onClick={handleClick}>
      시작하기
    </MainButton>
  );
}
