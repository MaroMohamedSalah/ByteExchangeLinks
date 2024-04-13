import { formatDateAndTime } from "../services/General";
import content from "./content.json";
export const CONTENT_ENTRIES = Object.entries(content);

export const YOUTUBE_CHANNEL_ID = "UCm-nD8cMPm6qc6c-Y5NxBhA";

export const YOUTUBE_API_KEY = "AIzaSyCiAdtP8C0uhgZk-epotWEiiHpr7M_F0uY";

export const GET_YOUTUBE_PLAYLISTS_API = `https://www.googleapis.com/youtube/v3/playlists?part=snippet&channelId=${YOUTUBE_CHANNEL_ID}&key=${YOUTUBE_API_KEY}`;

export const GIST_INFO_FROM_LOCAL_STORAGE = localStorage.getItem("gistInfo");

export const PARSED_GIST_INFO_FROM_LOCAL_STORAGE =
	GIST_INFO_FROM_LOCAL_STORAGE && JSON.parse(GIST_INFO_FROM_LOCAL_STORAGE);

export const LAST_UPDATE = formatDateAndTime({
	isoDateString: PARSED_GIST_INFO_FROM_LOCAL_STORAGE.updated_at,
});
