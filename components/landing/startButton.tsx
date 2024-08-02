"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { MainButton } from "../ui/MainButton";
import Cookies from "js-cookie";

interface IStartButtonProps {}
export default function StartButton(props: IStartButtonProps) {
  const router = useRouter();
  const [token, setToken] = useState(false);

  useEffect(() => {
    const redirectPage = async () => {
      const accessToken = Cookies.get("accessToken");
      if (accessToken) {
        setToken(true);
      }
    };

    redirectPage();
  }, []);

  const handleClick = () => {
    console.log(token);
    if (token) {
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
