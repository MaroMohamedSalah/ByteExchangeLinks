import content from "./content.json";
export const CONTENT_ENTRIES = Object.entries(content);
export const YOUTUBE_CHANNEL_ID = "UCm-nD8cMPm6qc6c-Y5NxBhA";
export const YOUTUBE_API_KEY = "AIzaSyCiAdtP8C0uhgZk-epotWEiiHpr7M_F0uY";
export const GET_YOUTUBE_PLAYLISTS_API = `https://www.googleapis.com/youtube/v3/playlists?part=snippet&channelId=${YOUTUBE_CHANNEL_ID}&key=${YOUTUBE_API_KEY}`;
