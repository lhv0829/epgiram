import Comment from "@/components/main/Comment";
import Card from "@/components/main/Card";

export default function Main() {
  const cardProps = {
    sentence: "오랫동안 꿈을 그리는 사람은 마침내 그 꿈을 닮아 간다.",
    author: "앙드레 말로",
    tags: ["#나아가야할때", "#꿈을이루고싶을때"],
  };

  const commentProps1 = {
    username: "지킬과 하이드",
    timeAgo: "1시간 전",
    content:
      "오늘 하루 우울했었는데 덕분에 많은 힘 얻고 갑니다. 연금술사 책 다시 사서 오랜만에 읽어 봐야겠어요!",
    me: true,
  };

  const commentProps2 = {
    username: "지킬과 하이드",
    timeAgo: "1시간 전",
    content:
      "오늘 하루 우울했었는데 덕분에 많은 힘 얻고 갑니다. 연금술사 책 다시 사서 오랜만에 읽어 봐야겠어요!",
  };

  return (
    <div>
      <h1>Main</h1>
      <div className="flex flex-col gap-4 w-[700px]">
        <Card
          {...{
            sentence:
              "이 세상에는 위대한 진실이 하나 있어. 무언가를 온 마음을 다해 원한다면, 반드시 그렇게 된다는 거야. 무언가를 바라는 마음은 곧 우주의 마음으로부터 비롯된 것이기 때문이지.",
            author: "파울로 코엘료",
            tags: ["#나아가야할때", "#꿈을이루고싶을때"],
          }}
        />
        {[...Array(2)].map((_, index) => (
          <Card key={index} {...cardProps} />
        ))}
      </div>
      <div className="flex flex-col items-center justify-center gap-4">
        <Comment {...commentProps1} />
        <Comment {...commentProps2} />
      </div>
    </div>
  );
}
