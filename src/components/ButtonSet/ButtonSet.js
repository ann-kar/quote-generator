import "./ButtonSet.css";

function ButtonSet(props) {

    return (
        <div className="ButtonSet">
            {props.children}
        </div>
    )
}

export default ButtonSet;