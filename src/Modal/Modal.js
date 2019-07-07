import React, {useState, useEffect} from "react";
import "./Modal.css";

export default function Modal (){

    let cssClassModal = "fix substrate";

    function addREmoveClass(cssClass, str){

        return function(){
            let strMap = str.split(/\s/);
            if(strMap.indexOf(cssClass) === -1){
                strMap.push(cssClass);
                return strMap.join(" ");
            } else {
                return strMap.filter(str=>str != cssClass);
            }
        }
    }

    return (
        <div className={cssClassModal}>
            <div className={"fix modal border background shadow"}>
                <div className={"header"}>
                    <h3>Заголовок модального окна</h3>
                    <span className={"close"} title={"Закрыть"} onClick={addREmoveClass("hide", cssClassModal)}>закрыть</span>
                </div>
                Модальное окно
            </div>
        </div>
        );
}