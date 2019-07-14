import React, {useState} from "react";
import SelectCheckboxes from "../SelectCheckboxes/SelectCheckboxes";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";
import "./ControlPanel.css";

export default function ControlPanel (props){
    const {condition, parentCallback} = props.selectCheckboxesProps;
    const {buttonText} = props.buttonProps;
    const [modalVisibility, setModalVisibility] = useState("hide");

    function hideShowModal() {
        
        setModalVisibility("");
        console.log(modalVisibility);
    }
    
    return <div className={"control-panel"}>
            <Modal visibility={modalVisibility}/>
            <SelectCheckboxes condition={condition} parentCallback={parentCallback}/>
            <Button buttonText={buttonText} parentCallback={hideShowModal}/>
        </div>;
}