import { Button } from "../ui/button";
import { Input } from "../ui/input";
import SocialBox from "./socialBox";

interface IRegisterFormProps {}
export default function RegisterForm(props: IRegisterFormProps) {
  return (
    <>
      <form className="flex flex-col gap-4">
        <label htmlFor="">이메일</label>
        <Input placeholder="이메일" />
        <label htmlFor="">비밀번호</label>
        <Input placeholder="비밀번호" />
        <Input placeholder="비밀번호 확인" />
        <label htmlFor="">닉네임</label>
        <Input placeholder="닉네임" />

        <Button variant="outline">가입하기</Button>
      </form>
      <SocialBox />
    </>
  );
}
