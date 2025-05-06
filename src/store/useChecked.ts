import { create } from "zustand";

type CheckedState = {
	selectedItems: Record<string, boolean>;
	toggleItem: (id: string) => void;
};

const useCheckedStore = create<CheckedState>((set) => ({
	selectedItems: {},
	toggleItem: (id: string) =>
		set((state) => ({
			selectedItems: {
				...state.selectedItems,
				[id]: !state.selectedItems[id],
			},
		})),
}));

export const useChecked = () => {
	const selectedItems = useCheckedStore((state) => state.selectedItems);
	const toggleItem = useCheckedStore((state) => state.toggleItem);

	return { selectedItems, toggleItem };
};
