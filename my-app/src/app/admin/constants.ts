import { formatDateAndTime } from "../services/General";
import content from "./content.json";
export const CONTENT_ENTRIES = Object.entries(content);

export const YOUTUBE_CHANNEL_ID = "UCm-nD8cMPm6qc6c-Y5NxBhA";

export const YOUTUBE_API_KEY = "AIzaSyCiAdtP8C0uhgZk-epotWEiiHpr7M_F0uY";

export const GET_YOUTUBE_PLAYLISTS_API = `https://www.googleapis.com/youtube/v3/playlists?part=snippet&channelId=${YOUTUBE_CHANNEL_ID}&key=${YOUTUBE_API_KEY}`;

export const GIST_INFO_FROM_LOCAL_STORAGE =
	typeof window !== "undefined" ? localStorage.getItem("gistInfo") : null;

export const PARSED_GIST_INFO_FROM_LOCAL_STORAGE =
	GIST_INFO_FROM_LOCAL_STORAGE && JSON.parse(GIST_INFO_FROM_LOCAL_STORAGE);

export const CONTENT_DATA_FETCH_URL =
	PARSED_GIST_INFO_FROM_LOCAL_STORAGE &&
	PARSED_GIST_INFO_FROM_LOCAL_STORAGE.files["byteExchange-Links-Content"]
		.raw_url;

export const CONTENT =
	typeof window !== "undefined" ? localStorage.getItem("content") : null;

export const PARSED_CONTENT = CONTENT && JSON.parse(CONTENT);
