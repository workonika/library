import React from "react";

export default function SearchField (props) {
    function onInput (e) {
        e.persist();
        console.log(e);
    }

    return <input type="text" onInput={onInput}/>;
}