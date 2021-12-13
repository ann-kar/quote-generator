function NextButton(props) {

    const generateNew = () => {
        props.setNext(true)
    }
    
    return (
        <button onClick={generateNew}>Get a new quote</button>
    )
}

export default NextButton;
