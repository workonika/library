import React, {useState, useEffect} from "react";
import SelectCheckboxes from "../SelectCheckboxes/SelectCheckboxes";

export default function RenderBox (props) {
  
    const [stateOfCheckboxesOfChildren, setStateOfCheckboxesOfChildren] = useState("");

    const [items, setItems/*Данный метод будет использован при фильтрации*/] = useState(props.items);

    function changeStateSelectCheckboxes (state){
        setStateOfCheckboxesOfChildren(state);
    }

    function chooseCheckboxes(e){
        e.persist();
        console.log(e);
        setStateOfCheckboxesOfChildren("selected-partially");
    }

    let fn;

    switch(props.itemsName){
        /*case "": break;
        case "": break;
        case "": break;*/
        default: fn = RenderBook;
    }

    return <React.Fragment>
        <table>
            <thead>
                <tr>
                    <th><SelectCheckboxes condition={stateOfCheckboxesOfChildren} parentCallback={changeStateSelectCheckboxes} /></th>
                    <th>ISBN</th>
                    <th>Название</th>
                    <th>Автор</th>
                </tr>
            </thead>
            <tbody onClick={chooseCheckboxes}>
                {
                    items.map((item, idx)=>fn(item, idx))
                }
            </tbody>
        </table>
    </React.Fragment>
}

function RenderBook(book, idx){
    const {name, ISBN13, author} = book;
    var book = <tr key={idx}>
            <td><input type="checkbox" id={ISBN13} /></td>
            <td>{ISBN13}</td>
            <td>{name}</td>
            <td>{author}</td>
        </tr>;
    return book;
}