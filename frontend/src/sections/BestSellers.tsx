import { allProducts } from "../utils";
import { CardComponent } from "../components/Card";

export default function BestSellers() {
	return (
		<section className="mx-auto max-w-[76.5rem] mt-[5.5rem] max-xl:px-6">
			<div className="mb-6 flex justify-between items-end">
				<h1 className="font-semibold text-[2rem] max-md:text-[20px]">Best Sellers</h1>
				<p>View All</p>
			</div>
			<div className=" flex gap-6 overflow-x-auto">
				{allProducts
					.filter((item) => item.categories?.includes("Best Seller"))
					.map((item) => (
						<div>
							<CardComponent item={item} className="min-w-[168px]" />
						</div>
					))}
			</div>
		</section>
	);
}
