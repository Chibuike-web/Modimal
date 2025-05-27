import { Outlet } from "react-router";
import { useLocation } from "react-router";
import clsx from "clsx";
import { useCartItem } from "../../store/useCartItems";
import { CartItemsTypes } from "../../sections/Navbar/types";
import { CartItem, OrderSummary } from "./Cart";
import { summaryItems } from "./utils";

export default function Container() {
	const location = useLocation();
	const pathname = location.pathname;

	const steps = [
		{ label: "Cart", path: "/checkout/cart" },
		{ label: "Info", path: "/checkout/info" },
		{ label: "Shipping", path: "/checkout/shipping" },
		{ label: "Payment", path: "/checkout/payment" },
	];
	return (
		<section className="mx-auto max-w-[1224px] w-full max-xl:px-6">
			<img src="/Logo.svg" alt="Brand Logo" className="mt-8" />
			<div className="flex gap-2 text-sm">
				{steps.map((step, index) => (
					<div className="flex items-center mt-6">
						<span
							key={step.path}
							className={clsx(
								"text-sm px-4 py-[4px] ",
								pathname === step.path ? "text-gray-900 font-semibold" : "text-primary"
							)}
						>
							{step.label}
						</span>
						{index < steps.length - 1 && <span className="text-gray-400">/</span>}
					</div>
				))}
			</div>
			<div className="flex gap-16 max-lg:flex-col-reverse max-lg:items-center">
				<aside className="w-full flex max-xl:justify-center">
					<Outlet />
				</aside>
				{pathname !== "/checkout/payment" && <CartItems />}
			</div>
		</section>
	);
}

const CartItems = () => {
	const { cartItems } = useCartItem();
	const total = 523.8;
	return (
		<aside className=" max-w-[628px] fixed top-0 right-0 w-full gap-6 h-screen bg-[#F0F2EF] flex flex-col px-6 pt-8 max-xl:static max-lg:h-auto max-xl:bg-transparent max-lg:items-center max-xl:max-w-[800px] max-xl:px-0">
			<h3 className="text-[20px] font-bold leading-[1.4] text-center mb-10">Your Cart</h3>
			<div className="flex flex-col gap-8 w-full max-w-[496px] max-xl:max-w-full">
				{cartItems.map(({ id, image, name, size, price, color, quantity }: CartItemsTypes) => (
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

				<OrderSummary items={summaryItems} total={total} />
			</div>
			<p className="text-[12px] font-semibold w-full max-w-[496px] mt-[10px] leading-[15px] flex self-start">
				The total amount you pay includes all applicable customs duties & taxes. We guarantee no
				additional charges on delivery
			</p>
		</aside>
	);
};
