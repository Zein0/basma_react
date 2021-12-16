import React from "react";
import Plan from "./Plan/Plan";
import "./PlansDiv.css";
const moto = require("../../../assets/motorbike.png");
const bike = require("../../../assets/bike.png");

function PlansDiv() {
	const features1 = [
		"5GB Linux Web Space",
		"5 MySQL Databases",
		"24/7 Tech Support",
		"Daily Backups",
	];
	const features2 = [
		"10GB Linux Web Space",
		"50 MySQL Databases",
		"Unlimited Email",
		"Daily Backups",
	];
	return (
		<div className="PlansDiv-flex">
			<div className="PlansDiv-title">
				<h1>BASMA Code Challenge</h1>
				<hr />
				<p className="PlansDiv-title-text">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua.
				</p>
			</div>
			<div className="PlansDiv-content">
				<Plan img={bike} plan="BASIC" cost="49" features={features1} />
				<Plan img={moto} plan="PRO" cost="129" features={features2} />
			</div>
			<center>
				<b>
					<p>
						Not sure what to choose? <u>Contact us</u>
					</p>
				</b>
			</center>
		</div>
	);
}

export default PlansDiv;
