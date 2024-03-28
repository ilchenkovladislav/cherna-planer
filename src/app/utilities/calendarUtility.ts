import {eachDayOfInterval, endOfISOWeek, endOfMonth, startOfISOWeek, startOfMonth,} from "date-fns";

export function getDates(year: number, month: number): Date[] {
	const monthStart = startOfMonth(new Date(year, month));
	const monthEnd = endOfMonth(monthStart);
	const start = startOfISOWeek(monthStart);
	const end = endOfISOWeek(monthEnd);

	return [...eachDayOfInterval({ start, end })];
}
