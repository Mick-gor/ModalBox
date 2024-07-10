import * as Styles from "./Title.styles";

export type TitleProps = {
  color: "white" | "black";
  children: String;
};

const Title = ({ color, children }: TitleProps) => {
  return (
    <Styles.TitleContainer>
      <Styles.Title color={color}>{children}</Styles.Title>
    </Styles.TitleContainer>
  );
};

export default Title;
