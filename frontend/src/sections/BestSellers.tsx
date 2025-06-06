import { CardComponent } from "../Components";
import { motion } from "motion/react";
import { allProducts } from "../utils";
import { Product } from "../types";

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
			<div className=" flex gap-6 overflow-x-auto">
				{allProducts
					.filter((item: Product) => item.categories?.includes("bestSellers"))
					.map(({ id, image, name, description, price, colors }: Product, index: number) => (
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
