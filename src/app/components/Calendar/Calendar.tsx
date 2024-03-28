import styles from "./Calendar.module.css";
import {months} from "@/app/constants/calendar";
import {CalendarMonth} from "@/app/components/CalendarMonth/CalendarMonth";

type CalendarProps = {
	year: number;
	showDaysOfWeek?: boolean;
};

export function Calendar({ year, showDaysOfWeek }: CalendarProps) {
	return (
		<div>
			<h2>{year}</h2>
			<div className={styles.months}>
				{months.map((month, index) => (
					<CalendarMonth
						month={month}
						year={year}
						index={index}
						showDaysOfWeek={showDaysOfWeek}
						key={month}
					/>
				))}
			</div>
		</div>
	);
}
