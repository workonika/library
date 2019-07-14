import React from "react";

export default class Clock extends React.Component {
    constructor(props){
        super(props);
        this.launchClock();
        this.state = {currentTime:new Date}
    }

    launchClock(){
        setInterval(()=>{
            this.setState({currentTime: new Date});
        }, 1000);
    }

    render(){
        return <div>
            <AnalogDisplay time={this.state.currentTime}/>
            <DigitalDisplay time={this.state.currentTime}/>
            </div>
    }
}

function DigitalDisplay(props){
    return <div>{props.time.toLocaleString()}</div>
}

function AnalogDisplay(props){

    let date = new Date(props.time);console.log("date", date);

    let dialStyle = {
        position: "relative",
        top: 0,
        left: 0,
        width: 200,
        height: 200,
        borderRadius: 20000,
        borderStyle: "solid",
        borderColor: "black"
    };

    let secondHandStyle = {
        position: "relative",
        top: 100,
        left: 100,
        border: "1px solid red",
        width: "40%",
        height: 1,
        transform: "rotate(" + ((date.getSeconds()/60)*360 - 90).toString() + "deg)",
        transformOrigin: "0% 0%",
        backgroundColor: "red"
    };

    let minuteHandStyle = {
        position: "relative",
        top: 100,
        left: 100,
        border: "1px solid grey",
        width: "40%",
        height: 3,
        transform: "rotate(" + ((date.getMinutes()/60)*360 - 90).toString() + "deg)",
        transformOrigin: "0% 0%",
        backgroundColor: "grey"
    };

    let hoursHandStyle = {
        position: "relative",
        top: 92,
        left: 106,
        border: "1px solid grey",
        width: "20%",
        height: 7,
        transform: "rotate(" + ((date.getHours()/12)*360 - 90).toString() + "deg)",
        transformOrigin: "0% 0%",
        backgroundColor: "grey"
    };

    return <div>
        <div style={dialStyle}>
            <div style={secondHandStyle} />
            <div style={minuteHandStyle} />
            <div style={hoursHandStyle} />
        </div>
    </div>;
}
