import React, {useState, useEffect} from "react";
import "./SelectCheckboxes.css";

export default function SelectCheckboxes (props){
    const [state, setState] = useState(0);

    function changeState(){
        setState(state === 0 ? 1 : 0);
    }

    return <div onClick={changeState} className={"custom-checkbox medium"}></div>;
}