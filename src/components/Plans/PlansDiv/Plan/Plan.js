import React from "react";
import "./Plan.css";

function Plan({ img, plan, cost, features }) {
	return (
		<div className="Plan">
			<img className="Plan-img" src={img.default} />
			<h3 className="Plan-plan">{plan}</h3>
			<h2 className="Plan-cost">${cost}</h2>
			<hr className="Plan-break" />
			{features.length > 0 &&
				features.map((feature, index) => (
					<>
						<p className="Plan-feature" key={index}>
							{feature}
						</p>
						<hr className="Plan-break" />
					</>
				))}
			<button className="basma-button Plan-button">Sign Up</button>
		</div>
	);
}

export default Plan;
