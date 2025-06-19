import { create } from "zustand";

type FilterItemType = {
	filterItem: (string | boolean)[];
	setFilterItem: (item: (string | boolean)[]) => void;
	addFilterItem: (item: string | boolean) => void;
};

const useFilterItemStore = create<FilterItemType>((set) => ({
	filterItem: [],
	setFilterItem: (item) => set({ filterItem: item }),
	addFilterItem: (item) => set((state) => ({ filterItem: [...state.filterItem, item] })),
}));

export const useFilterItem = () => {
	const filterItem = useFilterItemStore((state) => state.filterItem);
	const setFilterItem = useFilterItemStore((state) => state.setFilterItem);
	const addFilterItem = useFilterItemStore((state) => state.addFilterItem);

	return {
		filterItem,
		setFilterItem,
		addFilterItem,
	};
};
