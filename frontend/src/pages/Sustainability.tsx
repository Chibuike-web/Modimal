import { twMerge } from "tailwind-merge";
import HeroImage from "../assets/Sustainability1.png";
import { useAccordion, useWindowWidth } from "../Hooks";
import { CardType, Principle } from "./types";
import { CardItems, principles, sustainabilityPeople } from "./utils";
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
					<Layout />
				</div>
				<div className="grid grid-cols-2 gap-6">
					{CardItems.map((item) => (
						<Card key={item.id} {...item} />
					))}
				</div>
				<p className="text-[20px] mt-12">
					"With every step, our quest for sustainability is fortified by our trusted suppliers,
					united in our shared dedication to ethical craftsmanship and a more conscious future."
				</p>
				<div className="flex flex-col">
					<h3 className="font-bold text-[1.5rem] leading-[1.4] mt-12 mb-6">People Beyond Us</h3>
					<div className="grid grid-cols-3 md:grid-cols-5 grid-rows-[243px_283px] gap-6">
						{sustainabilityPeople.map((item, index) => (
							<figure
								key={item.id}
								className={twMerge(
									index === 0 || index === 1
										? "col-span-full md:col-span-0"
										: index === 2
										? "col-span-full md:col-span-2"
										: index === 3
										? "col-span-full md:col-span-2"
										: ""
								)}
							>
								<img src={item.image} alt="" className="w-full h-full object-cover" />
							</figure>
						))}
					</div>
					<button
						type="button"
						className="w-full self-center h-[40px] md:max-w-[600px] bg-primary text-white text-sm font-medium flex items-center justify-center mt-6 mb-12"
					>
						Our Suppliers
					</button>
					<p className="text-[20px]">
						With Modimal, you're not just wearing fashion – you're making a statement. A statement
						that elegance and sustainability can coexist, shaping a more responsible and beautiful
						future for us all.
					</p>
				</div>
			</section>
		</main>
	);
}

const Layout = () => {
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

const Card = ({ image, buttonText }: CardType) => {
	return (
		<div className="flex flex-col gap-4">
			<figure className="w-full h-full">
				<img src={image} alt="" className="w-full h-full object-cover" />
			</figure>
			<button
				type="button"
				className="w-full h-[40px] bg-primary text-white text-sm font-medium flex items-center justify-center"
			>
				{buttonText}
			</button>
		</div>
	);
};
