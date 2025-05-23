import { create } from "zustand";
import { cartItems, cartItems as initialItems } from "../sections/Navbar/utils";
import { CartItemsTypes } from "../sections/Navbar/types";

interface CartState {
	cartItems: CartItemsTypes[];
	setCartItems: (items: CartItemsTypes[]) => void;
	updateCartItems: (newItem: CartItemsTypes) => void;
	increaseItemQuantity: (id: string) => void;
	decreaseItemQuantity: (id: string) => void;
	removeItemFromCart: (id: string) => void;
}

const useCartItemStore = create<CartState>((set, get) => ({
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
				item.id === id ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 } : item
			),
		})),
	removeItemFromCart: (id: string) => {
		const items = get().cartItems;
		const updated = items.filter((item) => item.id !== id);
		set({ cartItems: updated });
	},
}));

export const useCartItem = () => {
	const cartItems = useCartItemStore((state) => state.cartItems);
	const setCartItems = useCartItemStore((state) => state.setCartItems);
	const updateCartItems = useCartItemStore((state) => state.updateCartItems);
	const increaseItemQuantity = useCartItemStore((state) => state.increaseItemQuantity);
	const decreaseItemQuantity = useCartItemStore((state) => state.decreaseItemQuantity);
	const removeItemFromCart = useCartItemStore((state) => state.removeItemFromCart);

	return {
		cartItems,
		setCartItems,
		updateCartItems,
		increaseItemQuantity,
		decreaseItemQuantity,
		removeItemFromCart,
	};
};
