"use client";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import React, { useEffect, useState } from "react";
import { GET_YOUTUBE_PLAYLISTS_API } from "../admin/constants";
import { formatDate } from "../services/General";
import Image from "next/image";
import ActionMenu from "./ActionMenu";
import Link from "next/link";
interface CourseCardProps {
	itemData: {
		id: string;
		snippet: {
			title: string;
			publishedAt: string;
			thumbnails: {
				maxres: {
					height: number; // Assuming height is a number
					url: string;
				};
			};
			localized: {
				description: string;
			};
		};
	};
}

const CourseCard: React.FC<CourseCardProps> = ({ itemData }) => {
	return (
		<div className="CourseCard">
			<Link href={`https://www.youtube.com/playlist?list=${itemData.id}`}>
				<Card className="w-100">
					<CardHeader
						avatar={
							<Avatar aria-label="recipe">
								<Image
									src={`https://yt3.googleusercontent.com/ipnmWlCwXdm9OzUO-yzrJEwNv0JMPAXXf4DE1z-ML23hfeQiLFX7DB6-jk4J1ol_n78bQTRihA=s176-c-k-c0x00ffffff-no-rj`}
									alt="img"
									width={50}
									height={50}
								/>
							</Avatar>
						}
						action={<ActionMenu />}
						title={itemData.snippet.title}
						subheader={formatDate({
							unFormattedDate: itemData.snippet.publishedAt,
						})}
					/>
					<CardMedia
						component="img"
						image={`${itemData.snippet.thumbnails.maxres.url}`}
						alt="Paella dish"
					/>
					<CardContent>
						<Typography variant="body2" color="text.secondary">
							{itemData.snippet.localized.description}
						</Typography>
					</CardContent>
					<CardActions disableSpacing>
						<IconButton aria-label="share">
							<ShareIcon />
						</IconButton>
					</CardActions>
				</Card>
			</Link>
		</div>
	);
};

export default CourseCard;
