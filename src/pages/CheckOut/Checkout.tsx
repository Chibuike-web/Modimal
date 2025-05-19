import { CancelIcon } from "../../Icons";
import type { CartItemsTypes } from "../../sections/Navbar/types";
import { cartItems } from "../../sections/Navbar/utils";

export default function Checkout() {
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
			<div className="flex gap-[581px] items-center text-[18px] mt-10">
				<p>Order Summary</p>
				<div className="flex items-center gap-[129px]">
					<p className="w-[80px] flex">Price</p>
					<p>Quantity</p>
					<p className="w-[80px] flex">Total</p>
				</div>
			</div>
			<span className="w-full h-[1px] block bg-gray-300 mt-6 mb-8" />
			<div>
				{cartItems.map(({ id, image, name, size, color }) => (
					<CheckoutCartItem key={id} id={id} image={image} name={name} size={size} color={color} />
				))}
			</div>
		</section>
	);
}

const CheckoutCartItem = ({ image, name, size, color }: CartItemsTypes) => {
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
