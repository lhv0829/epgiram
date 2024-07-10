import { ReactNode } from "react";
import { MainButton } from "../ui/MainButton";
import { useFormStatus } from "react-dom";

interface IAuthButtonProps {
  isFormValid: boolean;
  children: ReactNode;
}
export default function AuthButton(props: IAuthButtonProps) {
  const { pending } = useFormStatus();

  return (
    <MainButton
      type="submit"
      size="3xl"
      disabled={!props.isFormValid || pending}
    >
      {props.children}
    </MainButton>
  );
}
