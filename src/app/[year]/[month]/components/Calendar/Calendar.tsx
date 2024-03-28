import { getDates } from "@/app/utilities/calendarUtility";
import { format } from "date-fns/format";
import { isSameMonth } from "date-fns";
import styles from "./Calendar.module.css";
import Link from "next/link";
import { DaysOfWeek } from "@/app/components/DaysOfWeek/DaysOfWeek";
import { months } from "@/app/constants/calendar";

type CalendarProps = {
	year: number;
	month: number;
};

export function Calendar({ year, month }: CalendarProps) {
	const dates = getDates(year, month).map((date, index) => {
		const day = format(date, "d");

		return (
			<Link
				className={
					isSameMonth(date, new Date(year, month)) ? styles.day : styles.other
				}
				key={date.toString()}
				href={`${month}/${day}`}
			>
				{day}
			</Link>
		);
	});

	return (
		<div>
			<Link href={`/${year}`}>Назад</Link>
			<h3>2024 {months[month]}</h3>
			<DaysOfWeek show />
			<div className={styles.days}>{dates}</div>
		</div>
	);
}
