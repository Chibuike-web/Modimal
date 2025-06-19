import { useClicked } from "../Hooks";
import { DownArrowIcon } from "../Icons";

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
