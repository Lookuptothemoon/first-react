import React from 'react';
import './Time.css';

class Time extends React.Component{
	render() {
		// time style
		const timeStyle = {
			fontSize: "50px",
			textShadow: "-2px 2px gray",
			paddingLeft: "20px",
			paddingRight: "20px",
			borderRadius: "10px"
		}

		// get time
		const date = new Date();
		const hours = date.getHours();
		const mins = date.getMinutes();

		// determine time of day
		let timeOfDay;
		if( hours < 12 ){
			timeOfDay = "Morning";
			timeStyle.backgroundColor = "orange";
			timeStyle.color = "black";
		}else if( hours >= 12 && hours < 17 ){
			timeOfDay = "Afternoon";
			timeStyle.backgroundColor = "lightblue";
			timeStyle.color = "black";
		}else{
			timeOfDay = "Evening";
			timeStyle.backgroundColor = "blue";
			timeStyle.color = "white";
		}

		// determine AM or PM
		let convention;
		if( hours > 12 ){
			convention = "PM";
		}else{
			convention = "AM";
		}

		// determine time in 12 clock form
		let time;
			// get hours
		if(hours % 12 === 0){
			time = "" + 12;
		}else{
			time = "" + (hours%12);
		}
			// add 0 if minutes < 10
		if(mins < 10){
			time = time + ":0" + mins + " " + convention;
		}else{
			time = time + ":" + mins + " " + convention;
		}

		return (
			<div className="time-content">
				<p> <span style={timeStyle}>{time}</span> </p>
				<p> Good {timeOfDay}! </p>
			</div>
		);
	}

}

export default Time;