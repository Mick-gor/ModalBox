import * as Styled from "./Description.styles";

interface DescriptionProps {
  children: string;
}

const Description = ({ children }: DescriptionProps) => {
  return (
    <Styled.DescriptionContainer>
      <Styled.Description>{children}</Styled.Description>
    </Styled.DescriptionContainer>
  );
};

export default Description;
