import { Tag } from "@/lib/type";

interface ICardProps {
  sentence: string;
  author: string;
  tags: Array<Tag>;
}

export default function Card(props: ICardProps) {
  return (
    <div className="font-iropke">
      <div className="border border-line-#CFDBEA p-6 rounded-2xl bg-blue-100 shadow w-full notebook-pattern">
        <p className="text-2xl text-black-600">{props?.sentence}</p>
        <span className="block text-end mt-5 text-blue-400 text-2xl ">- {props?.author} -</span>
      </div>
      <div className="flex justify-end gap-4 text-2xl text-blue-400 mt-2">
        {props?.tags?.map((tag) => (
          <span key={tag.id}>#{tag.name}</span>
        ))}
      </div>
    </div>
  );
}
