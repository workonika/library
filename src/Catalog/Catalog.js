import React from "react";
import RenderBox from "../RenderBox/RenderBox";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";

export default function Catalog() {
    function openModalWindow(){
        alert("Button Clicked");
    }

    const books = ["Война и мир", "Пукшин в погоне за счастьем", "Дадя Вася строитель", "Кузя"];

    return(
    <React.Fragment> 
        <h2>Каталог</h2>
        <RenderBox books={books} />
    </React.Fragment>);
}