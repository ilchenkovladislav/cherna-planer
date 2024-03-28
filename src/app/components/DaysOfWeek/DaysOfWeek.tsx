import {daysOfWeek} from "@/app/constants/calendar";
import styles from "./DayOfWeek.module.css";

type DaysOfWeekProps = {
	show?: boolean;
};

export function DaysOfWeek({ show }: DaysOfWeekProps) {
	if (!show) return null;

	return (
		<div className={styles.daysOfWeek}>
			{daysOfWeek.map((dayOfWeek) => (
				<div key={dayOfWeek}>{dayOfWeek}</div>
			))}
		</div>
	);
}
