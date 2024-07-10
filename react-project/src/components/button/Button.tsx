import { ButtonHTMLAttributes } from "react";
import * as Styled from "./Button.styles";

export type ButtonProps = {
  children: string;
  variant: "white" | "black";
  onClick: () => void;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ children, variant, onClick }: ButtonProps) => {
  return (
    <Styled.Button variant={variant} onClick={onClick}>
      {children}
    </Styled.Button>
  );
};
export default Button;
