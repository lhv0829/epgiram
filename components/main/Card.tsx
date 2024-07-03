interface ICArdProps {
  sentence: string;
  author: string;
  tags: string[];
}
export default function Card(props: ICArdProps) {
  return (
    <div className="*:font-iropke">
      <div className="border border-line-#CFDBEA p-6 rounded-2xl bg-blue-100 shodow w-full notebook-background">
        <p className="text-2xl text-black-600">{props.sentence}</p>
        <span className="block text-end mt-5 text-blue-400 text-2xl ">
          - {props.author} -
        </span>
      </div>
      <div className="flex justify-end gap-4 *:text-2xl *:text-blue-400 mt-2">
        {props.tags.map((t, index) => (
          <span key={index}>{t}</span>
        ))}
      </div>
    </div>
  );
}
