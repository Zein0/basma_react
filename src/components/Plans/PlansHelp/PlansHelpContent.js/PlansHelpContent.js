import React from "react";
import "./PlansHelpContent.css";
function PlansHelpContent({ img, title, desc }) {
	return (
		<div className="PlansHelpContent-flex">
			<img src={img.default} />
			<h2>{title}</h2>
			<p>{desc}</p>
		</div>
	);
}

export default PlansHelpContent;
