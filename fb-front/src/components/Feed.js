import React, { useEffect, useState } from "react";
import "./Feed.css";
import MessageSender from "./MessageSender";
import Post from "./Post";
import StoryReel from "./StoryReel";
import axios from "../axios";
import Pusher from "pusher-js";

import db from "../firebase";

const pusher = new Pusher("8a4be91ffa70987cbd08", {
	cluster: "ap2",
});

const Feed = () => {
	const [profilePic, setProfilePic] = useState("");
	const [postsData, setPostsData] = useState([]);

	const syncPost = () => {
		axios.get("/retrive/posts").then((res) => {
			setPostsData(res.data);
		});
	};

	useEffect(() => {
		const channel = pusher.subscribe("posts");
		channel.bind("inserted", function (data) {
			syncPost();
		});
	}, []);

	useEffect(() => {
		syncPost();
		// db.collection('posts').onSnapshot(snapshot => (
		//     setPostsData(snapshot.docs.map(doc => ({ id: doc.id, data: doc.data() })))
		// ))
	}, []);

	return (
		<div className="feed">
			<StoryReel />
			<MessageSender />

			{postsData.map((entry) => (
				<Post
					profilePic={entry.avatar}
					message={entry.text}
					timestamp={entry.timestamp}
					imgName={entry.imgName}
					username={entry.user}
				/>
			))}
		</div>
	);
};

export default Feed;
