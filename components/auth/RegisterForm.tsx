import TextField from "../core/input/textField";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import SocialBox from "./socialBox";

interface IRegisterFormProps {}
export default function RegisterForm(props: IRegisterFormProps) {
  return (
    <>
      <form className="flex flex-col gap-4 w-[640px]">
        <label htmlFor="">이메일</label>
        <TextField
          className="textField-solid"
          error={false}
          placeholder="이메일"
        />
        <label htmlFor="">비밀번호</label>
        <TextField
          className="textField-solid"
          error={false}
          placeholder="비밀번호"
        />
        <TextField
          className="textField-solid"
          error={false}
          placeholder="비밀번호 확인"
        />
        <label htmlFor="">닉네임</label>
        <TextField
          className="textField-solid"
          error={false}
          placeholder="닉네임"
        />

        <Button variant="outline">가입하기</Button>
      </form>
      <SocialBox />
    </>
  );
}
