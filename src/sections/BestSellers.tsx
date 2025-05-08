import ProductImage1 from "../assets/BestSellers/ProductImage1.png";
import ProductImage2 from "../assets/BestSellers/ProductImage2.png";
import ProductImage3 from "../assets/BestSellers/ProductImage3.png";
import { CardComponent } from "../Components";
import { Product } from "../utils";
import { motion } from "motion/react";

const fadeUp = {
	initial: { opacity: 0, y: 100 },
	animate: (i: number) => ({
		opacity: 1,
		y: 0,
		transition: {
			delay: i * 0.5,
			duration: 1,
			ease: "easeOut",
		},
	}),
};

export default function BestSellers() {
	return (
		<section className="mx-auto max-w-[76.5rem] mt-[5.5rem] max-xl:px-6">
			<div className="mb-6 flex justify-between items-end">
				<h1 className="font-semibold text-[2rem] max-md:text-[20px]">Best Sellers</h1>
				<p>View All</p>
			</div>
			<div className=" flex gap-6">
				{products.map(({ id, image, name, description, price, colors }, index) => (
					<motion.div
						key={id}
						variants={fadeUp}
						custom={index}
						initial="initial"
						whileInView="animate"
						viewport={{ once: true, amount: 0.3 }}
					>
						<CardComponent
							key={id}
							id={id}
							image={image}
							name={name}
							description={description}
							price={price}
							colors={colors}
						/>
					</motion.div>
				))}
			</div>
		</section>
	);
}

const products: Product[] = [
	{
		id: 1,
		image: ProductImage1,
		name: "Tailored Stretch",
		description: "Turn it Up Pants",
		price: 180,
		colors: ["bg-dark-grey", "bg-[#7DC3EB]", "bg-[#748C70]"],
	},
	{
		id: 2,
		image: ProductImage2,
		name: "Technical Silk",
		description: "Make A Splash",
		price: 120,
		colors: ["bg-[#909225]", "bg-[#19418E]", "bg-[#909225]"],
	},
	{
		id: 3,
		image: ProductImage3,
		name: "Cool Weave",
		description: "Anywhere Dress",
		price: 210,
		colors: ["bg-[#D0A5EA]", "bg-[#0C0C0C]", "bg-[#748C70]"],
	},
];
