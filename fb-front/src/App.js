import React from "react";
import "./App.css";
import Feed from "./components/Feed/Feed";
import Header from "./components/Header/Header";
import Post from "./components/Post/Post";
import Sidebar from "./components/Sidebar/Sidebar";
import Widgets from "./components/Widgets/Widgets";

function App() {
	return (
		<div className="app">
			<Header />
			<div className="app_body">
				<Sidebar />
				<Feed />
				<Widgets />
			</div>
		</div>
	);
}

export default App;
