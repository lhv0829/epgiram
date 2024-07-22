import { ReactNode } from "react";

const HashTag = ({ children }: { children: ReactNode }) => {
  return <p className="font-pre text-xl text-blue-400">#{children}</p>;
};

export default HashTag;
