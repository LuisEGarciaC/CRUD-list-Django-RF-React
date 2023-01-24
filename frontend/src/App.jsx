import React, { useState, useEffect } from "react";
import axios from "axios";

// components
import { Header } from "./components/Header";
import { Blog } from "./components/Blog";
import { BlogForm } from "./components/BlogForm";

function App() {
	const [blogs, setBlogs] = useState([]);

	useEffect(() => {
		axios
			.get("http://localhost:8000/get/")
			.then((response) => {
				setBlogs(response.data);
			})
			.catch(() => {
				alert("Alogo salio mal");
			});
	}, []);

	return (
		<div>
			<Header />
			<div className="container p-4">
				<BlogForm blogs={blogs} setBlogs={setBlogs} />
				<Blog blogs={blogs} setBlogs={setBlogs} />
			</div>
		</div>
	);
}

export default App;
