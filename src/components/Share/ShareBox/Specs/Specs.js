import React from "react";
import "./Specs.css";

function Specs({ text, icon }) {
	return (
		<div className="Specs">
			<div className="icon">{React.createElement(icon)}</div>
			<p>{text}</p>
		</div>
	);
}

export default Specs;
