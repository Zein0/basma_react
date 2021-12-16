import React from "react";
import "./Stores.css";
const google = require("../../assets/google-play.png");
const app = require("../../assets/app-store.png");
function Stores() {
	return (
		<div className="Stores-flex">
			<div className="Stores-text">
				<h1>BASMA is available for all devices</h1>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation
				</p>
			</div>
			<div className="Stores-stores">
				<img src={google.default} />
				<img src={app.default} />
			</div>
			<p className="Stores-note">
				* Available on iPhone, iPad and all android devices
			</p>
		</div>
	);
}

export default Stores;
