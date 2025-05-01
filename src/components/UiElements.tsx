import { useState } from "react";
import { AddIcon, CheckIcon, DownArrowIcon, LikeIcon, MinusIcon } from "../Icons";
import { AnimatePresence, motion } from "motion/react";

export function LikeButton() {
	const [isClicked, setIsClicked] = useState(false);
	return (
		<button type="button" onClick={() => (isClicked ? setIsClicked(false) : setIsClicked(true))}>
			<LikeIcon
				className="absolute top-[1.5rem] right-[1.5rem] max-lg:top-[8px] max-lg:right-[8px] cursor-pointer"
				fill={isClicked ? "red" : "white"}
				stroke={isClicked ? "" : "#0C0C0C"}
			/>
		</button>
	);
}

export function DownArrowButton() {
	const [isClicked, setIsClicked] = useState(false);
	return (
		<button type="button" onClick={() => (isClicked ? setIsClicked(false) : setIsClicked(true))}>
			<DownArrowIcon
				className={`transition-transform duration-300 ease-in-out ${isClicked ? "rotate-180" : ""}`}
			/>
		</button>
	);
}

export type Product = {
	id: number;
	image: string;
	name: string;
	description: string;
	price: number;
	colors?: string[];
	search?: boolean;
};

export const CardComponent = ({ id, image, name, description, price, colors, search }: Product) => {
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
			</figure>
			<div className="flex items-center justify-between">
				<div className="flex flex-col gap-[0.5rem]">
					<h3 className="font-bold">{name}</h3>
					<p>{description}</p>
					<div className="flex gap-[0.5rem]">
						{colors?.map((color) => (
							<span key={color} className={`block w-6 h-6 rounded-full ${color}`}></span>
						))}
					</div>
				</div>
				<p className="font-bold">${price}</p>
			</div>
		</article>
	);
};

interface FilterButtonProps {
	id: number;
	title: string;
	list?: string[];
}

export const FilterButton = ({ id, title, list }: FilterButtonProps) => {
	const [isShowDropdown, setIsShowDropdown] = useState(false);

	return (
		<motion.div
			initial={{ opacity: 0, height: 0 }}
			animate={{ opacity: 1, height: "auto" }}
			exit={{ opacity: 0, height: 0 }}
			transition={{ duration: 0.3 }}
			className={`${
				isShowDropdown ? "bg-white text-gray-950 border" : "bg-primary text-white"
			} flex flex-col px-4 py-[13px] `}
		>
			<div
				className=" flex justify-between w-full items-center font-bold cursor-pointer"
				onClick={() => setIsShowDropdown(!isShowDropdown)}
			>
				{title}
				{isShowDropdown ? <MinusIcon /> : <AddIcon />}
			</div>
			<AnimatePresence>
				{isShowDropdown && (
					<motion.div
						key="dropdown"
						className="py-[13px] flex flex-col gap-[4px]"
						initial={{ opacity: 0, height: 0 }}
						animate={{ opacity: 1, height: "auto" }}
						exit={{ opacity: 0, height: 0 }}
						transition={{ duration: 0.3 }}
					>
						{list?.map((listItem) => (
							<SelectButton key={listItem} listItem={listItem} />
						))}
					</motion.div>
				)}
			</AnimatePresence>
		</motion.div>
	);
};

const SelectButton = ({ listItem }: { listItem: string }) => {
	const [isChecked, setIsChecked] = useState(false);
	return (
		<button
			className="w-full flex items-center gap-[0.5rem] leading-[1.6]"
			onClick={() => setIsChecked(!isChecked)}
		>
			<CheckIcon fill={isChecked ? "#5A6D57" : "white"} />
			{listItem}
		</button>
	);
};
