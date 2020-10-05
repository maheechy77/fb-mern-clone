import { Avatar, Input } from "@material-ui/core";
import { Videocam, PhotoLibrary, InsertEmoticon } from "@material-ui/icons";
import React, { useState } from "react";
import "./MessageSender.css";

const MessageSender = () => {
	const [input, setInput] = useState("");
	const [image, setImage] = useState(null);
	const handleChange = (e) => {
		if (e.target.files[0]) {
			setImage(e.target.files[0]);
		}
	};
	const handleSubmit = () => {};
	return (
		<div className="massageSender">
			<div className="massageSender_top">
				<Avatar src="https://avatars2.githubusercontent.com/u/24712956?s=460&u=b71527e605ae1b748fc2d4157a842e57e427ad44&v=4" />
				<form action="">
					<input
						type="text"
						className="massageSender_input"
						placeholder="What's on your mind?"
						value={input}
						onChange={(e) => setInput(e.target.value)}
					/>
					<Input
						type="file"
						className="massageSender_fileSelector"
						onChange={handleChange}
					/>
					<button type="submit" onClick={handleSubmit}>
						Post
					</button>
				</form>
			</div>

			<div className="massageSender_bottom">
				<div className="massageSender_option">
					<Videocam style={{ color: "red" }} />
					<h3>Live Video</h3>
				</div>
				<div className="massageSender_option">
					<PhotoLibrary style={{ color: "green" }} />
					<h3>Photo/Video</h3>
				</div>
				<div className="massageSender_option">
					<InsertEmoticon style={{ color: "orange" }} />
					<h3>Feeling/Activity</h3>
				</div>
			</div>
		</div>
	);
};

export default MessageSender;
