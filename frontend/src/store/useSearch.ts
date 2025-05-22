import { create } from "zustand";

const useSearchStore = create<{ isSearch: boolean; setIsSearch: () => void }>((set) => ({
	isSearch: false,
	setIsSearch: () => set((state) => ({ isSearch: !state.isSearch })),
}));

export const useSearch = () => {
	const isSearch = useSearchStore((state) => state.isSearch);
	const setIsSearch = useSearchStore((state) => state.setIsSearch);

	return { isSearch, setIsSearch };
};
