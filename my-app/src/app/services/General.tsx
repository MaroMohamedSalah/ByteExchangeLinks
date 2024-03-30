import React from "react";

interface formatDateProps {
	unFormattedDate: string;
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
