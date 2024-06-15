function Title(props) {
  const textColor = props.color === "white" ? "white" : "black";
  return (
    <div>
      <h1 className={textColor}>Lorem Ipsum</h1>
    </div>
  );
}

export default Title;
