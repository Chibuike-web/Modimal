import { create } from "zustand";
import { Product } from "../types";
import { allProducts } from "../utils";

type FilterItemType = {
	filterItems: string[];
	toggleFilterItem: (item: string) => void;
	filteredList: Product[];
};

const useFilterItemStore = create<FilterItemType>((set, get) => ({
	filterItems: [],
	filteredList: allProducts,
	toggleFilterItem: (item) => {
		const { filterItems } = get();
		const exists = filterItems.includes(item);
		const newFilterItems = exists ? filterItems.filter((i) => i !== item) : [...filterItems, item];

		const filtered = allProducts.filter((product) => {
			return newFilterItems.every((item) => {
				if (product.colors?.some((c) => c.label === item)) return true;
				if (product.sizes?.some((s) => s.label === item)) return true;
				if (product.fabric === item) return true;
				if (product.categories?.includes(item)) return true;
				return false;
			});
		});

		set({
			filterItems: newFilterItems,
			filteredList: filtered,
		});
	},
}));

export const useFilterItem = () => {
	const filterItems = useFilterItemStore((state) => state.filterItems);
	const toggleFilterItem = useFilterItemStore((state) => state.toggleFilterItem);
	const filteredList = useFilterItemStore((state) => state.filteredList);

	return {
		filterItems,
		toggleFilterItem,
		filteredList,
	};
};
