import { BagIcon, CancelIcon, HeartIcon, MenuIcon, ProfileIcon, SearchIcon } from "../../Icons";
import CollectionImage1 from "../../assets/Navbar/CollectionImage1.png";
import CollectionImage2 from "../../assets/Navbar/CollectionImage2.png";
import NewInImage1 from "../../assets/Navbar/NewInImage1.png";
import NewInImage2 from "../../assets/Navbar/NewInImage2.png";
import NewInImage3 from "../../assets/Navbar/NewInImage3.png";
import PlusSizeImage1 from "../../assets/Navbar/PlusSizeImage1.png";
import PlusSizeImage2 from "../../assets/Navbar/PlusSizeImage2.png";
import PlusSizeImage3 from "../../assets/Navbar/PlusSizeImage3.png";
import SustainImage1 from "../../assets/Navbar/SustainImage1.png";
import SustainImage2 from "../../assets/Navbar/SustainImage2.png";
import { collectionContent, newInContent, plusSizeContent, sustainContent } from "./utils";
import { DropdownType, DropdownProps } from "./types";
import { useDropdownHover, useMediaQuery } from "../../Hooks";
import { useState } from "react";
import { DownArrowButton } from "../../components/DownArrowButton";
import { motion, AnimatePresence } from "motion/react";
import { useSearch } from "../../store/useSearch";
import { useSignedIn } from "../../store/useSignIn";
import { Link } from "react-router";
import { useCart } from "../../store/useCart";
import { CartModal } from "./CartModal";
import { SearchBar } from "../SearchBar";

export default function Navbar() {
	const isDesktop = useMediaQuery("(min-width: 1100px)");

	return (
		<section className="sticky top-0 z-[100]">
			<div className="bg-primary text-off-white text-center text-[0.75rem] font-semibold py-[0.5rem]">
				<p>Enjoy Free Shipping On All Orders</p>
			</div>
			{isDesktop ? <DesktopNavbar /> : <MobileNavbar />}
			<WelcomeModal />
		</section>
	);
}

const WelcomeModal = () => {
	const { isSignedIn, setIsSignedIn } = useSignedIn();

	if (!isSignedIn) {
		return;
	}
	return (
		<div className="fixed justify-items-center content-center bg-black/40 inset-0 backdrop-blur-[0.5rem] w-full px-4">
			<div className="w-full max-w-[854px] bg-white text-center py-8 px-6">
				<button type="button" onClick={() => setIsSignedIn(isSignedIn)} className="w-full">
					<CancelIcon />
				</button>

				<h2 className="w-full text-[20px] md:text-[2rem] font-bold leading-[1.4] mt-[50px] mb-8">
					Welcome To Modimal
				</h2>
				<p className="leading-[1.8] font-primary italic  md:text-[24px] w-full mb-8">
					Elegance in simplicity, Earth’s harmony
				</p>
				<p className="w-full md:text-[24px] font-semibold leading-[1.4] mb-8">
					is it your first experience on modimal?
				</p>
				<button type="button" className="w-full max-w-[392px] h-10 bg-primary text-white mb-[50px]">
					Create Your Own Style
				</button>
			</div>
		</div>
	);
};

