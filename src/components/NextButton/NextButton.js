function NextButton(props) {

    const generateNew = () => {
        props.setNext(true)
    }
    
    return (
        <button className="NextButton button" onClick={generateNew}>Get a new quote</button>
    )
}

export default NextButton;
