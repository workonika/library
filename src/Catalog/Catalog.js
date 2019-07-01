import React from "react";
import SelectBox from "../SelectBox/SelectBox";

export default class Catalog extends React.Component {
    render(){
        return <React.Fragment><h2>Каталог</h2><div><SelectBox /></div></React.Fragment>;
    }
}