const ListItems = () => {
	const { hover, handleMouseEnter, handleMouseLeave } = useDropdownHover();
	const { isSearch } = useSearch();
	const { showCart } = useCart();
	return (
		<ul className=" flex gap-[1.25rem]">
			<div>
				<li
					role="menuitem"
					aria-haspopup="true"
					aria-expanded={hover === "collection"}
					className={`px-4 py-[0.5rem] rounded-full cursor-pointer ${
						hover === "collection" && "bg-primary-25 font-semibold"
					}`}
					onMouseEnter={() => {
						if (isSearch || showCart) return;
						handleMouseEnter("collection");
					}}
					onMouseLeave={handleMouseLeave}
				>
					Collection
				</li>
				{hover === "collection" && (
					<CollectionDropdown
						handleMouseEnter={handleMouseEnter}
						handleMouseLeave={handleMouseLeave}
					/>
				)}
			</div>

			<div>
				<li
					role="menuitem"
					aria-haspopup="true"
					aria-expanded={hover === "new-in"}
					className={`px-4 py-[0.5rem] rounded-full cursor-pointer ${
						hover === "new-in" && "bg-primary-25 font-semibold"
					}`}
					onMouseEnter={() => {
						if (isSearch || showCart) return;
						handleMouseEnter("new-in");
					}}
					onMouseLeave={handleMouseLeave}
				>
					New In
				</li>
				{hover === "new-in" && (
					<NewInDropdown handleMouseEnter={handleMouseEnter} handleMouseLeave={handleMouseLeave} />
				)}
			</div>
			<div
				onMouseEnter={() => {
					if (isSearch || showCart) return;
					handleMouseEnter("modiweek");
				}}
				onMouseLeave={handleMouseLeave}
			>
				<li
					role="menuitem"
					aria-haspopup="true"
					aria-expanded={hover === "modiweek"}
					className={`px-4 py-[0.5rem] rounded-full cursor-pointer ${
						hover === "modiweek" && "bg-primary-25 font-semibold"
					}`}
				>
					Modiweek
				</li>
			</div>
			<div
				onMouseEnter={() => {
					if (isSearch || showCart) return;
					handleMouseEnter("plus-size");
				}}
				onMouseLeave={handleMouseLeave}
			>
				<li
					role="menuitem"
					aria-haspopup="true"
					aria-expanded={hover === "plus-size"}
					className={`px-4 py-[0.5rem] rounded-full cursor-pointer ${
						hover === "plus-size" && "bg-primary-25 font-semibold"
					}`}
				>
					Plus Size
				</li>
				{hover === "plus-size" && (
					<PlusSizeDropdown
						handleMouseEnter={handleMouseEnter}
						handleMouseLeave={handleMouseLeave}
					/>
				)}
			</div>
			<div
				onMouseEnter={() => {
					if (isSearch || showCart) return;
					handleMouseEnter("sustainability");
				}}
				onMouseLeave={handleMouseLeave}
			>
				<li
					className={`px-4 py-[0.5rem] rounded-full cursor-pointer ${
						hover === "sustainability" && "bg-primary-25 font-semibold"
					}`}
				>
					Sustainability
				</li>
				{hover === "sustainability" && (
					<SustainDropDown
						handleMouseEnter={handleMouseEnter}
						handleMouseLeave={handleMouseLeave}
					/>
				)}
			</div>
		</ul>
	);
};

const DesktopNavbar = () => {
	const { isSearch, setIsSearch } = useSearch();
	const { showCart, setShowCart } = useCart();
	return (
		<nav className="w-full flex items-center justify-center py-6 bg-white relative px-6 xl:px-0">
			<header className="flex items-center justify-between w-full max-w-[76.5rem]">
				<Link to="/">
					<img src="/Logo.svg" alt="Brand Logo" />
				</Link>
				<ListItems />
				<div className="flex gap-6">
					<button type="button" onClick={() => !showCart && setIsSearch()}>
						{isSearch ? <CancelIcon /> : <SearchIcon />}
					</button>
					<Link to={"/signup"}>
						<ProfileIcon />
					</Link>
					<Link to="/favourites" className="flex items-center">
						<HeartIcon />
					</Link>
					<button type="button" onClick={() => !isSearch && setShowCart()}>
						<BagIcon />
					</button>
				</div>
			</header>
			{showCart && <CartModal />}
			<AnimatePresence>{isSearch ? <SearchBar /> : ""}</AnimatePresence>
		</nav>
	);
};

