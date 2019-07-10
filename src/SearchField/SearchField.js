import React from "react";
import "./SearchField.css";

export default function SearchField (props) {
    function onInput (e) {
        e.persist();
        console.log(e);
    }

    return <div className={"search"}><input type="text" onInput={onInput} placeholder="Начните вводить название"/></div>;
}