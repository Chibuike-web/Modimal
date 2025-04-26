import { useState } from "react";
import { DownArrowIcon, LikeIcon } from "../Icons";

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
};

export const CardComponent = ({ id, image, name, description, price, colors }: Product) => {
	return (
		<article id={`card-${id}`} className="w-full max-md:min-w-[152px]">
			<figure className="relative">
				<img src={image} alt="" />
				<LikeButton />
			</figure>
			<div className="flex items-center justify-between">
				<div className="mt-[0.5rem] flex flex-col gap-[0.5rem]">
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
