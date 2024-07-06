interface DescProps {
  children: string;
}

const Description = ({ children }: DescProps) => (
  <p className="description-content">{children}</p>
);

export default Description;
