import React, {useState, useEffect} from "react";
import { toggleClass } from "../library/fn";
import "./SelectCheckboxes.css";

export const conditions = ["", "selected-partially", "checked"];

export default function SelectCheckboxes (props){
   
    const [stateAddedCssClass, setStateAddedCssClass] = useState(props.condition);

    const [empty, partially, checked] = conditions;

    let cssClasses = "checkbox big";

    if(props.condition !== stateAddedCssClass){
        setStateAddedCssClass(props.condition);
    }

    function changeState(){
        const evaluatedClass = stateAddedCssClass === checked || stateAddedCssClass === partially  ? empty : checked;
        setStateAddedCssClass(evaluatedClass);
        props.parentCallback(evaluatedClass);
    }

    return <div onClick={changeState} className={toggleClass(cssClasses, stateAddedCssClass)} title="Выделить всё"></div>;
}