import React from "react";
import Features from "../components/Features/Features";
import Plans from "../components/Plans/Plans";
import Share from "../components/Share/Share";
import Showcase from "../components/Showcase/Showcase";
import Stores from "../components/Stores/Stores";
import Tools from "../components/Tools/Tools";
import Subsribe from "../components/Subscribe/Subscribe";
import Contact from "../components/Contact/Contact";
import Navbar from "../components/Navbar/Navbar";
import Shape from "react-clip-path";
function Home() {
	return (
		<div>
			<Navbar />
			<div className="poly-div">
				<Shape
					width="100%"
					height="100vh"
					showLabel={true}
					backgroundColor="#5812ed"
					formula="polygon(42% 0, 100% 0, 100% 31%, 70% 52%);"
				/>
			</div>
			<Showcase />
			<Features />
			<Tools />
			<Share />
			<Plans />
			<Stores />
			<Subsribe />
			<Contact />
		</div>
	);
}

export default Home;
