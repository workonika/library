import React, {useState} from "react";
import SelectCheckboxes from "../SelectCheckboxes/SelectCheckboxes";

export default function RenderBox (props) {
  
    const [state, setState] = useState("checked");

    const [items, setItems/*Данный метод будет использован при фильтрации*/] = useState(props.items);

    function changeStateSelectCheckboxes (state){
        setState(state);
    }

    let fn;

    switch(props.itemsName){
        /*case "": break;
        case "": break;
        case "": break;*/
        default: fn = RenderBook;
    }

    return <React.Fragment>
        <div className={"empty"}>
            <SelectCheckboxes condition={"selected-partially"} setState={changeStateSelectCheckboxes} />
            {state}
        </div>
        <ul>
            {
                items.map((item, idx)=>fn(item, idx))
            }
        </ul>
    </React.Fragment>
}

function RenderBook(book, idx){
    const {name, ISBN13, author} = book;
    var book = <li key={idx}>
        <span><input type="checkbox" id={ISBN13} /></span><span>{ISBN13}</span><span>{name}</span>
        <span>{author}</span>
        </li>;
    return book;
}