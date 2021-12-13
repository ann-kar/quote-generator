import React, { useState, useEffect } from "react";

import NextButton from "./NextButton";
import PrevButton from "./PrevButton";
import Quote from "./Quote";

function Generator() {

    const [history, setHistory] = useState([]);
    const [next, setNext] = useState(true)
    const [previous, setPrevious] = useState(false);

    useEffect(() => {

        if (previous) {
            setHistory(history.filter((el, i) => i != history.length - 1));
            setPrevious(false)
        }

        if (next) {
            fetch('https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json')
                .then(response => {
                    return response.json();
                })
                .then(quotes => {
                    const num = Math.floor(Math.random() * (quotes.length - 1) + 1);
                    setHistory(history => [...history, quotes[num]]);
                    setNext(false);
                })
                .catch(error => console.log(error))
        }
    }, [next, previous]);
    
    return (
        <div>
            {(history.length > 0) && <Quote author={history[history.length - 1].author} quote={history[history.length - 1].quote} />}
            <PrevButton setPrevious={setPrevious} historyLength={history.length} />
            <NextButton setNext={setNext} />
        </div>
    )
}

export default Generator;
