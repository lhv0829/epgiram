import Link from "next/link";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import SocialBox from "./socialBox";

interface IAuthFOrmProps {}
export default function LoginForm(props: IAuthFOrmProps) {
  return (
    <>
      <form className="flex flex-col gap-4">
        <Input placeholder="이메일" />
        <Input placeholder="비밀번호" />
        <Button variant="outline">로그인</Button>
      </form>
      {/**로그인 페이지에서만 나와야함. */}
      <div className="text-right">
        <span>회원이 아니신가요?</span>
        <Link href={"../register"}>가입하기</Link>
      </div>
      <SocialBox />
    </>
  );
}
