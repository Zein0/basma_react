import React from "react";
import ShareBox from "./ShareBox/ShareBox";
import "./Share.css";
import { FaBell } from "react-icons/fa";
import { HiOutlineMailOpen } from "react-icons/hi";
import { IoVideocam } from "react-icons/io5";

const sharepic = require("../../assets/Share.png");

function Share() {
	return (
		<div className="Share-flex">
			<div className="Share-flex-text">
				<br />
				<h1>Share your photos with friends easily</h1>
				<ShareBox />
				<button className="basma-button">Get Started</button>
			</div>
			<div className="Share-flex-image">
				<img src={sharepic.default} alt="thumb-3" />
			</div>
		</div>
	);
}

export default Share;
