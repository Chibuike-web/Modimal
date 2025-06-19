import { CardComponent } from "../components/Card";
import { useFavourites } from "../store/useFavourites";

export default function Favourites() {
	const { favourites } = useFavourites();
	return (
		<section className="mx-auto max-w-[76.5rem] mt-[5.5rem] max-xl:px-6 grid grid-cols-[repeat(auto-fill,minmax(392px,max-content))] gap-6">
			{favourites.map(({ id, image, name, description, price, colors, sizes }) => (
				<CardComponent
					key={id}
					id={id}
					image={image}
					name={name}
					description={description}
					price={price}
					colors={colors}
					sizes={sizes}
				/>
			))}
		</section>
	);
}
