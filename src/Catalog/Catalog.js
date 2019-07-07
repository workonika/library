import React from "react";
import CheckBox from "../CheckBox/CheckBox";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";

export default function Catalog() {
    function openModalWindow(){
        alert("Button Clicked");
    }

    return(
    <React.Fragment> 
        <h2>Каталог</h2>
        <Modal />
        <div><Button buttonText={"+ книгу"} onClick={openModalWindow}/></div>
        <div><CheckBox labelText={"Это каталог"}/></div>
        <div><CheckBox /></div>
        <div><CheckBox /></div>
        <div><CheckBox /></div>
    </React.Fragment>);
}