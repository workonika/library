import React from "react";

export default class RenderBox extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidUpdate(prevProps){
        console.log("prevProps", prevProps);
    }
    
    render(){
        return (<ul>
            <li>Demo</li>
        </ul>);
    }
}