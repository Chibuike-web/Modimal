import { Link } from "react-router";
import { LikeIcon } from "../Icons";
import { useFavourites } from "../store/useFavourites";
import { Product } from "../types";
import { LikeButton } from "./LikeButton";

export const CardComponent = (item: Product) => {
	const { isClicked } = useFavourites();

	return (
		<article id={`card-${item.id}`} className="w-full flex flex-col gap-[1rem] max-w-[392px]">
			<figure className="relative w-full flex ">
				<img src={item.image} alt="" className="w-full h-full" />
				<LikeButton product={item}>
					<LikeIcon
						className="absolute top-6 right-6 max-lg:top-[8px] max-lg:right-[8px] cursor-pointer"
						fill={isClicked(item.id) ? "red" : "white"}
						stroke={isClicked(item.id) ? "" : "#0C0C0C"}
					/>
				</LikeButton>

				{item.tag && (
					<span className="w-[86px] h-[32px] absolute left-6 top-6 flex items-center justify-center bg-white">
						{item.tag}
					</span>
				)}
			</figure>
			<div className="flex items-center justify-between px-[8px]">
				<div className="flex flex-col gap-[0.5rem]">
					<Link to={`/collection/${item.id}`}>
						<h3 className="font-bold">{item.name}</h3>
					</Link>
					<p>{item.description}</p>
					<div className="flex gap-[0.5rem]">
						{item.colors?.map((color) => (
							<span
								key={color.id}
								className={`block w-6 h-6 rounded-full ${color.className}`}
								title={color.label}
							></span>
						))}
					</div>
				</div>
				<p className="font-bold">${item.price}</p>
			</div>
		</article>
	);
};
