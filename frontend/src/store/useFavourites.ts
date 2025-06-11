import { create } from "zustand";

interface FavouritesState {
	favourites: any[];
	isClicked: (productId: string) => boolean;
	deleteFavourites: (id: string) => void;
	setFavourites: (newFavourites: any) => void;
}

const useFavouritesStore = create<FavouritesState>((set, get) => ({
	favourites: [],
	isClicked: (productId) => get().favourites.some((fav) => fav.id === productId),
	deleteFavourites: (id: string) =>
		set((state) => ({ favourites: state.favourites.filter((item) => item.id !== id) })),
	setFavourites: (newFavourites) =>
		set((state) => ({ favourites: [...state.favourites, newFavourites] })),
}));

export const useFavourites = () => {
	const favourites = useFavouritesStore((state) => state.favourites);
	const isClicked = useFavouritesStore((state) => state.isClicked);
	const deleteFavourites = useFavouritesStore((state) => state.deleteFavourites);
	const setFavourites = useFavouritesStore((state) => state.setFavourites);

	return {
		favourites,
		isClicked,
		deleteFavourites,
		setFavourites,
	};
};
