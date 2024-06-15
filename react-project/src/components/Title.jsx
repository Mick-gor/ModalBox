const Title = (props) => {
  const textColor = props.color === "white" ? "white" : "black";

  return (
    <div>
      <h1 className={textColor}>{props.children}</h1>
    </div>
  );
};

export default Title;
