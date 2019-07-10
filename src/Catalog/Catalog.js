import React from "react";
import RenderBox from "../RenderBox/RenderBox";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";

export const titles = [
    {title: "Книги", path: "/"}, 
    {title: "Издательства", path: "/publishers/"}, 
    {title: "Необходимо купить", path: "/have-to-buy/"}, 
    {title: "Магазины где куплены электронные книги", path: "/sources/"}];

    const itemsName = ["books", "publishers"];

    const books = [
        {name: "Война и мир", ISBN13: "978-0672322235", author: "Михельсон В."}, 
        {name: "Пукшин в погоне за счастьем", ISBN13: "978-0672322235", author: "Михельсон В."}, 
        {name: "Дадя Вася строитель", ISBN13: "978-0672322235", author: "Михельсон В."}, 
        {name: "Кузя", ISBN13: "978-0672322235", author: "Михельсон В."}
    ];

export function Books(props) {

    function openModalWindow(){
        alert("Button Clicked");
    }

    return(
        <React.Fragment> 
            <h2>{titles[0].title}</h2>
            <RenderBox items={books} itemsName={"books"}/>
        </React.Fragment>
        );
}

export function Publishers () {
    return <h2>{titles[1].title}</h2>;
}

export function HaveToBuy () {
    return <h2>{titles[2].title}</h2>;
}

export function SourcesOfEBooks () {
    return <h2>{titles[3].title}</h2>;
}