import React, {useState} from "react";
import SelectCheckboxes from "../SelectCheckboxes/SelectCheckboxes";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";
import Clock from "../Clock/Clock";
import "./ControlPanel.css";

export default class ControlPanel extends React.Component {

    constructor(props){
        super(props);
        this.state = {modalVisibility: "hide"}
    }

    //const {condition, parentCallback} = props.selectCheckboxesProps;
    //const {buttonText} = props.buttonProps;
    //const [modalVisibility, setModalVisibility] = useState("hide");

    showModal = ()=>{
        this.setState({modalVisibility: ""});
    }

    hideModal = ()=>{
        this.setState({modalVisibility: "hide"});
    }
    
    render(){
        return <div className={"control-panel"}>
            <Modal visibility={this.state.modalVisibility} parentCallback={this.hideModal}/>
            <SelectCheckboxes {...this.props.selectCheckboxesProps}/>
            <Button {...this.props.buttonProps} parentCallback={this.showModal}/>
            <Clock />
        </div>;
    }
}