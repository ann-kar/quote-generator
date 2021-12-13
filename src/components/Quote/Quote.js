import "./Quote.css";

function Quote(props) {

    return (
        <div className="Quote">
            <h1 className="Quote-author">{props.author}</h1>
            <p className="Quote-text">{props.quote}</p>
        </div>
    )
}

export default Quote;
