"use client";
import Link from "next/link";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";
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
						{content.mcq.map((item: any, index: number) => {
							return (
								<div key={index} className="col-12 col-md-6 py-3">
									<Link href={`${item.link}`} passHref target="_blank">
										<Button className="py-3" variant="contained" fullWidth>
											{item.name}
										</Button>
									</Link>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Mcq;
