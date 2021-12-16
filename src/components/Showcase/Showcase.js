import React, { useState } from "react";
import Popup from "../Popup/Popup";
import "./Showcase.css";

const showpic = require("../../assets/Showcase.png");

function Showcase() {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div className="Showcase-flex">
			<div className="Showcase-flex-text">
				<br />
				<h1>Creative way to Showcase your App</h1>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation
				</p>
				<button
					className="basma-button"
					onClick={() => {
						setIsOpen(true);
					}}
				>
					Get Started
				</button>
			</div>
			<div className="Showcase-flex-image">
				<img src={showpic.default} alt="thumb-1" />
			</div>
			<Popup open={isOpen} onClose={() => setIsOpen(false)}></Popup>
		</div>
	);
}

export default Showcase;
