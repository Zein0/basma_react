import React from "react";
import "./Contact.css";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiTwotoneHome } from "react-icons/ai";
import { IoIosSend } from "react-icons/io";
function Contact() {
	return (
		<div className="Contact-flex">
			<div className="Contact-text">
				<h1>Stay Tuned</h1>
				<hr />
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua.
				</p>
			</div>
			<div className="Contact-form">
				<div className="Contact-form-sect1">
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua.
					</p>
					<div className="Contact-form-info">
						<AiTwotoneHome />
						<p>Lorem ipsum dolor sit amet, consec</p>
					</div>
					<div className="Contact-form-info">
						<BsFillTelephoneFill />
						<p>+961 79103638</p>
					</div>
					<div className="Contact-form-info">
						<MdEmail />
						<p>ahmadalzein06@gmail.com</p>
					</div>
				</div>
				<div className="Contact-form-sect2">
					<input
						type="text"
						className="Contact-form-text"
						placeholder="Name "
					></input>
					<input
						type="text"
						className="Contact-form-text"
						placeholder="Email"
					></input>
					<input
						type="text"
						className="Contact-form-text"
						placeholder="Subject"
					></input>
					<textarea
						className="Contact-form-text"
						placeholder="Message"
						rows={5}
					></textarea>
					<button className="Contact-form-text basma-button">
						<IoIosSend />
						Subscribe
					</button>
				</div>
			</div>
		</div>
	);
}

export default Contact;
