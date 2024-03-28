import {getDates} from "@/app/utilities/calendarUtility";
import styles from "./DayList.module.css";
import {format} from "date-fns/format";
import {getISOWeek, isSameMonth} from "date-fns";

type DayListProps = {
	month: number;
	year: number;
};

function getWeeks(year: number, month: number): number[] {
	const weeks = new Set<number>();
	const date = new Date(year, month);
	while (date.getMonth() === month) {
		const weekNumber = getISOWeek(date);
		weeks.add(weekNumber);
		date.setDate(date.getDate() + 1);
	}
	return [...weeks];
}

export function DayList(props: DayListProps) {
	const { year, month } = props;

	return (
		<div className={styles.wrapper}>
			<div className={styles.days}>
				{getDates(year, month).map((date, index) => {
					if (!isSameMonth(date, new Date(year, month)))
						return <div key={index} />;

					const day = format(date, "d");

					return <div key={date.toString()}>{day}</div>;
				})}
			</div>
			<div className={styles.weeks}>
				{getWeeks(year, month).map((weekNumber) => (
					<div>{weekNumber}</div>
				))}
			</div>
		</div>
	);
}
