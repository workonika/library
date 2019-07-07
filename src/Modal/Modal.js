import React, {useState, useEffect} from "react";
import "./Modal.css";

export default function Modal (){

    let cssClassModal = "fix substrate";

    return (
        <div className={cssClassModal}>
            <div className={"fix modal border background shadow"}>
                <div className={"header"}>
                    <h3>Заголовок модального окна</h3>
                    <span className={"close"} title={"Закрыть"}>закрыть</span>
                </div>
                Модальное окно
            </div>
        </div>
        );
}