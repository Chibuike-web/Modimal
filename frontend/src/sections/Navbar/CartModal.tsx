import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import { useWindowWidth } from "../../Hooks";
import { useCart } from "../../store/useCart";
import { AddIcon, CancelIcon, MinusIcon } from "../../Icons";
import type { CartItemsTypes } from "./types";
import { useCartItem } from "../../store/useCartItems";
import { Link } from "react-router";

export const CartModal = () => {
	const windowSize = useWindowWidth();
	const { cartItems } = useCartItem();
	const { setShowCart } = useCart();
	const isMobile = windowSize < 1100;
	const hasItems = cartItems.length > 0;
	const styles = twMerge(
		"absolute bg-white flex flex-col items-center py-8 px-6 overflow-y-auto",
		isMobile
			? "w-full h-screen"
			: hasItems
			? "right-0 w-[628px] h-[914px]"
			: "right-0 w-[392px] h-[660px]"
	);
	return (
		<div
			className="fixed top-[7.6rem] max-lg:top-0 justify-items-center bg-black/40 inset-0 backdrop-blur-[0.5rem] w-full"
			onClick={setShowCart}
		>
			<div className="relative max-w-[76.5rem] w-full" onClick={(e) => e.stopPropagation()}>
				{cartItems.length > 0 ? (
					<div className={styles}>
						<button type="button" className="self-start" onClick={setShowCart}>
							<CancelIcon />
						</button>
						<h2 className="font-bold text-[20px] text-center">Your Cart</h2>
						<div className="flex flex-col gap-8 w-full mt-6">
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
						<Link to="/checkout/cart" className="w-full max-w-[392px]">
							<button
								type="button"
								className="h-10 flex-shrink-0 w-full bg-primary text-white mt-8"
							>
								Check Out
							</button>
						</Link>
					</div>
				) : (
					<EmptyCart />
				)}
			</div>
		</div>
	);
};

const CartItem = ({ id, image, name, size, price, color, quantity }: CartItemsTypes) => {
	const { increaseItemQuantity, decreaseItemQuantity, removeItemFromCart } = useCartItem();
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

const EmptyCart = () => {
	const { setShowCart } = useCart();
	const windowSize = useWindowWidth();

	const isMobile = windowSize < 1100;
	const styles = twMerge(
		"absolute bg-white flex flex-col py-8 px-6",
		isMobile ? "w-full h-screen" : "right-0 w-[392px] h-[660px]"
	);
	return (
		<div className={styles}>
			<button
				type="button"
				className={clsx(windowSize < 1100 ? "" : "flex self-end")}
				onClick={setShowCart}
			>
				<CancelIcon />
			</button>
			<div className="flex items-center flex-col text-center mt-[96px]">
				<h3 className="font-bold mb-6">Your shopping bag is empty</h3>
				<p className="text-[14px] leadng-[1.4] w-full max-w-[232px] mb-[72px]">
					discover modimal and add products to your Bag
				</p>
				<button type="button" className="bg-primary w-full max-w-[184px] h-10 mb-6 text-white">
					Collection
				</button>
				<button type="button" className="bg-primary w-full max-w-[184px] h-10 mb-6 text-white">
					New In
				</button>
				<button type="button" className="bg-primary w-full max-w-[184px] h-10 text-white">
					Best Sellers
				</button>
			</div>
		</div>
	);
};
