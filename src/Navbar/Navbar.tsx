import { BagIcon, HeartIcon, ProfileIcon, SearchIcon } from "../Icons";
import { useState, useRef } from "react";
import styles from "./Navbar.module.css";

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
					onMouseEnter={() => {
						handleMouseEnter("collection");
					}}
					onMouseLeave={handleMouseLeave}
					className={styles.navlink}
				>
					Collection
				</li>
				{hover === "collection" && (
					<div className="absolute bottom-0 left-[50%] bg-primary w-full max-w-[1224px] -translate-x-1/2 ">
						Collection
					</div>
				)}
			</div>

			<div>
				<li
					onMouseEnter={() => {
						handleMouseEnter("new-in");
					}}
					onMouseLeave={handleMouseLeave}
					className={styles.navlink}
				>
					New In
				</li>
				{hover === "new-in" && (
					<div className="absolute bottom-0 left-[50%] bg-primary w-full max-w-[1224px] -translate-x-1/2 ">
						New In
					</div>
				)}
			</div>
			<div>
				<li
					onMouseEnter={() => {
						handleMouseEnter("modiweek");
					}}
					onMouseLeave={handleMouseLeave}
					className={styles.navlink}
				>
					Modiweek
				</li>
				{hover === "modiweek" && (
					<div className="absolute bottom-0 left-[50%] bg-primary w-full max-w-[1224px] -translate-x-1/2 ">
						Modiweek
					</div>
				)}
			</div>
			<div>
				<li
					onMouseEnter={() => {
						handleMouseEnter("plus-size");
					}}
					onMouseLeave={handleMouseLeave}
					className={styles.navlink}
				>
					Plus Size
				</li>
				{hover === "plus-size" && (
					<div className="absolute bottom-0 left-[50%] bg-primary w-full max-w-[1224px] -translate-x-1/2 ">
						Plus Size
					</div>
				)}
			</div>
			<div>
				<li
					onMouseEnter={() => {
						handleMouseEnter("sustainability");
					}}
					onMouseLeave={handleMouseLeave}
					className={styles.navlink}
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

const MobileNavbar = () => {
	return <nav></nav>;
};
