import { create } from "zustand";

const useBagStore = create<{ showBag: boolean; setShowBag: () => void }>((set) => ({
	showBag: false,
	setShowBag: () => set((state) => ({ showBag: !state.showBag })),
}));

export const useBag = () => {
	const showBag = useBagStore((state) => state.showBag);
	const setShowBag = useBagStore((state) => state.setShowBag);
	return { showBag, setShowBag };
};
