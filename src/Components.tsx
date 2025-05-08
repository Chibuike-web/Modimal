import { useState } from "react";
import { AddIcon, CancelIcon, CheckIcon, DownArrowIcon, LikeIcon, MinusIcon } from "./Icons";
import { AnimatePresence, motion } from "motion/react";
import { useClicked } from "./Hooks";
import { useChecked } from "./store/useChecked";
import { Product } from "./utils";
import { filterList } from "./utils";

export function LikeButton() {
	const [isClicked, setIsClicked] = useState(false);
	return (
		<button type="button" onClick={() => (isClicked ? setIsClicked(false) : setIsClicked(true))}>
			<LikeIcon
				className="absolute top-6 right-6 max-lg:top-[8px] max-lg:right-[8px] cursor-pointer"
				fill={isClicked ? "red" : "white"}
				stroke={isClicked ? "" : "#0C0C0C"}
			/>
		</button>
	);
}

export function DownArrowButton() {
	const { isClicked, setIsClicked } = useClicked();
	return (
		<button type="button" onClick={() => (isClicked ? setIsClicked(false) : setIsClicked(true))}>
			<DownArrowIcon
				className={`transition-transform duration-300 ease-in-out ${isClicked ? "rotate-180" : ""}`}
			/>
		</button>
	);
}

export const CardComponent = ({
	id,
	image,
	name,
	description,
	price,
	colors,
	search,
	tag,
}: Product) => {
	return (
		<article
			id={`card-${id}`}
			className={`w-full flex flex-col gap-[1rem] max-w-[392px] ${
				search ? "" : "max-md:min-w-[152px]"
			}`}
		>
			<figure className="relative w-full flex ">
				<img src={image} alt="" className="w-full h-full" />
				<LikeButton />
				{tag && (
					<span className="w-[86px] h-[32px] absolute left-6 top-6 flex items-center justify-center bg-white">
						{tag}
					</span>
				)}
			</figure>
			<div className="flex items-center justify-between">
				<div className="flex flex-col gap-[0.5rem]">
					<h3 className="font-bold">{name}</h3>
					<p>{description}</p>
					<div className="flex gap-[0.5rem]">
						{colors?.map((color, index) => (
							<span key={index} className={`block w-6 h-6 rounded-full ${color}`}></span>
						))}
					</div>
				</div>
				<p className="font-bold">${price}</p>
			</div>
		</article>
	);
};

interface List {
	id: string;
	label: string;
	colorCode?: string;
}

interface SelectButtonProps extends List {
	title: string;
}

interface FilterButtonProps {
	id: string;
	title: string;
	list?: List[];
}

export const FilterButton = ({ id, title, list }: FilterButtonProps) => {
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
							{list?.map(({ id, label, colorCode }: List) => (
								<SelectButton key={id} id={id} label={label} title={title} colorCode={colorCode} />
							))}
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};

const SelectButton = ({
	id,
	label,
	title,
	colorCode,
}: SelectButtonProps & { colorCode?: string }) => {
	const { selectedItems, toggleItem } = useChecked();
	const isChecked = selectedItems[id] || false;

	return (
		<button
			className="w-full flex items-center gap-[0.5rem] leading-[1.6]"
			onClick={() => {
				toggleItem(id);
				console.log(selectedItems);
			}}
		>
			<CheckIcon fill={isChecked ? "#5A6D57" : "white"} />
			{title === "Color" && colorCode && (
				<span
					className="block w-4 h-4 rounded-full"
					style={{
						backgroundColor: colorCode,
						border: label === "White" ? "1px solid black" : "none",
					}}
				/>
			)}
			{label}
		</button>
	);
};

export const DesktopFilter = () => {
	return (
		<div className="w-full max-w-[392px] hidden xl:block sticky max-h-[1411px] overflow-y-auto top-[8rem]">
			<h2 className="font-semibold text-gray-950 text-[2rem] mb-4">Filters</h2>
			<div className="flex items-center w-full gap-6 mb-4">
				<button type="button" className="w-full h-10">
					Clear All Filters
				</button>
				<button type="button" className="bg-primary w-full h-10 text-white">
					Apply Filters
				</button>
			</div>
			<div className="grid grid-cols-1 gap-4">
				{filterList.map(({ id, title, list }) => (
					<FilterButton key={id} id={id} title={title} list={list} />
				))}
			</div>
		</div>
	);
};

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
