import { create } from "zustand";
import { cartItems as initialItems } from "../sections/Navbar/utils";
import { CartItemsTypes } from "../sections/Navbar/types";

interface CartState {
	cartItems: CartItemsTypes[];
	setCartItems: (items: CartItemsTypes[]) => void;
	updateCartItems: (newItem: CartItemsTypes) => void;
	increaseItemQuantity: (id: string) => void;
	decreaseItemQuantity: (id: string) => void;
}

const useCartItemStore = create<CartState>((set) => ({
	cartItems: initialItems,
	setCartItems: (items) => set({ cartItems: items }),
	updateCartItems: (newItem: CartItemsTypes) =>
		set((state) => ({ cartItems: [...state.cartItems, newItem] })),
	increaseItemQuantity: (id: string) =>
		set((state) => ({
			cartItems: state.cartItems.map((item) =>
				item.id === id ? { ...item, quantity: item.quantity + 1 } : item
			),
		})),
	decreaseItemQuantity: (id: string) =>
		set((state) => ({
			cartItems: state.cartItems.map((item) =>
				item.id === id ? { ...item, quantity: item.quantity - 1 } : item
			),
		})),
}));

export const useCartItem = () => {
	const cartItems = useCartItemStore((state) => state.cartItems);
	const setCartItems = useCartItemStore((state) => state.cartItems);
	const updateCartItems = useCartItemStore((state) => state.cartItems);
	const increaseItemQuantity = useCartItemStore((state) => state.increaseItemQuantity);
	const decreaseItemQuantity = useCartItemStore((state) => state.decreaseItemQuantity);

	return {
		cartItems,
		setCartItems,
		updateCartItems,
		increaseItemQuantity,
		decreaseItemQuantity,
	};
};
