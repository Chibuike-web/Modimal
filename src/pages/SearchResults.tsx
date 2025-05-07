import { useSearchParams } from "react-router-dom";
import ProductImage1 from "../assets/Search/ProductImage1.png";
import ProductImage2 from "../assets/Search/ProductImage2.png";
import ProductImage3 from "../assets/Search/ProductImage3.png";
import ProductImage4 from "../assets/Search/ProductImage4.png";
import ProductImage5 from "../assets/Search/ProductImage5.png";
import ProductImage6 from "../assets/Search/ProductImage6.png";
import { CardComponent, Product } from "../Components";
import { AnimatePresence, motion } from "motion/react";
import { FilterButton } from "../Components";
import { CancelIcon, FilterIcon } from "../Icons";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function SearchResults() {
	const [searchParams] = useSearchParams();
	const query = searchParams.get("query");
	const [isShowFilter, setIsShowFilter] = useState(false);

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

const filterList = [
	{
		id: uuidv4(),
		title: "Sort By",
		list: [
			{ id: uuidv4(), label: "Featured" },
			{ id: uuidv4(), label: "Best Seller" },
			{ id: uuidv4(), label: "Price: Low To High" },
			{ id: uuidv4(), label: "Price: High To Low" },
		],
	},
	{
		id: uuidv4(),
		title: "Size",
		list: [
			{ id: uuidv4(), label: "XS / US (0-4)" },
			{ id: uuidv4(), label: "S / US (4-6)" },
			{ id: uuidv4(), label: "M / US (6-10)" },
			{ id: uuidv4(), label: "L / US (10-14)" },
			{ id: uuidv4(), label: "XL / US (12-16)" },
		],
	},
	{
		id: uuidv4(),
		title: "Color",
		list: [
			{ id: uuidv4(), label: "Black", colorCode: "#000000" },
			{ id: uuidv4(), label: "Red", colorCode: "#FF0000" },
			{ id: uuidv4(), label: "Green", colorCode: "#00FF00" },
			{ id: uuidv4(), label: "Yellow", colorCode: "#FFFF00" },
			{ id: uuidv4(), label: "Dark Blue", colorCode: "#00008B" },
			{ id: uuidv4(), label: "Purple", colorCode: "#800080" },
			{ id: uuidv4(), label: "Pink", colorCode: "#FFC0CB" },
			{ id: uuidv4(), label: "Light Blue", colorCode: "#ADD8E6" },
			{ id: uuidv4(), label: "Orange", colorCode: "#FFA500" },
			{ id: uuidv4(), label: "White", colorCode: "#FFFFFF" },
		],
	},
	{
		id: uuidv4(),
		title: "Collection",
		list: [
			{ id: uuidv4(), label: "In Stock" },
			{ id: uuidv4(), label: "Out Of Stock" },
		],
	},
	{
		id: uuidv4(),
		title: "Fabric",
		list: [
			{ id: uuidv4(), label: "Cotton" },
			{ id: uuidv4(), label: "Linen" },
			{ id: uuidv4(), label: "Wool" },
			{ id: uuidv4(), label: "Silk" },
			{ id: uuidv4(), label: "Cashmere" },
		],
	},
];

const DesktopFilter = () => {
	return (
		<div className="w-full max-w-[392px] hidden xl:block sticky max-h-[1411px] overflow-y-auto top-[8rem]">
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

const MobileFilter = ({
	isShowFilter,
	setIsShowFilter,
}: {
	isShowFilter: boolean;
	setIsShowFilter: (value: boolean) => void;
}) => {
	return (
		<motion.div
			initial={{ opacity: 0, x: 100 }}
			animate={{ opacity: 1, x: 0 }}
			exit={{ opacity: 0, x: 100 }}
			transition={{ duration: 0.3 }}
			className=" bg-white fixed top-0 z-100 flex flex-col w-full h-screen px-6 py-12 overflow-y-auto"
		>
			<div className="flex justify-between items-center mb-6">
				<h2 className="font-semibold text-gray-950 text-[2rem]">Filters</h2>
				<button type="button" onClick={() => setIsShowFilter(!isShowFilter)}>
					<CancelIcon />
				</button>
			</div>
			<div className="grid grid-cols-1 gap-4 mb-8">
				{filterList.map(({ id, title, list }) => (
					<FilterButton key={id} id={id} title={title} list={list} />
				))}
			</div>
			<div className="flex items-center w-full gap-6 mt-auto">
				<button type="button" className="w-full h-10">
					Clear All Filters
				</button>
				<button type="button" className="bg-primary w-full h-10 text-white">
					Apply Filters
				</button>
			</div>
		</motion.div>
	);
};

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
