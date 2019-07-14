import React, {useState, useEffect} from "react";

export default function Button(props){
    const buttonText = props.buttonText ? props.buttonText : "Кнопка";
    return <button onClick={props.parentCallback}>{buttonText}</button>
}