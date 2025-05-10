import { useSearchParams } from "react-router-dom";
import { CardComponent } from "../Components";
import { AnimatePresence, motion } from "motion/react";
import { FilterIcon } from "../Icons";
import { DesktopFilter, MobileFilter } from "../Components";
import { Product, productsSearchResult } from "../utils";
import { useShowFilter } from "../Hooks";

export default function SearchResults() {
	const [searchParams] = useSearchParams();
	const query = searchParams.get("query");
	const { isShowFilter, setIsShowFilter } = useShowFilter();

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
			<AnimatePresence>
				{isShowFilter && (
					<MobileFilter isShowFilter={isShowFilter} setIsShowFilter={setIsShowFilter} />
				)}
			</AnimatePresence>
		</div>
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
			{productsSearchResult.map(
				({ id, image, name, description, price, colors }: Product, index) => (
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
							search
						/>
					</motion.div>
				)
			)}
		</div>
	);
};
