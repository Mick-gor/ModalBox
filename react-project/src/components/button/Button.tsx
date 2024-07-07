interface ButtonProps {
  children: string;
  variant: "white" | "black";
  onClick: () => void;
}

const Button = ({ children, variant, onClick }: ButtonProps) => {
  const buttonColor = variant === "white" ? "button-white" : "button-black";
  return (
    <button className={`button-content ${buttonColor}`} onClick={onClick}>
      {children}
    </button>
  );
};
export default Button;
