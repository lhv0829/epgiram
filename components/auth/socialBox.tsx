import Image from "next/image";

interface ISocialBoxProps {}
export default function SocialBox(props: ISocialBoxProps) {
  return (
    <div className="mt-14 flex flex-col gap-10 justify-center">
      <div className="flex items-center justify-center gap-x-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="181"
          height="2"
          viewBox="0 0 181 2"
          fill="none"
        >
          <path d="M0.5 1H180.5" stroke="#E0E0E0" />
        </svg>
        <span className="text-[#ABB8CE] text-xl">SNS 계정으로 로그인 하기</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="181"
          height="2"
          viewBox="0 0 181 2"
          fill="none"
        >
          <path d="M0.5 1H180.5" stroke="#E0E0E0" />
        </svg>
      </div>
      <div className="flex justify-center gap-x-4">
        <div className="oauth">
          <Image src="/icons/google.svg" alt="google" height={27} width={27} />
        </div>
        <div className="oauth">
          <Image src="/icons/kakao.svg" alt="kakao" height={30} width={27} />
        </div>
      </div>
    </div>
  );
}
