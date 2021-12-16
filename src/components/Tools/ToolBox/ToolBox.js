import React from "react";
import Tool from "./Tool/Tool";
import "./ToolBox.css";

function ToolBox() {
	return (
		<div className="ToolBox-flex">
			<Tool
				text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt"
			/>
			<Tool
				text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt"
			/>
			<Tool
				text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt"
			/>
			<Tool
				text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt"
			/>
			<Tool
				text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt"
			/>
		</div>
	);
}

export default ToolBox;
