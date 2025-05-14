import { create } from "zustand";

interface FavouritesState {
	favourites: any[];
	deleteFavourites: (id: string) => void;
	setFavourites: (newFavourites: any) => void;
}

const useFavouritesStore = create<FavouritesState>((set) => ({
	favourites: [],
	deleteFavourites: (id: string) =>
		set((state) => ({ favourites: state.favourites.filter((item) => item.id !== id) })),
	setFavourites: (newFavourites) =>
		set((state) => ({ favourites: [...state.favourites, newFavourites] })),
}));

export const useFavourites = () => {
	const favourites = useFavouritesStore((state) => state.favourites);
	const deleteFavourites = useFavouritesStore((state) => state.deleteFavourites);
	const setFavourites = useFavouritesStore((state) => state.setFavourites);

	return {
		favourites,
		deleteFavourites,
		setFavourites,
	};
};
