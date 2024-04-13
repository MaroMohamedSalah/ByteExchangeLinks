import React from "react";

interface formatDateProps {
	unFormattedDate: string;
}
interface formatDateAndTimeProps {
	isoDateString: string;
}

export const formatDate: React.FC<formatDateProps> = ({ unFormattedDate }) => {
	// Check if unFormattedDate is a valid date string
	const date = new Date(unFormattedDate);
	if (isNaN(date.getTime())) {
		return "Invalid Date";
	}

	const options: Intl.DateTimeFormatOptions = {
		year: "numeric",
		month: "long",
		day: "numeric",
	};

	return new Intl.DateTimeFormat("en-US", options).format(date);
};
export const formatDateAndTime: React.FC<formatDateAndTimeProps> = ({
	isoDateString,
}) => {
	// Create a new Date object from the ISO 8601 string
	const date = new Date(isoDateString);

	// Get the components of the date
	const year = date.getFullYear();
	// JavaScript months are zero-based, so we add 1 to get the correct month
	const month = String(date.getMonth() + 1).padStart(2, "0");
	const day = String(date.getDate()).padStart(2, "0");

	// Get the hours in 12-hour format
	let hours = date.getHours();
	const ampm = hours >= 12 ? "PM" : "AM";
	hours = hours % 12;
	hours = hours ? hours : 12; // Handle midnight (0 hours)
	const formattedHours = String(hours).padStart(2, "0");

	const minutes = String(date.getMinutes()).padStart(2, "0");
	const seconds = String(date.getSeconds()).padStart(2, "0");

	// Construct the formatted date and time string
	const formattedDate = `${year}-${month}-${day}`;
	const formattedTime = `${formattedHours}:${minutes}:${seconds} ${ampm}`;

	// Return the formatted date and time string
	return `${formattedDate} ${formattedTime}`;
};
