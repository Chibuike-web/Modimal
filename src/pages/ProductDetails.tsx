import { useParams } from "react-router-dom";
import { productsShopAll } from "../utils";
export default function ProductDetails() {
	const { id } = useParams();
	const product = productsShopAll.find((p) => p.id === Number(id));
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

			<section className="flex">
				<aside>
					<img src={product.image} alt="" />
				</aside>
				<aside>
					<h1>{product.name}</h1>
					<p>
						Versatile and universally flattering, our wrap blouse can be tied, draped, snapped and
						wrapped multiple ways.
					</p>
					<div>
						<p>Colours</p>
						{product.colors?.map((color) => (
							<span className={`${color} block w-6 h-6 rounded-full`} />
						))}
					</div>
					<div>
						<div className="w-full">
							<label>Size Guide</label>
							<select className="w-full">
								<option value="">Size</option>
							</select>
						</div>
						<button type="button">Add To Cart</button>
					</div>
				</aside>
			</section>
		</main>
	);
}
