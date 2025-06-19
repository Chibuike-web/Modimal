import { ReactNode } from "react";
import { Product } from "../types";
import { useFavourites } from "../store/useFavourites";

export function LikeButton({
	product,
	className,
	children,
}: {
	product?: Product;
	className?: string;
	children: ReactNode;
}) {
	const { deleteFavourites, setFavourites, isClicked } = useFavourites();

	const toggleButton = () => {
		if (product) {
			if (isClicked(product.id)) {
				deleteFavourites(product.id);
			} else {
				setFavourites(product);
			}
		}
	};

	return (
		<button type="button" onClick={toggleButton} className={className}>
			{children}
		</button>
	);
}
