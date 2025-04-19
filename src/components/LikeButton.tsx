import { useState } from "react";
import { LikeIcon } from "../Icons";

export default function LikeButton() {
	const [isClicked, setIsClicked] = useState(false);
	return (
		<figure onClick={() => (isClicked ? setIsClicked(false) : setIsClicked(true))}>
			<LikeIcon
				className="absolute top-[1.5rem] right-[1.5rem] cursor-pointer"
				fill={isClicked ? "red" : "white"}
				stroke={isClicked ? "" : "#0C0C0C"}
			/>
		</figure>
	);
}
