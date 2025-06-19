import { filterList } from "../utils";
import { FilterButton } from "./FilterButton";

export const DesktopFilter = () => {
	return (
		<div className="w-full max-w-[392px] hidden xl:block sticky overflow-y-auto top-[8rem]">
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
