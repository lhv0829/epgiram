"use client";

import { useRouter } from "next/navigation";
import { MainButton } from "../ui/MainButton";
import { useEffect, useState } from "react";

interface IStartButtonProps {}
export default function StartButton(props: IStartButtonProps) {
  const router = useRouter();

  const [token, setToken] = useState("");

  useEffect(() => {
    async function fetchTokens() {
      const response = await fetch("/api/cookie", {
        method: "GET",
        credentials: "include",
      });
      const data = await response.json();
      console.log("Fetched Tokens:", data);
      setToken(data.accessToken);
    }

    fetchTokens();
  }, []);

  const handleClick = () => {
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
