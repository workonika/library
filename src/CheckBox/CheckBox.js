import React, {useState, useEffect} from "react";

export default function CheckBox (props) {
    
    const id = props.id || Math.round(Math.random() *(new Date).getTime());
    const [checked, setChecked] = useState(false);
    const defaultText = "Сменить чекбокс";
    const labelText = props.labelText ? props.labelText: defaultText;

    const onCheckBoxChange = changeState;
    
    function changeState(){
        setChecked(!checked);
    }

    useEffect(()=>{
        const checkbox = document.getElementById(id);
        checkbox.checked = checked;
    });

    return <React.Fragment>
            <label htmlFor={id}>{labelText}</label>
            <input id={id} type="checkbox" defaultChecked={checked} onChange={onCheckBoxChange}/>
        </React.Fragment>
}