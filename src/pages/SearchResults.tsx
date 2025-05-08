import { useSearchParams } from "react-router-dom";
import ProductImage1 from "../assets/Search/ProductImage1.png";
import ProductImage2 from "../assets/Search/ProductImage2.png";
import ProductImage3 from "../assets/Search/ProductImage3.png";
import ProductImage4 from "../assets/Search/ProductImage4.png";
import ProductImage5 from "../assets/Search/ProductImage5.png";
import ProductImage6 from "../assets/Search/ProductImage6.png";
import { CardComponent } from "../Components";
import { AnimatePresence, motion } from "motion/react";
import { FilterIcon } from "../Icons";
import { DesktopFilter, MobileFilter } from "../Components";
import { Product } from "../utils";
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
			{products.map(({ id, image, name, description, price, colors }: Product, index) => (
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
			))}
		</div>
	);
};

const products: Product[] = [
	{
		id: 1,
		image: ProductImage1,
		name: "Elastic Waist",
		description: "Turn it Up Pants",
		price: 110,
		colors: ["bg-[#7DC3EB]", "bg-[#748C70]"],
	},
	{
		id: 2,
		image: ProductImage2,
		name: "Tailored Stretch",
		description: "Make A Splash",
		price: 150,
		colors: ["bg-black"],
	},
	{
		id: 3,
		image: ProductImage3,
		name: "Tailored Stretch",
		description: "Turn It Up Pants",
		price: 140,
		colors: ["bg-[#0C0C0C]", "bg-[#CA2929]", "bg-[#748C70]"],
	},
	{
		id: 4,
		image: ProductImage4,
		name: "High Tillie",
		description: "Turn It Up Pants",
		price: 110,
		colors: ["bg-[#0C0C0C]", "bg-[#909225]", "bg-[#748C70]"],
	},
	{
		id: 5,
		image: ProductImage5,
		name: "Casual wild leg",
		description: "Turn It Up Pants",
		price: 130,
		colors: ["bg-[#0C0C0C]", "bg-[#748C70]"],
	},
	{
		id: 6,
		image: ProductImage6,
		name: "Linen Wide Leg",
		description: "Turn It Up Pants",
		price: 180,
		colors: ["bg-[#0C0C0C]", "bg-[#D0A5EA]"],
	},
];
