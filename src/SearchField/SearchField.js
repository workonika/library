import React from "react";

export default class SearchField extends React.Component {
    onInput = (e) => {
        e.persist();
        console.log(e);
    }

    render(){
        return <input type="text" onInput={this.onInput}/>;
    }
}