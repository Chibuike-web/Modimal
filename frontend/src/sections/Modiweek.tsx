import { motion, Variants } from "motion/react";
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

const fadeIn: Variants = {
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
				<LikeIcon className="absolute top-[1rem] right-[1rem] z-100" />
			</figure>
			<p className="font-bold pt-[38px]">{text}</p>
		</motion.div>
	);
};
