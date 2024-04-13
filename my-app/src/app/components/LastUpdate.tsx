import { formatDateAndTime } from "../services/General";

const LastUpdate = () => {
	const gistInfo =
		typeof window !== "undefined" && localStorage.getItem("gistInfo");
	const parsedGistInfo = gistInfo && JSON.parse(gistInfo);

	// Check if parsedGistInfo is valid before accessing its properties
	const lastUpdateDate =
		parsedGistInfo && parsedGistInfo.updated_at
			? formatDateAndTime({
					isoDateString: parsedGistInfo.updated_at,
			  })
			: "Loading...";

	return (
		<h6 className="LastUpdate position-fixed top-0 text-center py-5">
			Last Update @ {lastUpdateDate}
		</h6>
	);
};

export default LastUpdate;
