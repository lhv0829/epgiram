import { useSearch } from "@/contexts/SearchProvider";

interface ISearchControllerProps {}
export default function SearchController(props: ISearchControllerProps) {
  const { resetWord } = useSearch();
  return (
    <div className="flex justify-between">
      <span className="text-2xl">최근 검색어</span>
      <span
        className="text-error text-lg font-semibold cursor-pointer"
        onClick={resetWord}
      >
        모두 지우기
      </span>
    </div>
  );
}
