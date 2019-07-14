import React from "react";
import { toggleClass } from "../library/fn";
import "./Modal.css";

export default function Modal(props) {
    //В данный момент хардкод формы заполнения книги
   
    let cssClassModal = "fix substrate";

    const randomizer = () => Math.floor(Math.random() * (new Date).getTime());

    const isbnId = randomizer();
    const nameId = randomizer();
    const authorId = randomizer();

    return ( 
        <div className={toggleClass(cssClassModal, props.visibility)}>
            <div className={"fix modal border background shadow"}>
                <div className={"header"}>
                    <h3>Заголовок модального окна</h3>
                    <span className={"close"} title={"Закрыть"} onClick={props.parentCallback}>закрыть</span>
                </div>
                <div>
                    <form>
                        <label htmlFor={isbnId} >ISBN:</label><input name="isbn" type="text" id={isbnId}/>
                        <label htmlFor={nameId} >name:</label><input name="name" type="text" id={nameId}/>
                        <label htmlFor={authorId} >author:</label><input name="author" type="text" id={authorId}/>
                        <button>Записать</button>
                    </form>
                </div>
            </div>
        </div>
        );
}