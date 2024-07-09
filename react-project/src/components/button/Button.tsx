import { ButtonHTMLAttributes } from "react";

type ButtonProps = {
  children: string;
  variant: "white" | "black";
  onClick: () => void;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ children, variant, onClick }: ButtonProps) => {
  const buttonColor = variant === "white" ? "button-white" : "button-black";

  return (
    <button className={`button-content ${buttonColor}`} onClick={onClick}>
      {children}
    </button>
  );
};
export default Button;
