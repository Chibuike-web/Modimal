import { CancelIcon } from "../Icons";
import { filterList } from "../utils";
import { FilterButton } from "./FilterButton";
import { motion } from "motion/react";

export const MobileFilter = ({
	isShowFilter,
	setIsShowFilter,
}: {
	isShowFilter: boolean;
	setIsShowFilter: (value: boolean) => void;
}) => {
	return (
		<motion.div
			initial={{ opacity: 0, x: 100 }}
			animate={{ opacity: 1, x: 0 }}
			exit={{ opacity: 0, x: 100 }}
			transition={{ duration: 0.3 }}
			className=" bg-white fixed top-0 z-100 flex flex-col w-full h-screen px-6 py-12 overflow-y-auto"
		>
			<div className="flex justify-between items-center mb-6">
				<h2 className="font-semibold text-gray-950 text-[2rem]">Filters</h2>
				<button type="button" onClick={() => setIsShowFilter(!isShowFilter)}>
					<CancelIcon />
				</button>
			</div>
			<div className="grid grid-cols-1 gap-4 mb-8">
				{filterList.map(({ id, title, list }) => (
					<FilterButton key={id} id={id} title={title} list={list} />
				))}
			</div>
			<div className="flex items-center w-full gap-6 mt-auto">
				<button type="button" className="w-full h-10">
					Clear All Filters
				</button>
				<button type="button" className="bg-primary w-full h-10 text-white">
					Apply Filters
				</button>
			</div>
		</motion.div>
	);
};
