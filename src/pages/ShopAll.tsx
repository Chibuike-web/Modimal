import ShopAllImage from "../assets/ShopAll/ShopAll.png";
import { useShowFilter } from "../Hooks";
import { AnimatePresence, motion } from "motion/react";
import { FilterIcon } from "../Icons";
import { DesktopFilter, MobileFilter, CardComponent } from "../Components";
import { productsShopAll, Product } from "../utils";

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
			<AnimatePresence>
				{isShowFilter && (
					<MobileFilter isShowFilter={isShowFilter} setIsShowFilter={setIsShowFilter} />
				)}
			</AnimatePresence>
		</section>
	);
}

const fadeUp = {
	initial: { opacity: 0, y: 100 },
	animate: (i: number) => ({
		opacity: 1,
		y: 0,
		transition: {
			delay: i * 0.4,
			duration: 0.8,
			ease: "easeOut",
		},
	}),
};

const CardContainer = () => {
	return (
		<div className="grid grid-cols-2 max-w-[808px] xl:px-0 xl:w-full gap-6 w-full">
			{productsShopAll.map(
				({ id, image, name, description, price, colors, tag }: Product, index) => (
					<motion.div
						key={id}
						variants={fadeUp}
						custom={index}
						initial="initial"
						whileInView="animate"
						viewport={{ once: true, amount: 0.3 }}
					>
						<CardComponent
							id={id}
							image={image}
							description={description}
							name={name}
							price={price}
							colors={colors}
							tag={tag}
						/>
					</motion.div>
				)
			)}
		</div>
	);
};
