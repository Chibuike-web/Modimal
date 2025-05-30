import { twMerge } from "tailwind-merge";
import HeroImage from "../assets/Sustainability1.png";
import { useAccordion, useWindowWidth } from "../Hooks";
import { Principle } from "./types";
import { principles } from "./utils";
import { AddIcon, MinusIcon } from "../Icons";
import { motion, AnimatePresence } from "motion/react";

export default function Sustainability() {
	return (
		<main>
			<section className="mx-auto max-w-[76.5rem] my-8 max-xl:px-6 flex space-x-2 py-1 px-4 text-sm">
				<span className="text-primary">Home</span>
				<span>/</span>
				<span className="text-gray-900">Sustainability</span>
				<span>/</span>
				<span className="text-gray-900">Mission</span>
			</section>
			<figure className="w-full h-[155px] sm:h-[300px] lg:h-[400px] xl:h-[600px] relative">
				<img src={HeroImage} alt="" className="w-full h-full object-cover object-top" />
				<h1 className="text-white text-sm sm:text-lg lg:text-2xl xl:text-[32px] font-bold absolute bottom-[17px] sm:bottom-[32px] lg:bottom-[66px]  w-full text-center">
					Elegance in simplicity, Earth’s harmony
				</h1>
			</figure>
			<section className="mx-auto max-w-[76.5rem] max-xl:px-6 flex flex-col">
				<h2 className="my-8 font-semibold text-[2rem]">Sustainability At Modimal</h2>
				<p className="text-[20px]">
					At Modimal, sustainability is at the heart of everything we do. Our brand identity,
					characterized by its simplicity and elegance, is a reflection of our commitment to a more
					sustainable future.
				</p>
				<div>
					<h3 className="text-xl md:text-[1.5rem] font-bold leading-[1.4] mb-8 mt-12">
						Our Mission, The Modimal Six:
					</h3>
					<DeskstopSection />
				</div>
			</section>
		</main>
	);
}

const DeskstopSection = () => {
	const { expandedId, toggleExpand } = useAccordion();
	const windowSize = useWindowWidth();

	const gridStyle = twMerge("grid w-full", windowSize > 768 ? "grid-cols-2 gap-12" : "gap-6");
	return (
		<div className={gridStyle}>
			{principles.map((item) => (
				<>
					{windowSize > 768 ? (
						<DesktopCard {...item} />
					) : (
						<MobileCard
							{...item}
							isExpanded={expandedId === item.id}
							toggleExpand={() => toggleExpand(item.id)}
						/>
					)}
				</>
			))}
		</div>
	);
};

const DesktopCard = ({ title, description }: Principle) => {
	return (
		<article>
			<h4 className="font-bold text-[20px] mb-4">{title}</h4>
			<p>{description}</p>
		</article>
	);
};

type MobileCardProps = Principle & {
	isExpanded: boolean;
	toggleExpand: () => void;
};

const MobileCard = ({ title, description, isExpanded, toggleExpand }: MobileCardProps) => {
	const dynamicStyle = twMerge(
		"flex items-center justify-between text-left w-full cursor-pointer",
		isExpanded && "text-primary"
	);
	return (
		<article className="py-4 border-b border-gray-300 overflow-hidden">
			<button type="button" onClick={toggleExpand} className={dynamicStyle}>
				<span className="text-lg md:text-[20px] font-bold ">{title}</span>
				<span className="flex-shrink-0">
					{isExpanded ? <MinusIcon /> : <AddIcon fill="black" />}
				</span>
			</button>
			<AnimatePresence>
				{isExpanded && (
					<motion.p
						initial={{ opacity: 0, height: 0 }}
						animate={{ opacity: 1, height: "auto" }}
						exit={{ opacity: 0, height: 0 }}
						transition={{ duration: 0.2 }}
						className="pt-2"
					>
						{description}
					</motion.p>
				)}
			</AnimatePresence>
		</article>
	);
};