const CollectionDropdown = ({ handleMouseEnter, handleMouseLeave }: DropdownProps) => {
	return (
		<div className="fixed top-[110.76px] justify-items-center bg-black/40 inset-0 backdrop-blur-[0.5rem] w-full">
			<div
				className="bg-white w-full h-[34.375rem] px-[6.75rem] flex justify-between pt-8"
				onMouseEnter={() => {
					handleMouseEnter("collection");
				}}
				onMouseLeave={handleMouseLeave}
			>
				<div className="w-full flex justify-between max-w-[76.5rem] mx-auto">
					<div className="grid grid-cols-3 gap-6">
						{collectionContent.map(({ id, heading, subheading }: DropdownType) => (
							<DropdownContent key={id} id={id} heading={heading} subheading={subheading} />
						))}
					</div>
					<div className="flex gap-6">
						<div className="w-full max-w-[288px]">
							<figure className="w-full">
								<img src={CollectionImage1} alt="" className="w-full object-fill" />
							</figure>
							<p className="leading-[1.8] mt-[12px]">Blouses</p>
						</div>
						<div className="w-full max-w-[288px]">
							<figure className="w-full">
								<img src={CollectionImage2} alt="" className="w-full" />
							</figure>
							<p className="leading-[1.8] mt-[12px]">Plus Size</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

const NewInDropdown = ({ handleMouseEnter, handleMouseLeave }: DropdownProps) => {
	return (
		<div className="fixed top-[110.76px] justify-items-center bg-black/40 backdrop-blur-[0.5rem] inset-0 w-full">
			<div
				className="bg-white w-full h-[550px] px-[108px] flex justify-between pt-8"
				onMouseEnter={() => {
					handleMouseEnter("new-in");
				}}
				onMouseLeave={handleMouseLeave}
			>
				<div className="w-full flex justify-between max-w-[1224px] mx-auto">
					<div className="grid grid-cols-2 gap-6">
						{newInContent.map(({ id, heading, subheading }: DropdownType) => (
							<DropdownContent key={id} id={id} heading={heading} subheading={subheading} />
						))}
					</div>
					<div className="flex gap-6">
						<div className="w-full max-w-[208px]">
							<figure className="w-full">
								<img src={NewInImage1} alt="" className="w-full" />
							</figure>
							<p className="leading-[1.8] mt-[12px]">Blouses</p>
						</div>
						<div className="w-full max-w-[208px]">
							<figure className="w-full">
								<img src={NewInImage2} alt="" className="w-full" />
							</figure>
							<p className="leading-[1.8] mt-[12px]">Plus Size</p>
						</div>
						<div className="w-full max-w-[208px]">
							<figure className="w-full">
								<img src={NewInImage3} alt="" className="w-full" />
							</figure>
							<p className="leading-[1.8] mt-[12px]">Plus Size</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

const PlusSizeDropdown = ({ handleMouseEnter, handleMouseLeave }: DropdownProps) => {
	return (
		<div className="fixed top-[110.76px] justify-items-center bg-black/40 backdrop-blur-[0.5rem] inset-0 w-full">
			<div
				className="bg-white w-full h-[550px] px-[108px] flex justify-between pt-8"
				onMouseEnter={() => {
					handleMouseEnter("plus-size");
				}}
				onMouseLeave={handleMouseLeave}
			>
				<div className="w-full flex justify-between max-w-[1224px] mx-auto">
					<div className="grid grid-cols-2 gap-6">
						{plusSizeContent.map(({ id, heading, subheading }: DropdownType) => (
							<DropdownContent key={id} id={id} heading={heading} subheading={subheading} />
						))}
					</div>
					<div className="flex gap-6">
						<div className="w-full max-w-[208px]">
							<figure className="w-full">
								<img src={PlusSizeImage1} alt="" className="w-full" />
							</figure>
							<p className="leading-[1.8] mt-[12px]">Pants</p>
						</div>
						<div className="w-full max-w-[208px]">
							<figure className="w-full">
								<img src={PlusSizeImage2} alt="" className="w-full" />
							</figure>
							<p className="leading-[1.8] mt-[12px]">Dresses</p>
						</div>
						<div className="w-full max-w-[208px]">
							<figure className="w-full">
								<img src={PlusSizeImage3} alt="" className="w-full" />
							</figure>
							<p className="leading-[1.8] mt-[12px]">Blouses</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

const SustainDropDown = ({ handleMouseEnter, handleMouseLeave }: DropdownProps) => {
	return (
		<div className="fixed top-[110.76px] justify-items-center bg-black/40 backdrop-blur-[0.5rem] inset-0 w-full">
			<div
				className="bg-white w-full h-[550px] px-[108px] flex justify-between pt-8"
				onMouseEnter={() => {
					handleMouseEnter("sustainability");
				}}
				onMouseLeave={handleMouseLeave}
			>
				<div className="w-full flex justify-between max-w-[1224px] mx-auto">
					<div className="grid grid-cols-2 gap-6">
						{sustainContent.map(({ id, heading, subheading }: DropdownType) => (
							<DropdownContent key={id} id={id} heading={heading} subheading={subheading} />
						))}
					</div>
					<div className="flex gap-6">
						<figure className="w-full max-w-[392px]">
							<img src={SustainImage1} alt="" className="w-full" />
						</figure>
						<figure className="w-full max-w-[392px]">
							<img src={SustainImage2} alt="" className="w-full" />
						</figure>
					</div>
				</div>
			</div>
		</div>
	);
};

const DropdownContent = ({ heading, subheading }: DropdownType) => {
	return (
		<div className={`flex flex-col gap-6 w-fit`}>
			<h3 className="text-dark-grey font-semibold">{heading}</h3>
			<div className="flex flex-col gap-[8px]">
				{subheading.map((item, index) => (
					<p key={index} className="text-gray-700 leading-[1.8] text-nowrap">
						{item}
					</p>
				))}
			</div>
		</div>
	);
};

const MobileNavbar = () => {
	const [showDropdown, setShowDropdown] = useState(false);
	const { isSearch, setIsSearch } = useSearch();
	const { showCart, setShowCart } = useCart();
	return (
		<>
			<nav className="w-full flex items-center justify-center py-[8px] bg-white px-6">
				<header className="flex items-center justify-between w-full  max-w-[76.5rem]">
					<div className="flex gap-[8px] items-center">
						<figure
							onClick={() => {
								!isSearch && !showCart && setShowDropdown(!showDropdown);
							}}
						>
							{showDropdown ? <CancelIcon /> : <MenuIcon />}
						</figure>
						<button type="button" onClick={() => !showCart && !showDropdown && setIsSearch()}>
							{isSearch ? <CancelIcon /> : <SearchIcon />}
						</button>
					</div>
					<img src="/Logo.svg" alt="Brand Logo" className="w-full max-w-[130px]" />
					<div className="flex gap-[8px] items-center">
						<Link to="/favourites" className="flex items-center">
							<HeartIcon />
						</Link>
						<button type="button" onClick={() => !isSearch && !showDropdown && setShowCart()}>
							<BagIcon />
						</button>
					</div>
				</header>
			</nav>
			<AnimatePresence>{showDropdown && <MobileDropdown />} </AnimatePresence>
			<AnimatePresence>{isSearch ? <SearchBar /> : ""}</AnimatePresence>
			{showCart && <CartModal />}
		</>
	);
};

const MobileDropdown = () => {
	return (
		<motion.div
			className="fixed top-[82px] bottom-0 z-[-100] bg-white px-6 w-full overflow-y-auto py-8"
			initial={{ opacity: 0, y: -50 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: -50 }}
			transition={{
				y: { duration: 0.3, ease: "easeInOut" },
				opacity: { duration: 0.2, ease: "easeOut", delay: 0.1 },
			}}
		>
			<CollectionMobileMenu />
			<NewInMobileMenu />
			<ModiweekMobileMenu />
			<PlusSizeMobileMenu />
			<SustainMobileMenu />
		</motion.div>
	);
};

const CollectionMobileMenu = () => {
	const [showDetails, setShowDetails] = useState(false);
	return (
		<div className="py-6 border-b-[2px] flex flex-col gap-6">
			<div
				className="flex justify-between items-center w-full"
				onClick={() => setShowDetails(!showDetails)}
			>
				<h3 className="text-[1.5rem] font-bold w-full">Collection</h3>
				<DownArrowButton />
			</div>
			<AnimatePresence>
				{showDetails && (
					<motion.div
						className="flex flex-col gap-6"
						initial={{ opacity: 0, y: -10 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -10 }}
						transition={{ duration: 0.1 }}
					>
						{collectionContent.map(({ id, heading, subheading }) => (
							<MobileDropdownContent key={id} id={id} heading={heading} subheading={subheading} />
						))}
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};

const NewInMobileMenu = () => {
	const [showDetails, setShowDetails] = useState(false);
	return (
		<div className="py-6 border-b-[2px] flex flex-col gap-6">
			<div
				className="flex justify-between items-center w-full"
				onClick={() => setShowDetails(!showDetails)}
			>
				<h3 className="text-[1.5rem] font-bold w-full">New in</h3>
				<DownArrowButton />
			</div>
			<AnimatePresence>
				{showDetails && (
					<motion.div
						className="flex flex-col gap-6"
						initial={{ opacity: 0, y: -10 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -10 }}
						transition={{ duration: 0.1 }}
					>
						{newInContent.map(({ id, heading, subheading }) => (
							<MobileDropdownContent key={id} id={id} heading={heading} subheading={subheading} />
						))}
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};

const ModiweekMobileMenu = () => {
	return <h3 className="py-6 border-b-[2px] text-[1.5rem] font-bold">Modiweek</h3>;
};

const PlusSizeMobileMenu = () => {
	const [showDetails, setShowDetails] = useState(false);
	return (
		<div className="py-6 border-b-[2px] flex flex-col gap-6">
			<div
				className="flex justify-between items-center w-full"
				onClick={() => setShowDetails(!showDetails)}
			>
				<h3 className="text-[1.5rem] font-bold w-full">Plus Size</h3>
				<DownArrowButton />
			</div>
			<AnimatePresence>
				{showDetails && (
					<motion.div
						initial={{ opacity: 0, y: -10 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -10 }}
						transition={{ duration: 0.1 }}
					>
						{plusSizeContent.map(({ id, heading, subheading }) => (
							<MobileDropdownContent key={id} id={id} heading={heading} subheading={subheading} />
						))}
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};

const SustainMobileMenu = () => {
	const [showDetails, setShowDetails] = useState(false);
	return (
		<div className="py-6 flex flex-col gap-6 w-full">
			<div
				className="flex justify-between items-center w-full"
				onClick={() => setShowDetails(!showDetails)}
			>
				<h3 className="text-[1.5rem] font-bold w-full">Sustainability</h3>
				<DownArrowButton />
			</div>
			<AnimatePresence>
				{showDetails && (
					<motion.div
						initial={{ opacity: 0, y: -10 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -10 }}
						transition={{ duration: 0.1 }}
					>
						{sustainContent.map(({ id, heading, subheading }) => (
							<MobileDropdownContent key={id} id={id} heading={heading} subheading={subheading} />
						))}
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};

const MobileDropdownContent = ({ id, heading, subheading }: DropdownType) => {
	return (
		<div key={id} className="flex flex-col gap-4 w-full px-6">
			<h3 className="text-dark-grey font-semibold">{heading}</h3>

			<div className="flex flex-col gap-6">
				{subheading.map((item, index) => (
					<p key={index} className="text-gray-700 leading-[1.8] text-nowrap">
						{item}
					</p>
				))}
			</div>
		</div>
	);
};
