import { CheckBox } from "../Icons";
import { SelectButtonProps } from "../types";
import clsx from "clsx";
import { useFilterItem } from "../store/useFilterItem";

export const SelectButton = ({ label, title, className }: SelectButtonProps) => {
	const { toggleFilterItem, filterItems, filteredList } = useFilterItem();

	return (
		<button
			className="w-full flex items-center gap-[0.5rem] leading-[1.6]"
			onClick={() => {
				toggleFilterItem(label);
				console.log("filterItems:", filterItems);
				console.log("filteredList:", filteredList);
			}}
		>
			<CheckBox fill={filterItems.includes(label) ? "#5A6D57" : "white"} />
			{title === "Color" && className && (
				<span
					className={clsx(
						"block w-4 h-4 rounded-full",
						className,
						label === "White" && "border border-black"
					)}
				/>
			)}
			{label}
		</button>
	);
};
