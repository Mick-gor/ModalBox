interface DescriptionProps {
  children: string;
}

const Description = ({ children }: DescriptionProps) => {
  return <p className="description-content">{children}</p>;
};

export default Description;
