"use client";
import Button from "@mui/material/Button";
import { Key, useEffect } from "react";
import content from "./admin/content.json";
import Link from "next/link";
import { CONTENT_ENTRIES } from "./admin/constants";
export default function Home() {
	return (
		<main className="App flex min-h-screen">
			<div className="container">
				<div className="optionsContainer">
					<div className="row">
						{CONTENT_ENTRIES.map((item, index) => {
							return (
								<div key={index} className="col-12 col-md-6 py-3">
									<Link href={`/${item[0]}`}>
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
