import React, { useState, useEffect } from "react";

import Button from "./Button";

function Generator() {

    const [author, setAuthor] = useState(null);
    const [quote, setQuote] = useState(null);
    const [next, setNext] = useState(false);

   useEffect(() => {

        fetch('https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json')
            .then(response => {
                return response.json();
            })
            .then(quotes => {
                const num = Math.floor(Math.random() * (quotes.length - 1) + 1);
                setQuote(quotes[num].quote);
                setAuthor(quotes[num].author);
                setNext(false);            
            })
            .catch(error => console.log(error))    
    }, [next]);
    
    return (
        <div>
            <h1>{author}</h1>
            <p>{quote}</p>
            <Button text="Get a new quote" setNext={setNext} />
        </div>
    )
}

export default Generator;
