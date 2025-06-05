import { twMerge } from "tailwind-merge";
import { LayoutItems } from "./utils";

export default function SustainabilityMaterials() {
	return (
		<main>
			<section className="mx-auto max-w-[76.5rem] my-8 xl:px-0 flex gap-2 px-6 text-sm">
				<span className="text-primary">Home</span>
				<span>/</span>
				<span className="text-gray-900">Sustainability</span>
				<span>/</span>
				<span className="text-gray-900">Materials</span>
			</section>

			<section className="mx-auto max-w-[76.5rem] xl:px-0 py-1 px-6 text-sm">
				<h1 className="mb-8 text-[2rem] font-semibold w-full">Sustainably sourced materials</h1>
				<p className="text-[20px] leading-[1.8]">
					At Modimal, we believe in investing in the now to design for the future. That’s why we are
					committed to sourcing quality materials that will have less impact on the environment.{" "}
					<br />
					So far in 2022, 92% of the base fabrics in our collection are more sustainably sourced.
					Our goal is To use only 100% sustainably sourced materials by 2025. <br />
					There are five kinds of fabrics in our collections that are Organic and responsible
					sourced, and we highlight these so you can make considered choices when you shop.
				</p>
			</section>
			<section className="mx-auto max-w-[76.5rem] mt-12 xl:px-0 py-1 px-6 text-sm flex flex-col gap-6">
				{LayoutItems.map((item) => (
					<Layout key={item.id} {...item} />
				))}
			</section>
		</main>
	);
}

const Layout = ({
	id,
	image,
	heading,
	description,
	points,
}: {
	id: string;
	image: string;
	heading: string;
	description: string;
	points?: string[];
}) => {
	let layoutStyle;

	if (id === "Wool" || id === "Silk") {
		layoutStyle = "flex-col lg:flex-row-reverse";
	}
	return (
		<div className={twMerge("flex flex-col items-center gap-6 lg:flex-row", layoutStyle)}>
			<img src={image} className="w-full lg:max-w-max" alt="" />
			<div>
				<h2 className="font-bold text-xl md:text-[1.5rem]">{heading}</h2>
				<p className=" text-sm leading-[1.6] md:text-lg">{description}</p>

				{points && (
					<ol className="list-decimal list-inside space-y-1 text-sm leading-[1.6] md:text-lg">
						{points.map((point, index) => (
							<li key={index}>{point}</li>
						))}
					</ol>
				)}
			</div>
		</div>
	);
};
