import React, { useState } from "react";

function PrevButton(props) {

    const [disabled, setDisabled] = useState(true);

    if (props.historyLength >= 2 && disabled !== false) {
        setDisabled(false);
    } else if (props.historyLength < 2 && disabled === false) {
        setDisabled(true);
    }

    const showPrevious = () => {
        props.setPrevious(true);
    }

    return (
        <button className="PrevButton button" onClick={showPrevious} disabled={disabled}>Go to the previous quote</button>
    )
}

export default PrevButton;
