import React, {useState, useEffect} from "react";
import { toggleClass } from "../library/fn";
import "./SelectCheckboxes.css";

export default function SelectCheckboxes (props){
    
    const [stateAddedCssClass, setStateAddedCssClass] = useState(props.condition);
    let cssClasses = "checkbox big";

    function changeState(){
        const evaluatedClass = stateAddedCssClass === "checked" || stateAddedCssClass === "selected-partially"  ? "" : "checked";
        setStateAddedCssClass(evaluatedClass);
        props.parentCallback(evaluatedClass);
    }

    return <div onClick={changeState} className={toggleClass(cssClasses, stateAddedCssClass)} title="Выделить всё"></div>;
}