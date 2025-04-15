import { useState, useRef } from "react";

export function useDropdownHover() {
	const [hover, setHover] = useState("");
	const timeoutRef = useRef<number | null>(null);

	const handleMouseEnter = (item: string) => {
		if (timeoutRef.current) clearTimeout(timeoutRef.current);
		setHover(item);
	};

	const handleMouseLeave = () => {
		timeoutRef.current = setTimeout(() => {
			setHover("");
		}, 150);
	};

	return { hover, handleMouseEnter, handleMouseLeave };
}
