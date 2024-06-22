const Button = (props) => { 
    return (
        <button className={`button-content ${props.variant === "openModal" ? "button-white" : "button-black"}`} onClick={props.onClick}>{props.children}</button>
    );
};
export default Button;
