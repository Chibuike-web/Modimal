import { useState, ReactNode } from "react";
import { useParams } from "react-router-dom";
import { productsShopAll } from "./utils";
import { AddIcon, BusIcon, HeartIcon, MinusIcon } from "../../Icons";
import { JSX } from "react";
import { Product } from "../../types";

interface DropDownProps {
	title: string;
	subtitle: string;
	fitting?: boolean;
	productDetail?: boolean;
	content: ReactNode;
}

export default function ProductDetails(): JSX.Element {
	const { id } = useParams<{ id: string }>();
	const product = productsShopAll.find((p: Product) => p.id === id);

	if (!product) {
		return <div>Product not found.</div>;
	}

	return (
		<main className="w-full max-w-[76.5rem] mx-auto my-10">
			<div className="flex gap-4">
				<p>Collection</p>
				<span>/</span> <p>Top + Blouses</p> <span>/</span>
				<p>{product.name}</p>
			</div>

			<section className="flex gap-6 mt-12">
				<aside className="w-full max-w-[600px] flex gap-4">
					<div className="w-full max-w-[157px] h-[512px] bg-primary"></div>
					<figure className="h-[512px] w-full max-w-[427px] ">
						<img src={product.image} alt={product.name} className="w-full h-full object-cover" />
					</figure>
				</aside>
				<aside className="w-full max-w-[600px]">
					<h1 className="text-[32px] font-semibold leading-[1.4] mb-8">{product.name}</h1>
					<p className="text-[18px mb-6]">
						Versatile and universally flattering, our wrap blouse can be tied, draped, snapped and
						wrapped multiple ways.
					</p>
					<div className="flex flex-col gap-[12px] mb-6">
						<p>Colours</p>
						<div className="flex gap-[8px]">
							{product.colors?.map((color) => (
								<span
									key={color.id}
									className={`${color.className} block w-6 h-6 rounded-full`}
									title={color.label}
								/>
							))}
						</div>
					</div>
					<div>
						<div className="w-full flex flex-col items-end mt-4">
							<label htmlFor="size-select">Size Guide</label>
							<select id="size-select" className="w-full border border-[#DFDFDF] h-10 mb-4">
								<option value="">Size</option>
							</select>
						</div>
						<button type="button" className="w-full bg-primary h-10 mb-[36px] text-white">
							Add To Cart
						</button>
						<div className="flex items-center justify-between w-full">
							<div className="flex items-center gap-[4px] ">
								<BusIcon /> <p>Easy Return</p>
							</div>
							<button type="button" className="flex items-center">
								<HeartIcon /> <p>Add To Wish List</p>
							</button>
						</div>
					</div>
				</aside>
			</section>
			<section className="flex items-start gap-6 mt-8">
				<aside className="w-full max-w-[600px] bg-gray-200 border border-gray-300">
					<DropDown
						title="Fitting"
						subtitle="Fabric & Care"
						content={
							<p className="mt-6 leading-[1.8]">
								Fabric : <br />
								Tailored Stretch, <br /> Made in Italy 62% Nylon, 38% Elastane, 100% vegan materials{" "}
								<br />
								Care: Cold Machine Wash, Line dry
								<br />
								Do Not Tumble Dry or Dry Clean, Do not Use Bleach or Fabric
								<br />
								Softener
							</p>
						}
						fitting
					/>
					<DropDown
						title="Product Detail"
						subtitle="Shipping And Return"
						content={
							<p className="mt-6 leading-[1.8]">
								Shipping: <br />
								is free on US , Canada orders are $175 <br />
								Returns: <br />
								Unwashed, unworn items are eligible for returns or exchanges within 30 days of
								purchase. Final Sale items are not eligible for returns or exchange
							</p>
						}
						productDetail
					/>
				</aside>
				<aside className="w-full max-w-[600px] p-4 bg-gray-200 border border-gray-300">
					<h3>Silk</h3>
					<span className=" h-[0.5px] w-full bg-gray-300 block" />
					<p className="mt-6 text-[18px] leading-[1.8] mb-10">
						This material is our signature high-stretch fabric that drapes like silk and is soft to
						the touch. Silk is OEKO-TEX® certified and made in Italy in a mill 100% powered by
						renewable energy (solar and biomass)
					</p>
					<div className="flex gap-[12px] text-[14px]">
						<span className="bg-white h-[40px] w-full max-w-[94px] flex justify-center items-center">
							Quick Dry
						</span>
						<span className="bg-white h-[40px] w-full max-w-[189px] flex justify-center items-center">
							Chemical Free
						</span>
						<span className="bg-white h-[40px] w-full max-w-[183px] flex justify-center items-center">
							Machine Washable
						</span>
					</div>
				</aside>
			</section>
		</main>
	);
}

const DropDown = ({
	title,
	subtitle,
	content,
	productDetail,
	fitting,
}: DropDownProps): JSX.Element => {
	const [isShow, setIsShow] = useState<boolean>(true);

	return (
		<div>
			<button
				type="button"
				className={` ${productDetail ? "border-t border-b" : fitting ? "border-b" : ""}

				border-gray-300 flex w-full justify-between items-center p-6 text-[20px] font-bold`}
				onClick={() => setIsShow(true)}
			>
				{title} <AddIcon fill="black" />
			</button>

			{isShow && (
				<div className=" p-6 ">
					<button
						type="button"
						className="flex w-full justify-between items-center text-[20px] font-bold text-primary"
						onClick={() => setIsShow(false)}
					>
						{subtitle} <MinusIcon />
					</button>
					{content}
				</div>
			)}
		</div>
	);
};
