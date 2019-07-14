import React from "react";
import { toggleClass } from "../library/fn";
import "./Modal.css";

export default class Modal extends React.Component{
    //В данный момент хардкод формы заполнения книги
    
    constructor(props){
        super(props);
        this.cssClassModal = "fix substrate";
        
        this.state = {
            visibility: this.props.visibility
        }
    }

    randomizer = () => Math.floor(Math.random() * (new Date).getTime());

    isbnId = this.randomizer();
    nameId = this.randomizer();
    authorId = this.randomizer();

    hideModal = () => { 
        this.setState((prevState, props)=>{console.log(prevState, props)}, function(a,b,c){console.log(a,b,c)});
    }

    render(){
        return ( 
            <div className={toggleClass(this.cssClassModal, this.state.visibility)}>
                <div className={"fix modal border background shadow"}>
                    <div className={"header"}>
                        <h3>Заголовок модального окна</h3>
                        <span className={"close"} title={"Закрыть"} onClick={this.hideModal}>закрыть</span>
                    </div>
                    <div>
                        <form>
                            <label htmlFor={this.isbnId} >ISBN:</label><input name="isbn" type="text" id={this.isbnId}/>
                            <label htmlFor={this.nameId} >name:</label><input name="name" type="text" id={this.nameId}/>
                            <label htmlFor={this.authorId} >author:</label><input name="author" type="text" id={this.authorId}/>
                            <button>Записать</button>
                        </form>
                    </div>
                </div>
            </div>
            );
    }
}