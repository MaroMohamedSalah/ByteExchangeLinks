import { useEffect, useState } from "react";
import { formatDateAndTime } from "../services/General";
import { CircularProgress, LinearProgress, Skeleton } from "@mui/material";

const LastUpdate = () => {
	const [gistInfo, setGistInfo] = useState({
		updated_at: "NaN-NaN-NaN 12:NaN:NaN AM",
	});

	useEffect(() => {
		if (typeof window !== "undefined") {
			const gistInfoFromLocalStorage = localStorage.getItem("gistInfo");
			gistInfoFromLocalStorage &&
				setGistInfo(JSON.parse(gistInfoFromLocalStorage));
		}
	}, []);

	return (
		<h6 className="LastUpdate position-fixed top-0 text-center py-5 d-flex align-items-center">
			<span className="pe-2">Last Update @</span>
			{gistInfo.updated_at === "NaN-NaN-NaN 12:NaN:NaN AM" ? (
				<CircularProgress size={20} />
			) : (
				formatDateAndTime({
					isoDateString: gistInfo.updated_at,
				})
			)}
		</h6>
	);
};

export default LastUpdate;
