import React from "react";
import "./Subscribe.css";
function Subscribe() {
	return (
		<div className="Subscribe-flex">
			<div className="Subscribe-text">
				<h1>Subscribe to get updates</h1>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation
				</p>
			</div>
			<div className="Subscribe-form">
				<input
					type="text"
					className="Subscribe-form-text"
					placeholder="Enter your email "
				></input>
				<button className="Subscribe-form-text basma-button">Subscribe</button>
			</div>
		</div>
	);
}

export default Subscribe;
