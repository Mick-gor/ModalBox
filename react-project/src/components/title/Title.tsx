import * as Styled from "./Title.styles";

export type TitleProps = {
  color: "white" | "black";
  children: String;
};

const Title = ({ color, children }: TitleProps) => {
  return (
    <Styled.TitleContainer>
      <Styled.Title color={color}>{children}</Styled.Title>
    </Styled.TitleContainer>
  );
};

export default Title;
