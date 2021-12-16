import React, { useState } from "react";
import Shape from "react-clip-path";
import ReactDom from "react-dom";
import "./Popup.css";
import { IoCloseCircleSharp } from "react-icons/io5";
function Popup({ open, children, onClose }) {
	const [fname, setFName] = useState("");
	const [lname, setLName] = useState("");
	const [email, setEmail] = useState("");
	const [pass, setPass] = useState("");
	const [eFname, setEFName] = useState(" ");
	const [eLname, setELName] = useState(" ");
	const [eEmail, setEEmail] = useState(" ");
	const [ePass, setEPass] = useState(" ");
	const formdata = new FormData();
	formdata.append("first_name", fname);
	formdata.append("last_name", lname);
	formdata.append("email", email);
	formdata.append("password", pass);
	const addUser = async (fname, lname, email, pass) => {
		const req = await fetch("http://localhost:8000/api/user/register", {
			method: "POST",
			body: formdata,
			headers: {
				Accept: "application/json",
			},
		});
		const res = await req.json();
		if (res.status) {
			setFName("");
			setLName("");
			setEmail("");
			setPass("");
			onClose();
		} else {
			if (res.errors.first_name) {
				setEFName(res.errors.first_name[0]);
			}
			if (res.errors.last_name) {
				setELName(res.errors.last_name[0]);
			}
			if (res.errors.email) {
				setEEmail(res.errors.email[0]);
			}
			if (res.errors.password) {
				setEPass(res.errors.password[0]);
			}
		}
	};
	if (!open) return null;

	return ReactDom.createPortal(
		<>
			<div className="OVERLAY_STYLES" />
			<div className="MODAL_STYLES">
				<h1>Register</h1>
				<IoCloseCircleSharp
					size={25}
					color="red"
					className="Close_label"
					onClick={() => {
						setFName("");
						setLName("");
						setEmail("");
						setPass("");
						setEFName("");
						setELName("");
						setEEmail("");
						setEPass("");
						onClose();
					}}
				/>

				<form
					onSubmit={(e) => {
						e.preventDefault();
						setEFName("");
						setELName("");
						setEEmail("");
						setEPass("");
						addUser(fname, lname, email, pass);
					}}
					className="form"
				>
					<input
						className="input"
						type="text"
						placeholder="First Name"
						value={fname}
						onChange={(e) => {
							setFName(e.target.value);
						}}
					></input>
					<span className="error">{eFname}</span>
					<input
						className="input"
						type="text"
						placeholder="last Name"
						value={lname}
						onChange={(e) => {
							setLName(e.target.value);
						}}
					></input>
					<span className="error">{eLname}</span>
					<input
						className="input"
						type="text"
						placeholder="Email"
						value={email}
						onChange={(e) => {
							setEmail(e.target.value);
						}}
					></input>
					<span className="error">{eEmail}</span>
					<input
						className="input"
						type="pass"
						placeholder="password"
						value={pass}
						onChange={(e) => {
							setPass(e.target.value);
						}}
					></input>
					<span className="error">{ePass}</span>
					<button className="subbtn basma-button">Submit</button>
				</form>
			</div>
		</>,
		document.getElementById("portal")
	);
}

export default Popup;
