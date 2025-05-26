import { LeftArrowIcon } from "../../Icons";
import { Link } from "react-router";
import { CartItem, OrderSummary } from "./Cart";
import { useCartItem } from "../../store/useCartItems";
import { summaryItems } from "./utils";

export default function Info() {
	return (
		<div className="w-full max-w-[600px] flex flex-col max-xl:max-w-[800px] max-xl:items-center">
			<MobileCart />
			<ContactForm />
			<div className="flex items-center w-full justify-between mt-24 gap-4 max-md:flex-col-reverse">
				<Link to="/checkout/cart" className="flex">
					<LeftArrowIcon />
					<span>Return To Cart</span>
				</Link>

				<Link to="/checkout/shipping" className="w-full max-w-[184px] max-md:max-w-full">
					<button
						type="button"
						className="w-full text-[14px] h-[40px] bg-primary flex items-center justify-center text-white"
					>
						Continue To Shipping
					</button>
				</Link>
			</div>
		</div>
	);
}

function ContactForm() {
	return (
		<div className="w-full mx-auto space-y-4 text-sm">
			{/* Email Input */}
			<div>
				<div className="flex justify-between items-center mt-6">
					<h2 className="text-lg leading-[1.8]">Contact</h2>
					<p className="">
						Have An Account?{" "}
						<span className="text-sm text-primary cursor-pointer hover:underline">Log In</span>
					</p>
				</div>
				<div className="space-y-2">
					<label className="block">
						<input
							type="email"
							placeholder="Email"
							className="mt-2 block w-full border border-gray-600 px-3 py-2 focus:outline-none focus:border-blue-500"
						/>
					</label>
					<label className="flex items-center gap-2">
						<input type="checkbox" className="h-4 w-4" />
						<span>Email Me With News And Offers</span>
					</label>
				</div>
			</div>

			{/* Shipping Address */}
			<div className="space-y-4">
				<h3 className="text-lg">Shipping Address</h3>

				{/* Country/Region */}
				<select className="w-full border border-gray-600 px-3 py-2 focus:outline-none">
					<option>Country/Region</option>
				</select>

				{/* Name fields */}
				<div className="flex gap-6">
					<input
						type="text"
						placeholder="First Name"
						className="w-full border border-gray-600 px-3 py-2"
					/>
					<input
						type="text"
						placeholder="Last Name"
						className="w-full border border-gray-600 px-3 py-2"
					/>
				</div>

				{/* Company (optional) */}
				<input
					type="text"
					placeholder="Company (Optional)"
					className="w-full border border-gray-600 px-3 py-2"
				/>

				{/* Address */}
				<input
					type="text"
					placeholder="Address"
					className="w-full border border-gray-600 px-3 py-2"
				/>

				{/* Apartment/Suite (optional) */}
				<input
					type="text"
					placeholder="Apartment, Suite, Etc. (Optional)"
					className="w-full border border-gray-600 px-3 py-2"
				/>

				{/* Postal Code + City */}
				<div className="flex gap-6">
					<input
						type="text"
						placeholder="Postal Code"
						className="w-full border border-gray-600 px-3 py-2"
					/>
					<input
						type="text"
						placeholder="City"
						className="w-full border border-gray-600 px-3 py-2"
					/>
				</div>

				{/* Phone */}
				<input type="tel" placeholder="Phone" className="w-full border border-gray-600 px-3 py-2" />

				{/* Save Info */}
				<label className="flex items-center space-x-2">
					<input type="checkbox" className="h-4 w-4" />
					<span>Save This Information For Next Time</span>
				</label>
			</div>
		</div>
	);
}

const MobileCart = () => {
	const { cartItems } = useCartItem();
	const total = 523.8;
	return (
		<div className="hidden max-xl:block w-full">
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
			<p className="text-[12px] font-semibold w-full max-w-[496px] my-8 leading-[15px]">
				The total amount you pay includes all applicable customs duties & taxes. We guarantee no
				additional charges on delivery
			</p>
		</div>
	);
};
