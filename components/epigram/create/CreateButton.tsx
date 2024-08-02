import { MainButton } from "@/components/ui/MainButton";
import { ReactNode } from "react";
import { useFormStatus } from "react-dom";

interface ICreateButtonProps {
  isFormSubmit: boolean;
  children: ReactNode;
}
export default function CreateButton(props: ICreateButtonProps) {
  const { pending } = useFormStatus();

  return (
    <MainButton
      type="submit"
      size="3xl"
      disabled={!props.isFormSubmit || pending}
    >
      {props.children}
    </MainButton>
  );
}
