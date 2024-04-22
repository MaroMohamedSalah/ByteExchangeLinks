"use client";
import { useEffect, useState } from "react";
import DynamicLinksContainer from "../components/DynamicLinksContainer";

const Contact = () => {
	const [content, setContent] = useState({ contact: [] });

	useEffect(() => {
		if (typeof window !== "undefined") {
			const contentFromLocalStorage = localStorage.getItem("content");
			contentFromLocalStorage &&
				setContent(JSON.parse(contentFromLocalStorage));
		}
	}, []);
	return (
		<div className="Contact">
			<div className="container">
				<DynamicLinksContainer content={content.contact} />
			</div>
		</div>
	);
};

export default Contact;
