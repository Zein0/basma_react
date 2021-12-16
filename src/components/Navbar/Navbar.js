import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import "./Navbar.css";
import { ImMenu } from "react-icons/im";
function Navbar() {
	const isMobile = useMediaQuery({ query: `(max-width:760px) ` });
	const [pressed, setpressed] = useState(false);
	return !isMobile ? (
		<div className="Navbar-flex">
			<label>Home</label>
			<label>Features</label>
			<label>Pages</label>
			<label>Screenshots</label>
			<label>Pricing</label>
			<label>Contact</label>
		</div>
	) : (
		<div className="Navbar-mobile">
			<ImMenu
				preserveAspectRatio="xMaxYMin meet"
				onClick={() => {
					setpressed((prev) => {
						return !prev;
					});
				}}
			/>
			{pressed && (
				<div className="Navbar-flex-mobile">
					<label>Home</label>
					<label>Features</label>
					<label>Pages</label>
					<label>Screenshots</label>
					<label>Pricing</label>
					<label>Contact</label>
				</div>
			)}
		</div>
	);
}

export default Navbar;
