import { useSearchParams } from "react-router";
import { FilterIcon } from "../Icons";
import { Product } from "../types";
import { useShowFilter } from "../Hooks";
import { DesktopFilter } from "../components/DesktopFilter";
import { MobileFilter } from "../components/MobileFilter";
import { CardComponent } from "../components/Card";
import { useFilterItem } from "../store/useFilterItem";

export default function SearchResults() {
	const { isShowFilter, setIsShowFilter } = useShowFilter();
	const [searchParams] = useSearchParams();
	const query = searchParams.get("q");
	return (
		<div>
			<h1 className="text-center">Search Results</h1>
			<p className="text-center mb-8">
				Showing results for: <strong>{query}</strong>
			</p>

			<section className=" mx-auto max-w-[76.5rem] flex flex-col justify-center items-center ">
				<button
					type="button"
					className="xl:hidden flex mb-4 w-full py-6 justify-center"
					onClick={() => setIsShowFilter(!isShowFilter)}
				>
					<FilterIcon /> <p>Filter</p>
				</button>
				<div className="flex flex-col items-start justify-center md:flex-row gap-6 w-full px-6 mt-6 xl:px-0">
					<DesktopFilter />
					<CardContainer />
				</div>
			</section>

			{isShowFilter && (
				<MobileFilter isShowFilter={isShowFilter} setIsShowFilter={setIsShowFilter} />
			)}
		</div>
	);
}

const CardContainer = () => {
	const [searchParams] = useSearchParams();
	const { filteredList } = useFilterItem();
	const query = searchParams.get("q");
	const searchResults = filteredList.filter((item) =>
		item.keywords?.some((keyword) => keyword.includes(`${query}`))
	);
	return (
		<div className="grid grid-cols-2 max-w-[808px] xl:px-0 xl:w-full gap-4 md:gap-6 w-full">
			{searchResults.map((item: Product) => (
				<div>
					<CardComponent item={item} />
				</div>
			))}
		</div>
	);
};
