import { useState } from "react";
import { FilterButtonProps, List } from "../types";
import { AddIcon, MinusIcon } from "../Icons";
import { motion, AnimatePresence } from "motion/react";
import { SelectButton } from "./SelectButton";

export const FilterButton = ({ title, list }: FilterButtonProps) => {
	const [isShowDropdown, setIsShowDropdown] = useState(false);

	return (
		<div
			className={`${
				isShowDropdown ? "bg-white border" : "bg-primary text-white"
			} flex flex-col px-4 py-[13px] `}
		>
			<div
				className={`flex justify-between ${
					isShowDropdown && "text-primary"
				} w-full items-center font-bold cursor-pointer`}
				onClick={() => setIsShowDropdown(!isShowDropdown)}
			>
				{title}
				{isShowDropdown ? <MinusIcon /> : <AddIcon />}
			</div>
			<AnimatePresence>
				{isShowDropdown && (
					<motion.div
						key="dropdown"
						className="flex flex-col gap-1 overflow-hidden"
						initial={{ height: 0, opacity: 0 }}
						animate={{ height: "auto", opacity: 1 }}
						exit={{ height: 0, opacity: 0 }}
						transition={{
							duration: 0.2,
							ease: "easeInOut",
						}}
					>
						<div className="py-3 flex flex-col gap-[8px]">
							{list?.map(({ id, label, className }: List) => (
								<SelectButton key={id} id={id} label={label} title={title} className={className} />
							))}
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};
