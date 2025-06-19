import { useState } from "react";
import { CheckBox } from "../Icons";
import { SelectButtonProps } from "../types";
import clsx from "clsx";
import { useFilterItem } from "../store/useFilterItem";

export const SelectButton = ({ id, label, title, className }: SelectButtonProps) => {
	const [selected, setSelected] = useState("");
	const { toggleFilterItem } = useFilterItem();

	const handleSelected = (id: string) => {
		selected === id ? setSelected("") : setSelected(id);
	};

	return (
		<button
			className="w-full flex items-center gap-[0.5rem] leading-[1.6]"
			onClick={() => {
				handleSelected(id);
				toggleFilterItem(label);
			}}
		>
			<CheckBox fill={selected === id ? "#5A6D57" : "white"} />
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
