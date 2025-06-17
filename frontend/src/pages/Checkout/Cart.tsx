import { useWindowWidth } from "../../Hooks";
import { AddIcon, CancelIcon, MinusIcon } from "../../Icons";
import type { ProductInfoTypes, ProductPriceDetailsTypes, OrderSummaryProps } from "./types";
import { summaryItems } from "./utils";
import type { CartItemsTypes } from "../../sections/Navbar/types";
import { useCartItem } from "../../store/useCartItems";
import { Link } from "react-router";

export default function Cart() {
	const total = 523.8;
	const windowSize = useWindowWidth();
	return (
		<section className="mx-auto max-w-[76.5rem] mt-8 max-lg:px-6">
			<img src="/Logo.svg" alt="Brand Logo" />
			<div className="flex items-center gap-6 mt-19">
				<p>Back</p>
				<h1 className="text-[2rem] font-semibold leading-[1.4]">Your Cart</h1>
			</div>
			{windowSize < 900 ? <MobileCart total={total} /> : <DesktopCart total={total} />}
		</section>
	);
}

const DesktopCart = ({ total }: { total: number }) => {
	const { cartItems } = useCartItem();
	return (
		<div>
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
				<div className="w-full max-w-[600px] flex flex-col gap-8">
					{cartItems.map(({ id, image, name, size, color, quantity }) => (
						<ProductInfo
							key={id}
							id={id}
							image={image}
							name={name}
							size={size}
							color={color}
							quantity={quantity}
						/>
					))}
				</div>
				<div className="w-full max-w-[496px]">
					<div className="flex flex-col gap-6">
						{cartItems.map(({ id, price, quantity, size }) => (
							<ProductPriceDetails key={id} id={id} price={price} quantity={quantity} size={size} />
						))}
					</div>
					<span className="bg-gray-200 w-full h-[1px] block mt-16" />
					<OrderSummary items={summaryItems} total={total} />
					<p className="font-semibold text-[12px] mt-[8px]">
						The total amount you pay includes all applicable customs duties & taxes. We guarantee no
						additional charges on delivery
					</p>
					<Link to="/checkout/info">
						<button
							type="button"
							className="w-full max-w-[184px] h-[40px] ml-auto mt-6 bg-primary flex items-center justify-center text-white"
						>
							Next
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

const MobileCart = ({ total }: { total: number }) => {
	const { cartItems } = useCartItem();
	return (
		<div>
			<p className="mt-8 mb-4">Order Summary</p>
			<div className="flex flex-col gap-6">
				{cartItems.map(({ id, image, name, size, price, color, quantity }) => (
					<CartItem
						key={id}
						id={id}
						image={image}
						name={name}
						size={size}
						price={price}
						color={color}
						quantity={quantity}
					/>
				))}
			</div>
			<OrderSummary items={summaryItems} total={total} />
			<Link to="/checkout/info">
				<button
					type="button"
					className="w-full h-[40px] mt-6 bg-primary flex items-center justify-center text-white"
				>
					Next
				</button>
			</Link>
		</div>
	);
};

const ProductInfo = ({ id, image, name, size, color, quantity }: ProductInfoTypes) => {
	const { removeItemFromCart } = useCartItem();
	return (
		<div className="flex gap-[8px] w-full">
			<figure className="relative w-full h-full max-w-[142px] max-h-[163px]">
				<span className="bg-white absolute flex items-center justify-center w-6 h-6 left-2 top-2 text-sm">
					{quantity}
				</span>
				<img
					src={image}
					alt={`Image of a woman wearing ${name} `}
					className="w-full h-full object-cover"
				/>
			</figure>
			<div className="w-full flex flex-col justify-between">
				<div className="flex items-center justify-between w-full">
					<p className="font-bold leading-[1.4]">{name}</p>
					<button type="button" onClick={() => removeItemFromCart(id, size)}>
						<CancelIcon />
					</button>
				</div>
				<p>Size: {size}</p>
				<p>Color: {color}</p>
			</div>
		</div>
	);
};

const ProductPriceDetails = ({ id, price, quantity, size }: ProductPriceDetailsTypes) => {
	const subtotal = price * quantity;
	const { increaseItemQuantity, decreaseItemQuantity } = useCartItem();
	return (
		<div className="flex justify-between items-center">
			<p className="w-[88px]">${price}</p>
			<div className="flex items-center bg-primary-50 gap-[8px] w-[88px]">
				<button className="p-[4px]" onClick={() => increaseItemQuantity(id, size)}>
					<AddIcon fill="#404E3E" />
				</button>
				<p className="text-[#404E3E] w-[88px]">{quantity}</p>
				<button className="p-[4px]" onClick={() => decreaseItemQuantity(id, size)}>
					<MinusIcon fill="#404E3E" />
				</button>
			</div>{" "}
			<div className="font-medium w-[88px]">${subtotal}</div>
		</div>
	);
};

export const OrderSummary = ({ items, total }: OrderSummaryProps) => {
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

export const CartItem = ({ id, image, name, size, price, color, quantity }: CartItemsTypes) => {
	const { increaseItemQuantity, decreaseItemQuantity, removeItemFromCart } = useCartItem();
	return (
		<div className="flex gap-[8px] w-full">
			<figure className="relative">
				<span className="bg-white absolute flex items-center justify-center w-6 h-6 left-2 top-2 text-sm">
					{quantity}
				</span>
				<img src={image} alt={`Image of a woman wearing ${name} `} />
			</figure>
			<div className="w-full flex flex-col justify-between">
				<div className="flex items-center justify-between w-full">
					<p className="font-bold leading-[1.4]">{name}</p>
					<button type="button" onClick={() => removeItemFromCart(id, size)}>
						<CancelIcon />
					</button>
				</div>
				<p>Size: {size}</p>
				<p>Color: {color}</p>
				<div className="flex items-center justify-between w-full">
					<p className="font-semibold">${price} </p>
					<div className="flex items-center bg-primary-50 gap-[8px]">
						<button className="p-[4px]" onClick={() => increaseItemQuantity(id, size)}>
							<AddIcon fill="#404E3E" />
						</button>
						<p className="text-[#404E3E]">{quantity}</p>
						<button className="p-[4px]" onClick={() => decreaseItemQuantity(id, size)}>
							<MinusIcon fill="#404E3E" />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
