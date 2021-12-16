import React from "react";
import PlansHelp from "./PlansHelp/PlansHelp";
import "./Plans.css";
import PlansDiv from "./PlansDiv/PlansDiv";
function Plans() {
	return (
		<div className="Plans-flex">
			<PlansHelp />
			<PlansDiv />
		</div>
	);
}

export default Plans;
