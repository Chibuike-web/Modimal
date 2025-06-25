import ShopAllImage from "../assets/ShopAll/ShopAll.png";
import { CardComponent } from "../components/Card";
import { DesktopFilter } from "../components/DesktopFilter";
import { MobileFilter } from "../components/MobileFilter";
import { useShowFilter } from "../Hooks";
import { FilterIcon } from "../Icons";
import { useFilterItem } from "../store/useFilterItem";

export default function ShopAll() {
	const { isShowFilter, setIsShowFilter } = useShowFilter();

	return (
		<section>
			<div className="w-full max-w-[76.5rem] mx-auto my-10">
				<p className="flex px-6 xl:px-0 gap-4 text-[12px] md:text-[16px]">
					<span>Home</span> / <span>Shop All</span>
				</p>
			</div>
			<img src={ShopAllImage} alt="" className="w-full" />
			<div className=" mx-auto max-w-[76.5rem] flex flex-col justify-center items-center ">
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
			</div>

			{isShowFilter && (
				<MobileFilter isShowFilter={isShowFilter} setIsShowFilter={setIsShowFilter} />
			)}
		</section>
	);
}

const CardContainer = () => {
	const { filteredList } = useFilterItem();
	const shopItems = filteredList.filter((item) => item.categories?.includes("shopAll"));

	if (shopItems.length === 0) {
		return (
			<div className="w-full max-w-[808px] grid h-[27vh] place-items-center">
				<p className="text-muted-foreground text-lg">No results found</p>
			</div>
		);
	}
	return (
		<section className="flex flex-col items-center gap-12">
			<div className="grid grid-cols-2 max-w-[808px] xl:px-0 xl:w-full gap-4 md:gap-6 w-full">
				{shopItems.map((item) => (
					<CardComponent key={item.id} item={item} />
				))}
			</div>
			<button className="border border-primary text-primary h-[40px] w-[184px]">Load More</button>
		</section>
	);
};
