import Image from "next/image";
import Section from "@/components/landing/Section";
import SubSection from "@/components/landing/SubSection";
import StartButton from "@/components/landing/startButton";

export default function Home() {
  return (
    <>
      <Section className="notebook-background items-center justify-center">
        <p className="text-3xl font-semibold font-iropke text-center mb-10">
          나만 갖고 있기엔
          <br /> 아까운 글이 있지 않나요?
        </p>
        <p className="text-gray-600 mb-12 font-iropke">
          다른 사람들과 감정을 공유해 보세요.
        </p>
        <StartButton />
      </Section>
      <Section className="bg-background relative">
        <div className="zigzag-pattern w-screen absolute top-0 left-0" />
        <div className="container mx-auto pt-20">
          <SubSection
            mainText="명언이나 글귀,\n토막 상식들을 공유해 보세요."
            subText="나만 알던 소중한 글들을\n다른 사람들에게 전파하세요."
            imageUrl="/images/landing01.png"
          />
          <SubSection
            reverse
            mainText="감정 상태에 따라,\n알맞은 위로를 받을 수 있어요."
            subText="태그를 통해 글을 모아 볼 수 있어요."
            imageUrl="/images/landing02.png"
          />
          <SubSection
            mainText="내가 요즘 어떤 감정 상태인지\n통계로 한눈에 볼 수 있어요."
            subText="감정 달력으로\n내 마음에 담긴 감정을 확인해보세요"
            imageUrl="/images/landing03.png"
          />
        </div>
      </Section>
      <Section className="flex items-center justify-center bg-gradient-to-b from-[#F5F7FA] to-[#EAEDF2] relative">
        <div className="flex flex-col items-center gap-y-[100px] mt-[270px] mb-20">
          <p className="text-3xl font-bold">
            사용자들이 직접
            <br />
            인용한 에피그램
          </p>
          <div className="w-[640px] h-[864px]  relative">
            <Image src="/images/landing04.png" alt="landing4" fill />
          </div>
        </div>
        <div className="w-screen absolute bottom-0 left-0 zigzag-pattern -scale-y-100" />
      </Section>
      <Section className="flex flex-col items-center justify-center notebook-background">
        <div className="relative w-[184px] h-[185px]">
          <Image src={"icons/logo2.svg"} alt="날마다에피그램" fill />
        </div>
        <StartButton />
      </Section>
    </>
  );
}
