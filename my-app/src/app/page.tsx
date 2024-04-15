"use client";
import Button from "@mui/material/Button";
import Link from "next/link";
import { CONTENT_DATA_FETCH_URL, CONTENT_ENTRIES } from "./admin/constants";
import { useEffect } from "react";
import LastUpdate from "./components/LastUpdate";

export default function Home() {
	useEffect(() => {
		fetch("https://api.github.com/gists/f744fa779ab3f83f28f9f4bf36ee7acc")
			.then((res) => {
				if (!res.ok) {
					throw new Error("Network response was not ok");
				}
				return res.json();
			})
			.then((data) => {
				const gistInfo = data;
				typeof window !== "undefined" &&
					localStorage.setItem("gistInfo", JSON.stringify(gistInfo));
				// Do something with the fetched data, such as updating state
			})
			.catch((error) => {
				console.error("There was a problem fetching data:", error);
			});
	}, []);

	useEffect(() => {
		fetch(CONTENT_DATA_FETCH_URL)
			.then((res) => {
				if (!res.ok) {
					throw new Error("Network response was not ok");
				}
				return res.json();
			})
			.then((data) => {
				const content = data;
				typeof window !== "undefined" &&
					localStorage.setItem("content", JSON.stringify(content));
				// Do something with the fetched data, such as updating state
			})
			.catch((error) => {
				console.error("There was a problem fetching data:", error);
			});
	}, []);

	return (
		<main className="App">
			<div className="container">
				<div className="optionsContainer">
					<LastUpdate />
					<div className="row w-100">
						{CONTENT_ENTRIES.map((item, index) => {
							return (
								<div key={index} className="col-12 col-md-6 py-3">
									<Link
										href={
											typeof item[1] === "string" ? `${item[1]}` : `/${item[0]}`
										}
									>
										<Button className="py-3" variant="contained" fullWidth>
											{item[0]}
										</Button>
									</Link>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</main>
	);
}
