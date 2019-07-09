import React, {useState} from "react";
import SelectCheckboxes from "../SelectCheckboxes/SelectCheckboxes";

export default function RenderBox (props) {
  
    const [state, setState] = useState(true);

    const [books, setBooks] = useState(props.books);

    function changeStateSelectCheckboxes (state){
        setState(state);
    }

    return <React.Fragmet>
        <div className={"empty"}>
            <SelectCheckboxes condition={"selected-partially"} setState={changeStateSelectCheckboxes} />
        </div>
        <ul>
            {books.map(book=><li><input type="checkbox" id={book}></input>{book}</li>)}
        </ul>
    </React.Fragmet>
}