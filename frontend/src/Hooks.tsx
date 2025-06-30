import { useState, useRef, useEffect } from "react";

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

export const useClicked = () => {
	const [isClicked, setIsClicked] = useState(false);
	return {
		isClicked,
		setIsClicked,
	};
};

export const useMediaQuery = (query: string) => {
	const [matches, setMatches] = useState(false);

	useEffect(() => {
		const media = window.matchMedia(query);
		if (media.matches !== matches) {
			setMatches(media.matches);
		}
		const listener = () => setMatches(media.matches);
		media.addEventListener("change", listener);
		return () => media.removeEventListener("change", listener);
	}, [query, matches]);

	return matches;
};

export const useShowFilter = () => {
	const [isShowFilter, setIsShowFilter] = useState(false);

	return {
		isShowFilter,
		setIsShowFilter,
	};
};

export const useAccordion = () => {
	const [expandedId, setExpandedId] = useState<string>("");

	const toggleExpand = (id: string) => {
		setExpandedId((prev) => (prev === id ? "" : id));
	};

	return {
		expandedId,
		toggleExpand,
	};
};
