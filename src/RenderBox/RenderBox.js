import React, {useState, useEffect} from "react";
import ControlPanel from "../ControlPanel/ControlPanel";
import {conditions as SelectCheckboxesConditions} from "../SelectCheckboxes/SelectCheckboxes";

export default function RenderBox (props) {

    const [empty, partially, checked] = SelectCheckboxesConditions;

    const [stateOfCheckboxesOfChildren, setStateOfCheckboxesOfChildren] = useState(empty);

    const [items, setItems/*Данный метод будет использован при фильтрации*/] = useState(props.items);

    function changeStateSelectCheckboxes (state){

        setStateOfCheckboxesOfChildren(state);
        
        const checkboxes = getCheckboxes();

        checkboxes.forEach(checkbox => checkbox.checked = state === checked);
    }

    function chooseCheckboxes(){
    
        //setStateOfCheckboxesOfChildren("selected-partially");
        //console.log(e, stateOfCheckboxesOfChildren);
        //Прямая работа с DOM; На мой взгляд не есть гуд и при первом изучении переделать на использование ref
        const checkboxes = getCheckboxes();
        const length = checkboxes.length;
        const checkedLength = checkboxes.filter(_=>_.checked).length;

        if(checkedLength === length){
            setStateOfCheckboxesOfChildren(checked);
        } else if(!checkedLength){
            setStateOfCheckboxesOfChildren(empty);
        } else {
            setStateOfCheckboxesOfChildren(partially);
        }
    }

    function getCheckboxes(){
        const tbody = document.querySelector("tbody");
        const checkboxes = [].slice.call(tbody.querySelectorAll("input[type='checkbox']"));
        return checkboxes;
    }

    let fn;

    switch(props.itemsName){
        /*case "": break;
        case "": break;
        case "": break;*/
        default: fn = RenderBook;
    }

    var selectCheckboxesProps = {
        condition: stateOfCheckboxesOfChildren,
        parentCallback: changeStateSelectCheckboxes
    };

    var buttonProps = {
        buttonText: props.buttonText
    };

    return <React.Fragment>
        <ControlPanel selectCheckboxesProps={selectCheckboxesProps} buttonProps={buttonProps} />
        <table onClick={chooseCheckboxes}>
            <thead>
                <tr>
                    <th></th>
                    <th>ISBN</th>
                    <th>Название</th>
                    <th>Автор</th>
                </tr>
            </thead>
            <tbody>
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