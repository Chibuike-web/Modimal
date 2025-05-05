import Modiweek1 from "../assets/Modiweek/Modiweek1.png";
import Modiweek2 from "../assets/Modiweek/Modiweek2.png";
import Modiweek3 from "../assets/Modiweek/Modiweek3.png";
import Modiweek4 from "../assets/Modiweek/Modiweek4.png";
import Modiweek5 from "../assets/Modiweek/Modiweek5.png";
import { LikeButton } from "../Components";
import { motion } from "motion/react";

type CardProps = {
	text: string;
	image?: string;
};

const cardData: CardProps[] = [
	{ text: "Sunday", image: Modiweek1 },
	{ text: "Monday", image: Modiweek2 },
	{ text: "Tuesday", image: Modiweek3 },
	{ text: "Wednesday", image: Modiweek4 },
	{ text: "Thursday", image: Modiweek5 },
];
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

const fadeIn = {
	initial: { opacity: 0, x: 100 },
	animate: (i: number) => ({
		opacity: 1,
		x: 0,
		transition: {
			delay: i * 0.5,
			duration: 1,
			ease: "easeOut",
		},
	}),
};

const Card = ({ image, text, index }: CardProps2) => {
	return (
		<motion.div
			variants={fadeIn}
			custom={index}
			initial="initial"
			whileInView="animate"
			viewport={{ once: true, amount: 0.3 }}
		>
			<figure className="relative w-full min-w-[288px] flex">
				<img src={image} alt="" className="w-full" />
				<LikeButton />
			</figure>
			<p className="font-bold pt-[38px]">{text}</p>
		</motion.div>
	);
};
