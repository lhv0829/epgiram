import { LucideSearch, Smile } from "lucide-react";
import { SecondaryButton } from "../ui/SecondaryButton";
import { ReactNode } from "react";
import Link from "next/link";

interface NoContentProps {
  link: string;
  button: string;
  children: ReactNode;
}

const NoContent = ({ link, button, children }: NoContentProps) => {
  return (
    <div className="flex flex-col gap-6 px-[76px] py-9 lg:px-[154px] lg:py-[76px] w-[640px] h-[488px]">
      <div className="flex justify-center items-center text-blue-300">
        <div className="relative">
          <LucideSearch className="w-36 h-36" />
          <Smile className="w-[120px] h-[120px] absolute top-1.5 left-1.5" />
        </div>
      </div>
      <div className="flex flex-col gap-12 justify-center items-center">
        <p className="text-center text-black-600 text-xl font-pre">{children}</p>
        <Link href={link}>
          <SecondaryButton variant="icon" size="xl" text="xl" className="mx-auto">
            {button}
          </SecondaryButton>
        </Link>
      </div>
    </div>
  );
};

export default NoContent;
