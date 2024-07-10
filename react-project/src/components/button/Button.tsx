import { ButtonHTMLAttributes } from "react";
import { ButtonStyled } from "./Button.styles";

export type ButtonProps = {
  children: string;
  variant: "white" | "black";
  onClick: () => void;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ children, variant, onClick }: ButtonProps) => {
  return (
    <ButtonStyled variant={variant} onClick={onClick}>
      {children}
    </ButtonStyled>
  );
};
export default Button;
