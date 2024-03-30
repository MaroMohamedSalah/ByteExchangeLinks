"use client";
import CourseCard from "./CourseCard";
import React, { useEffect, useState } from "react";
import { GET_YOUTUBE_PLAYLISTS_API } from "../admin/constants";
import "./course.css";
import { Backdrop, CircularProgress } from "@mui/material";

const Courses = () => {
	const [youtubePlaylistData, setYoutubePlaylistData] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		fetchYoutubeData();
	}, []);

	const fetchYoutubeData = () => {
		setIsLoading(true);
		fetch(GET_YOUTUBE_PLAYLISTS_API, {
			method: "GET",
		})
			.then((res) => res.json())
			.then((data) => {
				setYoutubePlaylistData(data.items);
			})
			.catch((err) => console.error(err))
			.finally(() => setIsLoading(false));
	};
	return (
		<div className="Courses">
			<div className="container">
				<div className="row my-5">
					{!isLoading && youtubePlaylistData ? (
						youtubePlaylistData.map((item, index) => {
							return (
								<div key={index} className="col-12 col-md-4 py-3">
									<CourseCard itemData={item} />
								</div>
							);
						})
					) : (
						<Backdrop
							sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
							open={isLoading}
						>
							<CircularProgress color="inherit" />
						</Backdrop>
					)}
				</div>
			</div>
		</div>
	);
};
export default Courses;
