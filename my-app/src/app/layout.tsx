import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "ByteExchange",
	description: "By Marwan",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				{/* Google Analytics */}
				<script
					async
					src="https://www.googletagmanager.com/gtag/js?id=G-1BYGX7Q0R9"
				></script>
				<script
					dangerouslySetInnerHTML={{
						__html: `
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());

                            gtag('config', 'G-1BYGX7Q0R9');
                        `,
					}}
				/>
				{/* End Google Analytics */}
			</head>
			<body className={inter.className}>{children}</body>
		</html>
	);
}
