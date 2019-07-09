import React, {useState} from "react";
import SelectCheckboxes from "../SelectCheckboxes/SelectCheckboxes";

export default function RenderBox (props) {
  
    const [state, setState] = useState("checked");

    const [books, setBooks] = useState(props.books);

    function changeStateSelectCheckboxes (state){
        setState(state);
    }

    return <React.Fragment>
        <div className={"empty"}>
            <SelectCheckboxes condition={"selected-partially"} setState={changeStateSelectCheckboxes} />
            {state}
        </div>
        <ul>
            {books.map((book, idx)=><li key={idx}><input type="checkbox" id={book}></input>{book}</li>)}
        </ul>
    </React.Fragment>
}