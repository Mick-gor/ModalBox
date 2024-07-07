interface DescProps {
  children: string;
}

const Description = ({ children }: DescProps) => {
  return <p className="description-content">{children}</p>;
};

export default Description;
