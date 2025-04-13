import { BagIcon, HeartIcon, ProfileIcon, SearchIcon } from "../Icons";
import { useState, useRef } from "react";

export default function Navbar() {
	return (
		<section className="relative">
			<DesktopNavbar />
		</section>
	);
}

const ListItems = () => {
	const [hover, setHover] = useState("");
	const timeoutRef = useRef<number | null>(null);
	const handleMouseEnter = (item: string) => {
		if (timeoutRef.current !== null) {
			clearTimeout(timeoutRef.current);
		}
		setHover(item);
	};

	const handleMouseLeave = () => {
		timeoutRef.current = setTimeout(() => {
			setHover("");
		}, 150);
	};
	return (
		<ul className=" flex gap-[20px]">
			<div>
				<li
					className={`px-4 py-[0.5rem] rounded-full cursor-pointer ${
						hover === "collection" && "bg-primary-25"
					}`}
					onMouseEnter={() => {
						handleMouseEnter("collection");
					}}
					onMouseLeave={handleMouseLeave}
				>
					Collection
				</li>
				{hover === "collection" && (
					<div className="fixed top-[128px] justify-items-center bg-black/40 inset-0 w-full">
						<div
							className="bg-white w-full max-w-[1440px] px-[108px] flex gap-[54px] pt-8 pb-[56px]"
							onMouseEnter={() => {
								handleMouseEnter("collection");
							}}
							onMouseLeave={handleMouseLeave}
						>
							<div className="grid grid-cols-3 gap-6 w-full">
								{collectionContent.map(({ id, heading, subheading }: CollectionContentItem) => (
									<DropdownContent key={id} id={id} heading={heading} subheading={subheading} />
								))}
							</div>
							<div className="flex gap-6">
								<div>
									<figure className="w-[288px] h-[420px] bg-primary"></figure>
								</div>
								<div>
									<figure className="w-[288px] h-[420px] bg-primary"></figure>
								</div>
							</div>
						</div>
					</div>
				)}
			</div>

			<div
				onMouseEnter={() => {
					handleMouseEnter("new-in");
				}}
				onMouseLeave={handleMouseLeave}
			>
				<li
					className={`px-4 py-[0.5rem] rounded-full cursor-pointer ${
						hover === "new-in" && "bg-primary-25"
					}`}
				>
					New In
				</li>
				{hover === "new-in" && (
					<div className="absolute bottom-[0px] left-[50%] bg-primary w-full max-w-[1224px] -translate-x-1/2 ">
						New In
					</div>
				)}
			</div>
			<div
				onMouseEnter={() => {
					handleMouseEnter("modiweek");
				}}
				onMouseLeave={handleMouseLeave}
			>
				<li
					className={`px-4 py-[0.5rem] rounded-full cursor-pointer ${
						hover === "modiweek" && "bg-primary-25"
					}`}
				>
					Modiweek
				</li>
				{hover === "modiweek" && (
					<div className="absolute bottom-0 left-[50%] bg-primary w-full max-w-[1224px] -translate-x-1/2 ">
						Modiweek
					</div>
				)}
			</div>
			<div
				onMouseEnter={() => {
					handleMouseEnter("plus-size");
				}}
				onMouseLeave={handleMouseLeave}
			>
				<li
					className={`px-4 py-[0.5rem] rounded-full cursor-pointer ${
						hover === "plus-size" && "bg-primary-25"
					}`}
				>
					Plus Size
				</li>
				{hover === "plus-size" && (
					<div className="absolute bottom-0 left-[50%] bg-primary w-full max-w-[1224px] -translate-x-1/2 ">
						Plus Size
					</div>
				)}
			</div>
			<div
				onMouseEnter={() => {
					handleMouseEnter("sustainability");
				}}
				onMouseLeave={handleMouseLeave}
			>
				<li
					className={`px-4 py-[0.5rem] rounded-full cursor-pointer ${
						hover === "sustainabiity" && "bg-primary-25"
					}`}
				>
					Sustainability
				</li>
				{hover === "sustainability" && (
					<div className="absolute bottom-0 left-[50%] bg-primary w-full max-w-[1224px] -translate-x-1/2 ">
						Sustainability
					</div>
				)}
			</div>
		</ul>
	);
};

const DesktopNavbar = () => {
	return (
		<>
			<div className="bg-primary text-off-white text-center text-[12px] font-semibold py-[8px]">
				<p>Enjoy Free Shipping On All Orders</p>
			</div>
			<nav className="w-full max-w-[1224px] mx-auto flex items-center justify-between py-6">
				<img src="/Logo.svg" alt="Brand Logo" />
				<ListItems />
				<div className="flex gap-6">
					<button type="button">
						<SearchIcon />
					</button>
					<button type="button">
						<ProfileIcon />
					</button>
					<button type="button">
						<HeartIcon />
					</button>
					<button type="button">
						<BagIcon />
					</button>
				</div>
			</nav>
		</>
	);
};

type CollectionContentItem = {
	id: number;
	heading: string;
	subheading: string[];
};

const collectionContent: CollectionContentItem[] = [
	{
		id: 1,
		heading: "Category",
		subheading: [
			"Shop all",
			"Boluses & top",
			"Pants",
			"Dresses & jumpsuits",
			"Outwear & jackets",
			"Pullovers",
			"Tees",
			"Shorts & skirts",
		],
	},

	{
		id: 2,
		heading: "Featured",
		subheading: ["New in", "Modiweek", "Plus size", "Best seller"],
	},

	{
		id: 3,
		heading: "More",
		subheading: ["Bundles", "Occasion wear", "Matching set", "Suiting"],
	},
];

const DropdownContent = ({ id, heading, subheading }: CollectionContentItem) => {
	return (
		<div className="flex flex-col gap-6">
			<h3 className="text-dark-grey font-semibold">{heading}</h3>
			<div className="flex flex-col gap-[8px]">
				{subheading.map((item) => (
					<p className="text-gray-700 leading-[1.8]">{item}</p>
				))}
			</div>
		</div>
	);
};

const MobileNavbar = () => {
	return <nav></nav>;
};
