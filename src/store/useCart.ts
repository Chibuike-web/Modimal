import { create } from "zustand";

const useCartStore = create<{ showCart: boolean; setShowCart: () => void }>((set) => ({
	showCart: false,
	setShowCart: () => set((state) => ({ showCart: !state.showCart })),
}));

export const useCart = () => {
	const showCart = useCartStore((state) => state.showCart);
	const setShowCart = useCartStore((state) => state.setShowCart);
	return { showCart, setShowCart };
};
