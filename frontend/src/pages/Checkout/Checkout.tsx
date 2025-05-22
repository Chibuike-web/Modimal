import { AddIcon, CancelIcon, MinusIcon } from "../../Icons";
import { cartItems } from "../../sections/Navbar/utils";

type ProductInfoTypes = {
	id: string;
	image: string;
	name: string;
	size: string;
	color: string;
};

type ProductPriceDetailsTypes = {
	id: string;
	price: number;
	quantity: number;
};

type SummaryItem = {
	label: string;
	value: number | string;
};

type OrderSummaryProps = {
	items: SummaryItem[];
	total: number;
};

const summaryItems: SummaryItem[] = [
	{ label: "Subtotal", value: 485 },
	{ label: "Tax", value: 38.8 },
	{ label: "Shipping", value: "Free" },
];

export default function Checkout() {
	const total = 523.8;
	return (
		<section className="mx-auto max-w-[76.5rem] mt-8 max-lg:px-6">
			<img src="/Logo.svg" alt="Brand Logo" />
			<div className="flex w-full justify-between items-center mt-19">
				<div className="flex items-center gap-6">
					<p>Back</p>
					<h1 className="text-[2rem] font-semibold leading-[1.4]">Your Cart</h1>
				</div>
				<p>Continue Shopping</p>
			</div>
			<div className="flex items-center text-[18px] gap-[128px] mt-10">
				<p className="w-full max-w-[600px]">Order Summary</p>
				<div className="flex items-center w-full max-w-[496px] justify-between">
					<p className="w-[88px]">Price</p>
					<p className="w-[88px]">Quantity</p>
					<p className="w-[88px]">Total</p>
				</div>
			</div>
			<span className="w-full h-[1px] block bg-gray-300 mt-6 mb-8" />
			<div className="flex w-full gap-[128px]">
				<div className="w-full max-w-[600px]">
					{cartItems.map(({ id, image, name, size, color }) => (
						<ProductInfo key={id} id={id} image={image} name={name} size={size} color={color} />
					))}
				</div>
				<div className="w-full max-w-[496px]">
					<div className="flex flex-col gap-6">
						{cartItems.map(({ id, price, quantity }) => (
							<ProductPriceDetails key={id} id={id} price={price} quantity={quantity} />
						))}
					</div>
					<span className="bg-gray-200 w-full h-[1px] block mt-16" />
					<OrderSummary items={summaryItems} total={total} />
					<p className="font-semibold text-[12px] mt-[8px]">
						The total amount you pay includes all applicable customs duties & taxes. We guarantee no
						additional charges on delivery
					</p>
					<button
						type="button"
						className="w-full max-w-[184px] h-[40px] ml-auto mt-6 bg-primary flex items-center justify-center text-white"
					>
						Next
					</button>
				</div>
			</div>
		</section>
	);
}

const ProductInfo = ({ id, image, name, size, color }: ProductInfoTypes) => {
	return (
		<div className="flex gap-[8px] w-full">
			<figure>
				<img src={image} alt={`Image of a woman wearing ${name} `} />
			</figure>
			<div className="w-full flex flex-col justify-between">
				<div className="flex items-center justify-between w-full">
					<p className="font-bold leading-[1.4]">{name}</p>
					<button type="button">
						<CancelIcon />
					</button>
				</div>
				<p>Size: {size}</p>
				<p>Color: {color}</p>
			</div>
		</div>
	);
};

const ProductPriceDetails = ({ price, quantity }: ProductPriceDetailsTypes) => {
	const subtotal = price * quantity;
	return (
		<div className="flex justify-between items-center">
			<p className="w-[88px]">${price}</p>
			<div className="flex items-center bg-primary-50 gap-[8px] w-[88px]">
				<button className="p-[4px]">
					<AddIcon fill="#404E3E" />
				</button>
				<p className="text-[#404E3E] w-[88px]">{quantity}</p>
				<button className="p-[4px]">
					<MinusIcon fill="#404E3E" />
				</button>
			</div>{" "}
			<div className="font-medium w-[88px]">${subtotal}</div>
		</div>
	);
};

const OrderSummary = ({ items, total }: OrderSummaryProps) => {
	return (
		<div className="text-sm mt-6 text-[18px] flex flex-col gap-[8px]">
			{items.map(({ label, value }) => (
				<div key={label} className="flex justify-between">
					<span>{label}</span>
					<span>{typeof value === "number" ? `$${Math.round(value)}` : value}</span>
				</div>
			))}

			<div className="flex justify-between font-medium mt-2">
				<span>Total Orders:</span>
				<span>${Math.round(total)}</span>
			</div>
		</div>
	);
};
