import { create } from "zustand";

type SignedIn = {
	isSignedIn: boolean;
	setIsSignedIn: (value: boolean) => void;
};

const useSignedInStore = create<SignedIn>((set) => ({
	isSignedIn: true,
	setIsSignedIn: () => set((state) => ({ isSignedIn: !state.isSignedIn })),
}));

export const useSignedIn = () => {
	const isSignedIn = useSignedInStore((state) => state.isSignedIn);
	const setIsSignedIn = useSignedInStore((state) => state.setIsSignedIn);

	return {
		isSignedIn,
		setIsSignedIn,
	};
};
