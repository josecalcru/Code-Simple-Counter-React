import React from "react";
import PropTypes from "prop-types";
var seconds = 0;
export function SecondsCounter(props) {
	return (
		<div className="container text-center bg-dark text-white">
			<div className="row justify-content-center">
				<i className="far fa-clock align-self-center"> </i>
				<div className="four">{props.digitFour % 10}</div>
				<div className="three"> {props.digitThree % 10}</div>
				<div className="two"> {props.digitTwo % 10}</div>
				<div className="one"> {props.digitOne % 10}</div>
			</div>
		</div>
	);
}

SecondsCounter.propTypes = {
	digitFour: PropTypes.number,
	digitThree: PropTypes.number,
	digitTwo: PropTypes.number,
	digitOne: PropTypes.number
};
