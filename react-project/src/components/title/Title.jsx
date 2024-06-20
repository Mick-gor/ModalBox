const Title = (props) => {
  const textColor = props.color === "white" ? "white" : "black";

  return (
    <div>
      <p className={`title-content ${textColor}`}>{props.children}</p>
    </div>
  );
};

export default Title;
