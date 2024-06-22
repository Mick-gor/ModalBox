const Button = (props) => { 
    const backgroundColor = props.color === "white" ? "button-content-modal" : "";
    return (
        <button className={`button-content ${backgroundColor}`} onClick={props.onClick}>{props.children}</button>
    );
};
export default Button;
