"use client";
import Button from "@mui/material/Button";
import Link from "next/link";
import { CONTENT_ENTRIES } from "./admin/constants";
export default function Home() {
	return (
		<main className="App">
			<div className="container">
				<div className="optionsContainer">
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
