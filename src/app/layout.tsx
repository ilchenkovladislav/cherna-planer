import { ReactNode } from "react";
import { Ubuntu } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";

const ubuntu = Ubuntu({
	weight: "400",
	subsets: ["cyrillic", "latin"],
	display: "swap",
});

export const metadata: Metadata = {
	title: "Nani planer",
	description: "Помогаем с планами",
};

export default function RootLayout({
	children,
}: {
	children: ReactNode;
}) {
	return (
		<html lang="ru">
			<body className={ubuntu.className}>{children}</body>
		</html>
	);
}
