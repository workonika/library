import React, {useState, useEffect} from "react";

export default function CheckBox (props) {
    
    const id = Math.round(Math.random() *(new Date).getTime());
    const [checkboxState, changeCheckboxState] = useState({checked: false});
    const defaultText = "Сменить чекбокс";

    const onCheckBoxChange = changeState;
    
    function changeState(){
        changeCheckboxState({checked: !checkboxState.checked});
    }

    useEffect(()=>{
        const checkbox = document.getElementById(id);
        checkbox.checked = checkboxState.checked;
    });

    return <React.Fragment>
            <label htmlFor={id}>{props.labelText ? props.labelText: defaultText}</label>
            <input id={id} type="checkbox" defaultChecked={checkboxState.checked} onChange={onCheckBoxChange}/>
        </React.Fragment>
}