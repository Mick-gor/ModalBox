import { TitleStyled } from "./Title.styles";

export type TitleProps = {
  color: "white" | "black";
  children: String;
};

const Title = ({ color, children }: TitleProps) => {
  return <TitleStyled color={color}>{children}</TitleStyled>;
};

export default Title;
