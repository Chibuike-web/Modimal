import { AddIcon, MinusIcon } from "../Icons";
import type { AccordionItemType } from "./types";
import { accordionData } from "./utils";
import { twMerge } from "tailwind-merge";
import { motion, AnimatePresence } from "motion/react";
import { useAccordion } from "../Hooks";

export default function FAQs() {
	return (
		<main className="mx-auto w-full max-w-[1224px] max-xl:px-6">
			<div className="flex space-x-2 py-1 px-4 text-sm">
				<span className="text-primary">Home</span>
				<span>/</span>
				<span className="font-medium text-black">FAQs</span>
			</div>
			<Accordion />
		</main>
	);
}

const Accordion = () => {
	const { expandedId, toggleExpand } = useAccordion();

	return (
		<div className="mx-auto w-full max-w-[1016px] mt-6">
			<h1 className="mb-4 text-[1.5rem] md:text-[2rem] font-semibold leading-[1.4]">FAQs</h1>
			{accordionData.map((item) => (
				<AccordionItem
					key={item.id}
					{...item}
					isExpanded={expandedId === item.id}
					onToggle={() => toggleExpand(item.id)}
				/>
			))}
		</div>
	);
};

type AccordionItemProps = AccordionItemType & {
	isExpanded: boolean;
	onToggle: () => void;
};

const AccordionItem = ({ id, title, content, isExpanded, onToggle }: AccordionItemProps) => {
	const dynamicStyle = twMerge(
		"flex items-center justify-between text-left w-full cursor-pointer",
		isExpanded && "text-primary"
	);

	return (
		<article className="border-b border-gray-300 py-4 md:p-6">
			<h3>
				<button
					type="button"
					className={dynamicStyle}
					aria-expanded={isExpanded}
					aria-controls={`accordion-panel-${id}`}
					id={`accordion-header-${id}`}
					onClick={onToggle}
				>
					<span className="text-sm md:text-[20px] font-bold ">{title}</span>
					<span className="flex-shrink-0">
						{isExpanded ? <MinusIcon /> : <AddIcon fill="black" />}
					</span>
				</button>
			</h3>
			<AnimatePresence>
				{isExpanded && (
					<motion.div
						initial={{ opacity: 0, height: 0 }}
						animate={{ opacity: 1, height: "auto" }}
						exit={{ opacity: 0, height: 0 }}
						transition={{ duration: 0.2 }}
						id={`accordion-panel-${id}`}
						role="region"
						aria-labelledby={`accordion-header-${id}`}
						className=" overflow-hidden"
					>
						{content.split("\n").map((line, index) => (
							<p key={index} className="pt-2 md:pt-6 text-[12px] md:text-base text-gray-700">
								{line}
							</p>
						))}
					</motion.div>
				)}
			</AnimatePresence>
		</article>
	);
};
