import ProductImage1 from "../../assets/BestSellers/ProductImage1.png";
import ProductImage2 from "../../assets/BestSellers/ProductImage2.png";
import ProductImage3 from "../../assets/BestSellers/ProductImage3.png";

export default function BestSellers() {
	return (
		<section className="mx-auto max-w-[76.5rem] mt-[88px]">
			<div className="mb-6 flex justify-between items-end">
				<h1 className="font-semibold text-[2rem]">Best Sellers</h1>
				<p>View All</p>
			</div>
			<div className=" flex gap-6">
				{products.map(({ id, image, name, description, price }) => (
					<CardComponent
						key={id}
						id={id}
						image={image}
						name={name}
						description={description}
						price={price}
					/>
				))}
			</div>
		</section>
	);
}

type Product = {
	id: number;
	image: string;
	name: string;
	description: string;
	price: number;
};

const products: Product[] = [
	{
		id: 1,
		image: ProductImage1,
		name: "Tailored Stretch",
		description: "Turn it Up Pants",
		price: 180,
	},
	{
		id: 2,
		image: ProductImage2,
		name: "Technical Silk",
		description: "Make A Splash",
		price: 120,
	},
	{
		id: 3,
		image: ProductImage3,
		name: "Cool Weave",
		description: "Anywhere Dress",
		price: 210,
	},
];

const CardComponent = ({ id, image, name, description, price }: Product) => {
	const firstCircle = `${id === 1 ? "bg-dark-grey" : id === 2 ? "bg-[#909225]" : "bg-[#D0A5EA]"}`;
	const secondCircle = `${id === 1 ? "bg-[#7DC3EB]" : id === 2 ? "bg-[#19418E]" : "bg-[#0C0C0C]"}`;
	const thirdCircle = `${id === 1 ? "bg-[#748C70]" : id === 2 ? "bg-[#909225]" : "bg-[#748C70]"}`;
	return (
		<article id={`card-${id}`}>
			<figure>
				<img src={image} alt="" />
			</figure>
			<div className="flex items-center justify-between">
				<div className="mt-[0.5rem] flex flex-col gap-[0.5rem]">
					<h3 className="font-bold">{name}</h3>
					<p>{description}</p>
					<div className="flex gap-[0.5rem]">
						<span className={`block w-6 h-6 rounded-full ${firstCircle}`}></span>
						<span className={`block w-6 h-6 rounded-full ${secondCircle}`}></span>
						<span className={`block w-6 h-6  rounded-full ${thirdCircle}`}></span>
					</div>
				</div>
				<p className="font-bold">${price}</p>
			</div>
		</article>
	);
};
