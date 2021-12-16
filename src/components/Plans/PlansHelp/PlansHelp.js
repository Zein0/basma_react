import React from "react";
import "./PlansHelp.css";
import PlansHelpContent from "./PlansHelpContent.js/PlansHelpContent";
// import { FaGreaterThan } from "react-icons/fa";
const Home = require("../../../assets/download.png");
const Tune = require("../../../assets/settings.png");
const Settings = require("../../../assets/app.png");
// const Greater = require("../../../assets/greater2.png");

function PlansHelp() {
	return (
		<div className="PlansHelp-flex">
			<div className="PlansHelp-title">
				<h1>Code Challenge</h1>
				<p className="PlansHelp-title-text">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua.
				</p>
			</div>
			<div className="PlansHelp-content">
				<PlansHelpContent
					img={Home}
					title="Install the App"
					desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt"
				/>
				{/* <img src={Greater.default} /> */}
				<PlansHelpContent
					img={Tune}
					title="Setup your profile"
					desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt"
				/>
				{/* <FaGreaterThan className="PlansHelp-content-next" /> */}
				<PlansHelpContent
					img={Settings}
					title="Enjoy the features!"
					desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt"
				/>
			</div>
		</div>
	);
}

export default PlansHelp;
