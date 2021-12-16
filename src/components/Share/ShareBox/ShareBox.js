import React from "react";
import Specs from "./Specs/Specs";
import "./ShareBox.css";
import { IoLayers } from "react-icons/io5";
import { FaBrush } from "react-icons/fa";
import { ImDroplet } from "react-icons/im";
import { FaCartArrowDown } from "react-icons/fa";
function ShareBox() {
	return (
		<div className="ShareBox-flex">
			<Specs
				icon={IoLayers}
				text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt"
			/>
			<Specs
				icon={FaBrush}
				text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt"
			/>
			<Specs
				icon={ImDroplet}
				text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt"
			/>
			<Specs
				icon={FaCartArrowDown}
				text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt"
			/>
		</div>
	);
}

export default ShareBox;
