import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import { useWindowWidth } from "../../Hooks";
import { useBag } from "../../store/useBag";
import { AddIcon, CancelIcon, MinusIcon } from "../../Icons";
import { bagItems } from "./utils";
import type { BagItems } from "./types";

export const BagModal = () => {
	const windowSize = useWindowWidth();
	const { setShowBag } = useBag();
	const isMobile = windowSize < 1100;
	const hasBags = bagItems.length > 0;
	const styles = twMerge(
		"absolute bg-white flex flex-col items-center py-8 px-6 overflow-y-auto",
		isMobile
			? "w-full h-screen"
			: hasBags
			? "right-0 w-[628px] h-[914px]"
			: "right-0 w-[392px] h-[660px]"
	);
	return (
		<div className="fixed top-[8rem] max-lg:top-0 justify-items-center bg-black/40 inset-0 backdrop-blur-[0.5rem] w-full">
			<div className="relative max-w-[76.5rem] w-full">
				{bagItems.length > 0 ? (
					<div className={styles}>
						<button type="button" className="self-start" onClick={setShowBag}>
							<CancelIcon />
						</button>
						<h2 className="font-bold text-[20px] text-center">Your Cart</h2>
						<div className="flex flex-col gap-8 w-full mt-6">
							{bagItems.map(({ id, image, name, size, price, color }) => (
								<BagItem
									key={id}
									id={id}
									image={image}
									name={name}
									size={size}
									price={price}
									color={color}
								/>
							))}
						</div>
						<button
							type="button"
							className="h-10 flex-shrink-0 w-full max-w-[392px] bg-primary text-white mt-8"
						>
							Check Out
						</button>
					</div>
				) : (
					<EmptyBag />
				)}
			</div>
		</div>
	);
};

const BagItem = ({ image, name, size, price, color }: BagItems) => {
	return (
		<div className="flex gap-[8px] w-full">
			<figure>
				<img src={image} alt={`Image of a woman wearing ${name} `} />
			</figure>
			<div className="w-full flex flex-col justify-between">
				<div className="flex items-center justify-between w-full">
					<p className="font-bold leading-[1.4]">{name}</p>
					<button type="button">
						<CancelIcon />
					</button>
				</div>
				<p>Size: {size}</p>
				<p>Color: {color}</p>
				<div className="flex items-center justify-between w-full">
					<p className="font-semibold">${price} </p>
					<div className="flex items-center bg-primary-50 gap-[8px]">
						<button className="p-[4px]">
							<AddIcon fill="#404E3E" />
						</button>
						<p className="text-[#404E3E]">1</p>
						<button className="p-[4px]">
							<MinusIcon fill="#404E3E" />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

const EmptyBag = () => {
	const { setShowBag } = useBag();
	const windowSize = useWindowWidth();

	const isMobile = windowSize < 1100;
	const styles = twMerge(
		"absolute bg-white flex flex-col py-8 px-6",
		isMobile ? "w-full h-screen" : "right-0 w-[392px] h-[660px]"
	);
	return (
		<div className={styles}>
			<button
				type="button"
				className={clsx(windowSize < 1100 ? "" : "flex self-end")}
				onClick={setShowBag}
			>
				<CancelIcon />
			</button>
			<div className="flex items-center flex-col text-center mt-[96px]">
				<h3 className="font-bold mb-6">Your shopping bag is empty</h3>
				<p className="text-[14px] leadng-[1.4] w-full max-w-[232px] mb-[72px]">
					discover modimal and add products to your Bag
				</p>
				<button type="button" className="bg-primary w-full max-w-[184px] h-10 mb-6 text-white">
					Collection
				</button>
				<button type="button" className="bg-primary w-full max-w-[184px] h-10 mb-6 text-white">
					New In
				</button>
				<button type="button" className="bg-primary w-full max-w-[184px] h-10 text-white">
					Best Sellers
				</button>
			</div>
		</div>
	);
};
