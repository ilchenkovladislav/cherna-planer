import { ReactNode } from "react";
import { Roboto } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";

const roboto = Roboto({
	weight: "400",
	subsets: ["cyrillic", "latin"],
	display: "swap",
});

export const metadata: Metadata = {
	title: "Чернецкая планер",
	description: "Помогаем с планами",
};

export default function RootLayout({
	children,
}: {
	children: ReactNode;
}) {
	return (
		<html lang="ru">
			<body className={roboto.className}>{children}</body>
		</html>
	);
}
