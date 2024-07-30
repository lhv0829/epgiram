"use client";

import { useRouter } from "next/navigation";
import { MainButton } from "../ui/MainButton";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";

interface IStartButtonProps {}
export default function StartButton(props: IStartButtonProps) {
  const router = useRouter();
  const [token, setToken] = useState(false);
  const { data: session, status } = useSession();
  console.log("client", session, status);
  useEffect(() => {
    const redirectPage = async () => {
      if (session && (session.accessToken || session?.idToken)) {
        setToken(true);
      }
    };

    redirectPage();
  }, [session]);

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
