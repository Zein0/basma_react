import React from "react";
import Feature from "./Feature/Feature";
import "./Features.css";
import { MdOutlineTouchApp } from "react-icons/md";
import { IoFingerPrintOutline } from "react-icons/io5";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { IoSettingsOutline } from "react-icons/io5";
import { BsGlobe } from "react-icons/bs";

function Features() {
	return (
		<div className="Features-flex">
			<div className="Features-title">
				<h1>Code Challenge</h1>
				<hr />
				<p className="Features-title-text">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua.
				</p>
			</div>
			<div className="Features-content">
				<Feature
					icon={MdOutlineTouchApp}
					title="Fully functional"
					desc="lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor "
				/>
				<Feature
					icon={IoFingerPrintOutline}
					title="Fully functional"
					desc="lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor "
				/>
				<Feature
					icon={MdCheckBoxOutlineBlank}
					title="Fully functional"
					desc="lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor "
				/>
				<Feature
					icon={HiOutlineLocationMarker}
					title="Location Tracking"
					desc="lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor "
				/>
				<Feature
					icon={IoSettingsOutline}
					title="Powerful Settings"
					desc="lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor "
				/>
				<Feature
					icon={BsGlobe}
					title="Multiple Language"
					desc="lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor "
				/>
			</div>
		</div>
	);
}

export default Features;
