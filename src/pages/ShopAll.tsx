import ShopAllImage from "../assets/ShopAll/ShopAll.png";

export default function ShopAll() {
	return (
		<section>
			<div className="w-full max-w-[76.5rem] mx-auto my-10">
				<p className="flex gap-4">
					<span>Home</span> / <span>Shop All</span>
				</p>
			</div>
			<img src={ShopAllImage} alt="" className="w-full" />
		</section>
	);
}
