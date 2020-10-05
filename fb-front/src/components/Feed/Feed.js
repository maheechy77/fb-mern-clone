import React from "react";
import MessageSender from "../MessageSender/MessageSender";
import Post from "../Post/Post";
import StoryReel from "../StoryReel/StoryReel";
import "./Feed.css";

const Feed = () => {
	return (
		<div className="feed">
			<StoryReel />
			<MessageSender />
			<Post
				profilePic="https://avatars2.githubusercontent.com/u/24712956?s=460&u=b71527e605ae1b748fc2d4157a842e57e427ad44&v=4"
				message="This is a Facebook Post"
				timestamp="1601493943737"
				imgName="Profile Image"
				username="Sunny"
			/>
			{/* {postsData.map((entry) => (
				<Post
					profilePic={entry.avatar}
					message={entry.text}
					timestamp={entry.timestamp}
					imgName={entry.imgName}
					username={entry.user}
				/>
			))} */}
		</div>
	);
};

export default Feed;
