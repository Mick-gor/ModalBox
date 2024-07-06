type TitleProps = {
  color: "white" | "black";
  children: String;
}

const Title = ({color, children}: TitleProps) => {
  return (
    <div>
      <p className={`title-content ${color}`}>{children}</p>
    </div>
  );
};

export default Title;
