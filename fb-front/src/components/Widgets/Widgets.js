import React from "react";
import "./Widgets.css";

const Widgets = () => {
	return (
		<div className="widgets">
			<iframe
				src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FCleverProgrammerr%2Fposts%2F1084605211942212&show_text=true&width=552&appId=1230801953943722&height=659"
				width="340"
				height="1500"
				style={{ border: "none", overflow: "hidden" }}
				scrolling="no"
				frameborder="0"
				allowTransparency="true"
				allow="encrypted-media"
			></iframe>
		</div>
	);
};

export default Widgets;
