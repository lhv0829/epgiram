import { ReactNode } from "react";

const SearchWordChip = ({
  children,
  onClick,
}: {
  children: ReactNode;
  onClick: () => void;
}) => {
  return (
    <button type="button" onClick={onClick}>
      <span className="flex justify-center items-center w-fit px-3 py-2 rounded-[18px] bg-background font-pre text-black-300 text-lg md:text-xl md:rounded-[20px] lg:px-3.5 lg:py-3 lg:rounded-[22px] lg:text-2xl">
        {children}
      </span>
    </button>
  );
};

export default SearchWordChip;
