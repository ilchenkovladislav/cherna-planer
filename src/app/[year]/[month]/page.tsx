import { Calendar } from "@/app/[year]/[month]/components/Calendar/Calendar";

type Params = {
	month: number;
	year: number;
};

type Props = {
	params: Params;
};

export default function Page(props: Props) {
	const { params } = props;
	const { month, year } = params;

	return <Calendar year={year} month={month} />;
}
