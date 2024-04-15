"use client";
import Link from "next/link";
import StarBorder from "@mui/icons-material/StarBorder";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import GroupsIcon from "@mui/icons-material/Groups";
import ChatIcon from "@mui/icons-material/Chat";
import {
	Collapse,
	List,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	ListSubheader,
} from "@mui/material";
import { useEffect, useState } from "react";
const Groups = () => {
	const [open, setOpen] = useState(true);
	const [content, setContent] = useState({ groups: [] });

	const handleClick = () => {
		setOpen(!open);
	};

	useEffect(() => {
		if (typeof window !== "undefined") {
			const contentFromLocalStorage = localStorage.getItem("content");
			contentFromLocalStorage &&
				setContent(JSON.parse(contentFromLocalStorage));
		}
	}, []);
	return (
		<div className="Groups">
			<div className="container">
				<div className="row">
					<List
						component="nav"
						aria-labelledby="nested-list-subheader"
						subheader={
							<ListSubheader
								className="rounded my-3"
								component="div"
								id="nested-list-subheader"
							>
								Groups
							</ListSubheader>
						}
					>
						{content.groups.map((item: any, index: number) => {
							return (
								<div key={index} className="py-3">
									<ListItemButton onClick={handleClick}>
										<ListItemIcon>
											<GroupsIcon color="secondary" />
										</ListItemIcon>
										<ListItemText primary={item.name} />
										{open ? <ExpandLess /> : <ExpandMore />}
									</ListItemButton>
									<Collapse in={open} timeout="auto" unmountOnExit>
										<List component="div" disablePadding>
											{item.links.map((item: any, index: number) => {
												return (
													<Link
														href={`${item.url}`}
														target="_blank"
														key={index}
														className="text-decoration-none text-white"
													>
														<ListItemButton sx={{ pl: 4 }}>
															<ListItemIcon>
																<ChatIcon color="secondary" />
															</ListItemIcon>
															<ListItemText primary={item.name} />
														</ListItemButton>
													</Link>
												);
											})}
										</List>
									</Collapse>
								</div>
							);
						})}
					</List>
				</div>
			</div>
		</div>
	);
};

export default Groups;
