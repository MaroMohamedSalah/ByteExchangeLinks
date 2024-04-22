"use client";
import { useEffect, useState } from "react";
import DynamicLinksContainer from "../components/DynamicLinksContainer";
const Mcq = () => {
	const [content, setContent] = useState({ mcq: [] });

	useEffect(() => {
		if (typeof window !== "undefined") {
			const contentFromLocalStorage = localStorage.getItem("content");
			contentFromLocalStorage &&
				setContent(JSON.parse(contentFromLocalStorage));
		}
	}, []);
	return (
		<div className="Mcq">
			<div className="container">
				<div className="optionsContainer">
					<div className="row w-100">
						<DynamicLinksContainer content={content.mcq} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Mcq;
