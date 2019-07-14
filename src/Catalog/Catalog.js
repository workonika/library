import React from "react";
import RenderBox from "../RenderBox/RenderBox";
import Modal from "../Modal/Modal";

export const titles = [
    {title: "Книги", path: "/"}, 
    {title: "Издательства", path: "/publishers/"}, 
    {title: "Необходимо купить", path: "/have-to-buy/"}, 
    {title: "Магазины где куплены электронные книги", path: "/sources/"}];

    const itemsNameMap = {books: "Добавить книгу", publishers: "Добавить изд-во"};

    const categoryMapper = ["Художественная литература", "Детская литература", "Техническая литература"];

    const books = [
        {category: 0, parentCategory: null, name: "Война и мир", ISBN13: "978-0672322235", author: "Михельсон В."}, 
        {category: 1, parentCategory: 0, name: "Пукшин в погоне за счастьем", ISBN13: "978-0672322235", author: "Михельсон В."}, 
        {category: 0, parentCategory: null, name: "Дадя Вася строитель", ISBN13: "978-0672322235", author: "Михельсон В."}, 
        {category: 2, parentCategory: null, name: "Кузя", ISBN13: "978-0672322235", author: "Михельсон В."}
    ];

export function Books(props) {
    var props = { items: books, itemsName: "books", buttonText: itemsNameMap.books};
    return(
        <React.Fragment> 
            <h2>{titles[0].title}</h2>
            <RenderBox {...props} /> 
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