import React from "react";
import "./Feature.css";

function Feature({ icon, title, desc }) {
	return (
		<div className="Feature-flex">
			<div className="icon">{React.createElement(icon)}</div>
			<h2>{title}</h2>
			<p>{desc}</p>
		</div>
	);
}

export default Feature;
