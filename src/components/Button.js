function Button(props) {

    const generateNew = () => {
        props.setNext(true)
    }
    
    return (
        <button onClick={generateNew}>{props.text}</button>
    )
}

export default Button;
