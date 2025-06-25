import { Link } from "react-router";
import { LikeIcon } from "../Icons";
import { useFavourites } from "../store/useFavourites";
import { Product } from "../types";
import { LikeButton } from "./LikeButton";
import { twMerge } from "tailwind-merge";

type CardProps = {
	item: Product;
	className?: string;
};

export const CardComponent = ({ item, className = "" }: CardProps) => {
	const { isClicked } = useFavourites();
	const defaultStyle = "w-full flex flex-col gap-[1rem] w-full";

	return (
		<article id={`card-${item.id}`} className={twMerge(defaultStyle, className)}>
			<figure className="relative w-full flex">
				<img src={item.image} alt="" className="w-full h-full" />
				<LikeButton product={item}>
					<LikeIcon
						className="absolute top-2 right-2 lg:top-[24px] lg:right-[24px] w-4 h-4 md:w-6 md:h-6 cursor-pointer"
						fill={isClicked(item.id) ? "red" : "white"}
						stroke={isClicked(item.id) ? "" : "#0C0C0C"}
					/>
				</LikeButton>
				{item.tag && (
					<span className="w-[40px] h-[16px] md:w-[86px] md:h-[32px] absolute left-2 top-2 md:left-6 md:top-6 text-[10px] md:text-[1rem] flex items-center justify-center bg-white">
						{item.tag}
					</span>
				)}
			</figure>

			<div className="flex items-start justify-between">
				<div className="flex flex-col gap-[0.5rem]">
					<Link to={`/collection/${item.id}`}>
						<h3 className="font-bold text-[14px] md:text-[16px]">{item.name}</h3>
					</Link>
					<p className="text-[14px] md:text-[16px]">{item.description}</p>
					<div className="flex gap-[0.5rem]">
						{item.colors?.map((color) => (
							<span
								key={color.id}
								className={`block w-4 h-4 md:w-6 md:h-6 rounded-full ${color.className}`}
								title={color.label}
							></span>
						))}
					</div>
				</div>
				<p className="font-bold text-[14px] md:text-[16px]">${item.price}</p>
			</div>
		</article>
	);
};
