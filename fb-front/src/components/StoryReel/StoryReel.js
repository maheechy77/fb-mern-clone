import React from "react";
import "./StoryReel.css";

import Story from "../Story/Story";

const StoryReel = () => {
	return (
		<div className="storyReel">
			<Story
				image="https://www.99images.com/photos/wallpapers/3d-abstract/abstract-spider-manandroid-iphone-desktop-hd-backgrounds-wallpapers-1080p-4k-cgwsd.jpg?v=1577518083"
				profileSrc="https://avatars2.githubusercontent.com/u/24712956?s=460&u=b71527e605ae1b748fc2d4157a842e57e427ad44&v=4"
				title="Sonny Sanga"
			/>
			<Story
				image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTs5n5mG0YhVrterSoAxaPGQSnzcWMeJ1iAoA&usqp=CAU"
				profileSrc="https://avatars1.githubusercontent.com/u/8461930?s=460&v=4"
				title="Rafeh Qazi"
			/>
			<Story
				image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTPyHeJ8WasN7528QwZXtZCNSR1Uh3mgxsS_w&usqp=CAU"
				profileSrc="https://avatars0.githubusercontent.com/u/6589966?s=460&u=92735e6e0182d3000728073fbaa438160e11ed90&v=4"
				title="Nazariy"
			/>
		</div>
	);
};

export default StoryReel;
