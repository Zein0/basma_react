import React from "react";
import ToolBox from "./ToolBox/ToolBox";
import "./Tools.css";
import { FaBell } from "react-icons/fa";
import { HiOutlineMailOpen } from "react-icons/hi";
import { IoVideocam } from "react-icons/io5";

const toolpic = require("../../assets/Tools.png");

function Tools() {
	return (
		<div className="Tools-flex">
			<div className="Tools-flex-image">
				<img src={toolpic.default} alt="thumb-2" />
			</div>
			<div className="Tools-flex-text">
				<br />
				<h1>Work faster with powerful tools</h1>
				<ToolBox />
				<div className="icon-flex">
					<FaBell />
					<HiOutlineMailOpen />
					<IoVideocam />
				</div>
			</div>
		</div>
	);
}

export default Tools;
