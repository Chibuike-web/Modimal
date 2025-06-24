import { cardData } from "./utils";
import { CardProps } from "./types";
import { LikeIcon } from "../Icons";

export default function Modiweek() {
	return (
		<section className="mx-auto max-w-[76.5rem] mt-[5.5rem] max-md:px-6">
			<h1 className="font-semibold text-[2rem] max-md:text-[20px] mb-6 ">Modiweek</h1>
			<div className="flex gap-6 mt-6 pr-10 overflow-x-scroll">
				{cardData.map(({ text, image }, index) => (
					<Card key={text} text={text} index={index} image={image} />
				))}
			</div>
		</section>
	);
}

type CardProps2 = CardProps & {
	index: number;
};

const Card = ({ image, text }: CardProps2) => {
	return (
		<div>
			<figure className="relative w-full min-w-[288px] flex">
				<img src={image} alt="" className="w-full" />
				<LikeIcon className="absolute top-[1rem] right-[1rem] z-100" />
			</figure>
			<p className="font-bold pt-[38px]">{text}</p>
		</div>
	);
};
