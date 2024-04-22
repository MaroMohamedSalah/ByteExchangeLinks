"use client";
import { useEffect, useState } from "react";
import DynamicLinksContainer from "../components/DynamicLinksContainer";
const Pdfs = () => {
	const [content, setContent] = useState({ pdfs: [] });

	useEffect(() => {
		if (typeof window !== "undefined") {
			const contentFromLocalStorage = localStorage.getItem("content");
			contentFromLocalStorage &&
				setContent(JSON.parse(contentFromLocalStorage));
		}
	}, []);
	return (
		<div className="Pdfs">
			<div className="container">
				<div className="optionsContainer">
					<div className="row w-100">
						<DynamicLinksContainer content={content.pdfs} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Pdfs;
