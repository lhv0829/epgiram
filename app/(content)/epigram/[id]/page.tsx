import HashTag from "@/components/epigram/HashTag";
import { SecondaryButton } from "@/components/ui/SecondaryButton";
import { ArrowUpRightFromSquare, ThumbsUp } from "lucide-react";
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const { id } = params;
  return {
    title: id,
  };
}

export default function EpigramDetail() {
  return (
    <div className="w-full h-full bg-background">
      <div className="notebook-pattern h-[392px] w-full flex justify-center">
        <div className="w-[640px] mt-8 flex flex-col gap-10">
          <div className="w-full mx-auto flex flex-col gap-8">
            <div className="flex items-center gap-6">
              <HashTag>꿈을이루고싶을때</HashTag>
              <HashTag>나아가야할때</HashTag>
            </div>
            <div className="font-iropke text-3xl text-black-700">오랫동안 꿈을 그리는 사람은 마침내 그 꿈을 닮아 간다.</div>
            <div className="font-iropke text-2xl text-blue-400 text-right">- 앙드레 말로 -</div>
          </div>
          <div className="flex gap-6 items-center justify-center">
            <SecondaryButton variant="like" size="sm" text="xl" bold="semibold">
              <ThumbsUp />
              <span>123</span>
            </SecondaryButton>
            <SecondaryButton variant="share" size="md" text="xl" bold="medium">
              <span>왕도로 가는 길</span>
              <ArrowUpRightFromSquare />
            </SecondaryButton>
          </div>
        </div>
      </div>
      <div className="w-full zigzag-pattern"></div>
      <div className="w-[640px] mt-12 mx-auto">
        <p className="font-pre text-black-600 text-lg font-semibold lg:text-xl">댓글(3)</p>
      </div>
    </div>
  );
}
