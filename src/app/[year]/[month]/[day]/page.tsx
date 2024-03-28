import Link from "next/link";

type Params = {
	month: number;
	year: number;
	day: number;
};

type Props = {
	params: Params;
};

export default function Page(props: Props) {
	const { params } = props;
	const { year, month, day } = params;

	return (
		<>
			<Link href={`/${year}/${month}`}>Назад</Link>
			<div>{`${day}.${month}.${year}`}</div>
		</>
	);
}
