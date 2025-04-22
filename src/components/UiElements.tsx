import { useState } from "react";
import { DownArrowIcon, LikeIcon, SearchIcon } from "../Icons";

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
