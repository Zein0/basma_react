import React from "react";
import "./Tool.css";
import { BsCheckLg } from "react-icons/bs";
const check = require("../../../../assets/check.svg");
function Tool({ text }) {
	return (
		<div className="Tool">
			<img src={check.default} />
			{/* <BsCheckLg /> */}
			<p>{text}</p>
		</div>
	);
}

export default Tool;
