import { Calendar } from "@/app/components/Calendar/Calendar";

type Params = {
	year: number;
};

type Props = {
	params: Params;
};

export default function Page(props: Props) {
	return <Calendar year={props.params.year} />;
}
