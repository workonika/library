import React, {useState, useEffect} from "react";
import "./SelectCheckboxes.css";

export default function SelectCheckboxes (props){
    const [state, setState] = useState(0);

    function changeState(){
        setState(state === 0 ? 1 : 0);
        props.setState(state);
    }

    return <div onClick={changeState} className={props.condition}>{props.condition}</div>;
}