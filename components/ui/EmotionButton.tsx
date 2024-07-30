import { ReactNode } from "react";

interface EmotionButtonProps {
  children: ReactNode;
}

const EmotionButton = ({ children }: EmotionButtonProps) => {
  return <button className="rounded-2xl bg-[#AFBACD26] bg-opacity-15 p-4 ">{children}</button>;
};

export default EmotionButton;
