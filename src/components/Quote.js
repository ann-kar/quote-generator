function Quote(props) {

    return (
        <div>
            <h1>{props.author}</h1>
            <p>{props.quote}</p>
        </div>
    )
}

export default Quote;
