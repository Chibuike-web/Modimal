import { useState, ReactNode } from "react";
import { useParams } from "react-router-dom";
import { AddIcon, BusIcon, LikeIcon, MinusIcon } from "../Icons";
import { JSX } from "react";
import { Product } from "../types";
import { allProducts } from "../utils";
import { useWindowWidth } from "../Hooks";
import { LikeButton } from "../components/LikeButton";
import { useFavourites } from "../store/useFavourites";
import clsx from "clsx";
import { useCartItem } from "../store/useCartItems";

interface DropDownProps {
	title: string;
	subtitle: string;
	productDetail?: boolean;
	content: ReactNode;
}

export default function ProductDetails() {
	const { id } = useParams<{ id: string }>();
	const windowSize = useWindowWidth();
	const product = allProducts.find((p: Product) => p.id === id);
	const { isClicked } = useFavourites();
	const { updateCartItems } = useCartItem();
	const [selectedSize, setSelectedSize] = useState<string>("");
	const [added, setAdded] = useState(false);

	if (!product) {
		return <div>Product not found.</div>;
	}

	const handleAddToCart = () => {
		if (!selectedSize) return;

		updateCartItems({
			id: product.id,
			image: product.image,
			name: product.name,
			size: selectedSize,
			price: product.price,
			color: product.colors[0].label,
			quantity: 1,
		});
		setAdded(true);
		setTimeout(() => setAdded(false), 2000);
	};

	return (
		<main className="w-full max-w-[76.5rem] mx-auto my-10">
			<div className="flex gap-4 px-6 xl:px-0 ">
				<p>Collection</p>
				<span>/</span> <p>Top + Blouses</p> <span>/</span>
				<p>{product.name}</p>
			</div>

			<section className="flex flex-col px-6 gap-6 mt-12 md:flex-row xl:px-0">
				<aside className="w-full md:max-w-[600px] md:flex gap-4">
					{windowSize > 768 ? (
						<DesktopProductImages image={product.image} name={product.name} />
					) : (
						<MobileProductImages image={product.image} name={product.name} />
					)}
				</aside>
				<aside className="w-full md:max-w-[600px]">
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

					<div className="mt-6">
						<div className="w-full flex flex-col gap-2 mb-4">
							<label htmlFor="size-select" className="text-sm text-gray-700 font-medium">
								Select Size <span className="text-red-500">*</span>
							</label>
							<select
								id="size-select"
								value={selectedSize}
								onChange={(e) => setSelectedSize(e.target.value)}
								className="w-full border border-[#DFDFDF] h-10 px-4 text-sm rounded focus:outline-none focus:ring-1 focus:ring-primary"
							>
								<option value="">-- Choose a size --</option>
								{product.sizes.map((size) => (
									<option key={size.value} value={`${size.value}`}>
										{size.label}
									</option>
								))}
							</select>
						</div>

						<button
							type="button"
							disabled={!selectedSize || added}
							onClick={handleAddToCart}
							className={`w-full h-10 text-white font-medium rounded ${
								added
									? "bg-gray-500 cursor-default"
									: selectedSize
									? "bg-primary hover:opacity-90"
									: "bg-gray-300 cursor-not-allowed"
							}`}
						>
							{added ? "Added" : "Add to Cart"}
						</button>

						<div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-200">
							<div className="flex items-center gap-[6px] text-sm text-gray-700">
								<BusIcon /> <span>Easy Returns</span>
							</div>
							<LikeButton
								product={product}
								className="flex items-center gap-2 text-sm font-medium text-gray-800"
							>
								<LikeIcon
									className="cursor-pointer"
									fill={isClicked(product.id) ? "red" : "white"}
									stroke={isClicked(product.id) ? "" : "#0C0C0C"}
								/>
								<span>Add to Wishlist</span>
							</LikeButton>
						</div>
					</div>
				</aside>
			</section>
			<section className="flex flex-col px-6 items-start gap-6 mt-8 md:flex-row xl:px-0">
				<aside className="w-full md:max-w-[600px] bg-gray-200 border border-gray-300">
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
				<aside className="w-full md:max-w-[600px] p-4 bg-gray-200 border border-gray-300">
					<h3 className="border-b border-gray-300 py-4">Silk</h3>

					<p className="mt-6 text-[18px] leading-[1.8] mb-10">
						This material is our signature high-stretch fabric that drapes like silk and is soft to
						the touch. Silk is OEKO-TEX® certified and made in Italy in a mill 100% powered by
						renewable energy (solar and biomass)
					</p>
					<div className="flex flex-col sm:flex-row gap-[12px] text-[14px]">
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

const DropDown = ({ title, subtitle, content, productDetail }: DropDownProps): JSX.Element => {
	const [isShow, setIsShow] = useState<boolean>(true);

	return (
		<div>
			<button
				type="button"
				className={clsx(
					productDetail && "border-t border-gray-300",
					"shadow-[0px_1px_0px_rgba(0,0,0,0.1)] flex w-full justify-between items-center p-6 text-[20px] font-bold"
				)}
				onClick={() => setIsShow((prev) => !prev)}
			>
				{title} <AddIcon fill="black" />
			</button>

			{isShow && (
				<div className=" p-6 ">
					<button
						type="button"
						className="flex w-full justify-between text-left items-center text-[20px] font-bold text-primary"
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

const DesktopProductImages = ({ image, name }: { image: string; name: string }) => {
	return (
		<>
			<div className="w-full max-w-[157px] h-[512px] bg-primary"></div>
			<figure className="h-[512px] w-full max-w-[427px] ">
				<img src={image} alt={name} className="w-full h-full object-cover" />
			</figure>
		</>
	);
};

const MobileProductImages = ({ image, name }: { image: string; name: string }) => {
	return (
		<div className="flex flex-col">
			<figure className="w-full">
				<img src={image} alt={name} className="w-full h-full object-cover" />
			</figure>
			<div>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
			</div>
		</div>
	);
};
