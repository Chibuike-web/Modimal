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
		<section className="flex justify-center items-center w-full max-lg:pl-6 max-lg:flex-col-reverse">
			<div className="flex w-full max-w-[76.5rem]">
				<aside className="w-full max-w-[704px]">
					<img src="/Logo.svg" alt="Brand Logo" />
					<div className="flex gap-2 text-sm">
						{steps.map((step, index) => (
							<span
								key={step.path}
								className={clsx(
									"text-sm",
									pathname === step.path ? "text-gray-900 font-semibold" : "text-primary"
								)}
							>
								{step.label}
								{index < steps.length - 1 && <span className="text-gray-400">/</span>}
							</span>
						))}
					</div>
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
		<div className="flex flex-col w-full max-w-[628px] gap-6 h-screen right-0 top-0 bg-[#F0F2EF] px-6">
			<h3 className="text-[20px] font-bold leading-[1.4] text-center mt-8">Your Cart</h3>
			<div className="flex flex-col gap-8 w-full max-w-[496px] ">
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
		</div>
	);
};
