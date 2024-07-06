interface ButtonProps {
  children: string;
  variant: "button-black" | "button-white";
  onClick: () => void;
  type?: "submit" | "reset" | "button" | undefined;
}

const Button = ({ children, variant, onClick }: ButtonProps) => {
  return (
    <button className={`button-content ${variant}`} onClick={onClick}>
      {children}
    </button>
  );
};
export default Button;
