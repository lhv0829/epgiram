import { ReactNode } from "react";
import { useFormStatus } from "react-dom";
import { MainButton } from "../ui/MainButton";

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
