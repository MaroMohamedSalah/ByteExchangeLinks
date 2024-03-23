"use client";
import Button from "@mui/material/Button";
import { Key, useEffect } from "react";
import content from "./admin/content.json";
export default function Home() {
	const contentEntries = Object.entries(content);

	useEffect(() => {
		// for (const key in content) {
		// 	console.log(key);
		// }
	});
	return (
		<main className="App flex min-h-screen">
			<div className="container">
				<ul></ul>
				<div className="optionsContainer">
					<div className="row">
						{contentEntries.map((item, index) => {
							return (
								<div key={index} className="col-12 col-md-6 py-3">
									<Button className="py-3" variant="contained" fullWidth>
										{item[0]}
									</Button>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</main>
	);
}
