import { oauth } from "./action";

export default function Oauth() {
  return (
    <div>
      <h1>Oauth</h1>
      <form action={oauth}>
        <input
          type="text"
          name="nickname"
          placeholder="닉네임을 입력해 주세요."
        />
        <button type="submit">전송</button>
      </form>
    </div>
  );
}
