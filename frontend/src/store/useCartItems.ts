import { create } from "zustand";
import { CartItemsTypes } from "../sections/navbar/types";

interface CartState {
	cartItems: CartItemsTypes[];
	updateCartItems: (newItem: CartItemsTypes) => void;
	increaseItemQuantity: (id: string, size: string) => void;
	decreaseItemQuantity: (id: string, size: string) => void;
	removeItemFromCart: (id: string, size: string) => void;
}

const useCartItemStore = create<CartState>((set, get) => ({
	cartItems: [],
	updateCartItems: (newItem: CartItemsTypes) => {
		const itemExists = get().cartItems.find(
			(item) => item.id === newItem.id && item.size === newItem.size
		);
		if (itemExists) return;
		set((state) => ({ cartItems: [...state.cartItems, newItem] }));
	},

	increaseItemQuantity: (id: string, size: string) =>
		set((state) => ({
			cartItems: state.cartItems.map((item) =>
				item.id === id && item.size === size ? { ...item, quantity: item.quantity + 1 } : item
			),
		})),
	decreaseItemQuantity: (id: string, size: string) =>
		set((state) => ({
			cartItems: state.cartItems.map((item) =>
				item.id === id && item.size === size
					? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
					: item
			),
		})),

	removeItemFromCart: (id: string, size: string) => {
		const items = get().cartItems;
		const updated = items.filter((item) => !(item.id === id && item.size === size));
		set({ cartItems: updated });
	},
}));

export const useCartItem = () => {
	const cartItems = useCartItemStore((state) => state.cartItems);
	const updateCartItems = useCartItemStore((state) => state.updateCartItems);
	const increaseItemQuantity = useCartItemStore((state) => state.increaseItemQuantity);
	const decreaseItemQuantity = useCartItemStore((state) => state.decreaseItemQuantity);
	const removeItemFromCart = useCartItemStore((state) => state.removeItemFromCart);

	return {
		cartItems,
		updateCartItems,
		increaseItemQuantity,
		decreaseItemQuantity,
		removeItemFromCart,
	};
};
