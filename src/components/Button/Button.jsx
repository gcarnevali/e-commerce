const Button = (props) => {

    const styleBtn = {
        backgrounColor: props.color
    };
    
    return <button onClick={props.onClick} style={styleBtn}>{props.label}</button>
}

export default Button;