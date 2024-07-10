import { DescriptionStyled } from "./Description.styles";

interface DescriptionProps {
  children: string;
}

const Description = ({ children }: DescriptionProps) => {
  return <DescriptionStyled>{children}</DescriptionStyled>;
};

export default Description;
