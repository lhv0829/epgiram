import Image from "next/image";

interface ISocialBoxProps {}
export default function SocialBox(props: ISocialBoxProps) {
  return (
    <div className="mt-14 flex gap-4 justify-center">
      <div className="oauth">
        <Image src="/icons/naver.svg" alt="naver" height={22} width={22} />
      </div>
      <div className="oauth">
        <Image src="/icons/google.svg" alt="google" height={27} width={27} />
      </div>
      <div className="oauth">
        <Image src="/icons/kakao.svg" alt="kakao" height={30} width={27} />
      </div>
    </div>
  );
}
