import { CardComponent } from "../components/Card";
import { useFavourites } from "../store/useFavourites";

export default function Favourites() {
	const { favourites } = useFavourites();
	return (
		<main className="mt-6 md:mt-[72px]">
			<h1 className="font-bold text-[20px] text-center">My Wish List</h1>
			<p className="text-center mt-4">
				{favourites.length} item{favourites.length > 1 ? "s" : ""}
			</p>
			<section className="mx-auto w-full max-w-[76.5rem] px-6 xl:px-0 mt-[2rem] grid grid-cols-2 lg:grid-cols-[repeat(auto-fill,minmax(392px,1fr))] gap-4 md:gap-6">
				{favourites.map((item) => (
					<CardComponent key={item.id} item={item} />
				))}
			</section>
		</main>
	);
}
