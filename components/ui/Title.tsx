import { ReactNode } from "react";

const Title = ({ children }: { children: ReactNode }) => {
  return <p className="font-pre text-black-600 text-lg font-semibold lg:text-2xl">{children}</p>;
};

export default Title;
