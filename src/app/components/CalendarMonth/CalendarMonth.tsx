import styles from "@/app/components/Calendar/Calendar.module.css";
import {DaysOfWeek} from "@/app/components/DaysOfWeek/DaysOfWeek";
import {DayList} from "@/app/components/DayList/DayList";
import Link from "next/link";

type CalendarMonthProps = {
	month: string;
	year: number;
	index: number;
	showDaysOfWeek?: boolean;
};

export function CalendarMonth(props: CalendarMonthProps) {
	const { month, index, year, showDaysOfWeek } = props;
	const href = `${year}/${index}`;

	return (
		<div key={month} className={styles.month}>
			<h3 className={styles.title}>{month}</h3>
			<DaysOfWeek show={showDaysOfWeek} />
			<DayList year={year} month={index} />

			<Link href={href} className={styles.link} />
		</div>
	);
}
