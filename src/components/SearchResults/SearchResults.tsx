import { useSearchParams } from "react-router-dom";
import ProductImage1 from "../../assets/Search/ProductImage1.png";
import ProductImage2 from "../../assets/Search/ProductImage2.png";
import ProductImage3 from "../../assets/Search/ProductImage3.png";
import ProductImage4 from "../../assets/Search/ProductImage4.png";
import ProductImage5 from "../../assets/Search/ProductImage5.png";
import ProductImage6 from "../../assets/Search/ProductImage6.png";
import { CardComponent, Product } from "../UiElements";
import { motion } from "motion/react";
import { FilterButton } from "../UiElements";

export default function SearchResults() {
	const [searchParams] = useSearchParams();
	const query = searchParams.get("query");

	return (
		<div>
			<h1 className="text-center">Search Results</h1>
			<p className="text-center mb-8">
				Showing results for: <strong>{query}</strong>
			</p>

			<section className=" mx-auto max-w-[76.5rem] ">
				<div className="flex flex-col md:flex-row gap-6 w-full px-6 md:px-0">
					<Filter />
					<CardContainer />
				</div>
			</section>
		</div>
	);
}

const filterList = [
	{
		id: 1,
		title: "Sort By",
	},
	{
		id: 2,
		title: "Size",
		list: ["XS / US (0-4)", "S / US (4-6)", "M / US (6-10)", "L / US (10-14)", "XL / US (12-16)"],
	},

	{
		id: 3,
		title: "Color",
	},
	{
		id: 4,
		title: "Collection",
		list: ["In Stock", "Out Of Stock"],
	},
	{
		id: 5,
		title: "Fabric",
		list: ["Cotton", "Linen", "Wool", "Silk", "Cashmere"],
	},
];

const Filter = () => {
	return (
		<div className="w-full max-w-[392px]">
			<h2 className="font-semibold text-gray-950 text-[2rem] mb-4">Filters</h2>
			<div className="grid grid-cols-1 gap-4">
				{filterList.map(({ id, title, list }) => (
					<FilterButton key={id} id={id} title={title} list={list} />
				))}
			</div>
		</div>
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
		<div className="grid grid-cols-2 gap-6 w-full">
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
