import { Avatar } from "@material-ui/core";
import {
	ThumbUp,
	ChatBubbleOutline,
	NearMe,
	AccountCircle,
	ExpandMore,
} from "@material-ui/icons";
import React from "react";
import "./Post.css";

const Post = ({ profilePic, message, timestamp, imgName, username }) => {
	return (
		<div className="post">
			<div className="post_top">
				<Avatar src={profilePic} className="post_avatar" />
				<div className="post_topInfo">
					<h3>{username}</h3>
					<p>{new Date(parseInt(timestamp)).toUTCString()}</p>
				</div>
			</div>

			<div className="post_bottom">
				<p>{message}</p>
			</div>

			<div className="post_options">
				<div className="post_option">
					<ThumbUp />
					<p>like</p>
				</div>
				<div className="post_option">
					<ChatBubbleOutline />
					<p>comment</p>
				</div>
				<div className="post_option">
					<NearMe />
					<p>Share</p>
				</div>
				<div className="post_option">
					<AccountCircle />
					<ExpandMore />
				</div>
			</div>
		</div>
	);
};

export default Post;
