import ShopAllImage from "../../assets/ShopAll/ShopAll.png";
import { useShowFilter } from "../../Hooks";
import { FilterIcon } from "../../Icons";
import { DesktopFilter, MobileFilter, CardComponent } from "../../Components";
import { productsShopAll } from "./utils";
import { Product } from "../../types";

export default function ShopAll() {
	const { isShowFilter, setIsShowFilter } = useShowFilter();
	return (
		<section>
			<div className="w-full max-w-[76.5rem] mx-auto my-10">
				<p className="flex gap-4">
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
	return (
		<section className="flex flex-col items-center gap-12">
			<div className="grid grid-cols-2 max-w-[808px] xl:px-0 xl:w-full gap-6 w-full">
				{productsShopAll.map(({ id, image, name, description, price, colors, tag }: Product) => (
					<div>
						<CardComponent
							id={id}
							image={image}
							description={description}
							name={name}
							price={price}
							colors={colors}
							tag={tag}
						/>
					</div>
				))}
			</div>
			<button className="border border-primary text-primary h-[40px] w-[184px]">Load More</button>
		</section>
	);
};
