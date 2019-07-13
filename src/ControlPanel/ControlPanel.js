import React, {useState} from "react";
import SelectCheckboxes from "../SelectCheckboxes/SelectCheckboxes";
import Button from "../Button/Button";

export default function ControlPanel (props){
    const {condition, parentCallback} = props.selectCheckboxesProps;
    const {buttonText} = props.buttonProps;
    
    return <div>
        <SelectCheckboxes condition={condition} parentCallback={parentCallback}/>
        <Button buttonText={buttonText}/>
        </div>;
}