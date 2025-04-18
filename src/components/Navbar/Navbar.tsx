import { BagIcon, HeartIcon, ProfileIcon, SearchIcon } from "../../Icons";
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
import { collectionContent, newInContent, plusSizeContent, DropdownType } from "./utils";
import { useDropdownHover } from "./Hooks";

export default function Navbar() {
	return (
		<section className="sticky top-0 z-[100]">
			<div className="bg-primary text-off-white text-center text-[0.75rem] font-semibold py-[0.5rem]">
				<p>Enjoy Free Shipping On All Orders</p>
			</div>
			<DesktopNavbar />
		</section>
	);
}

const ListItems = () => {
	const { hover, handleMouseEnter, handleMouseLeave } = useDropdownHover();

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
	return (
		<nav className="w-full flex items-center justify-center py-6 bg-white">
			<header className="flex items-center justify-between w-full  max-w-[76.5rem]">
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
			</header>
		</nav>
	);
};

type DropdownProps = {
	handleMouseEnter: (value: string) => void;
	handleMouseLeave: () => void;
};

const CollectionDropdown = ({ handleMouseEnter, handleMouseLeave }: DropdownProps) => {
	return (
		<div className="fixed top-[8rem] justify-items-center bg-black/40 inset-0 w-full">
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
		<div className="fixed top-[128px] justify-items-center bg-black/40 inset-0 w-full">
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
		<div className="fixed top-[128px] justify-items-center bg-black/40 inset-0 w-full">
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
		<div className="fixed top-[128px] justify-items-center bg-black/40 inset-0 w-full">
			<div
				className="bg-white w-full h-[550px] px-[108px] flex justify-between pt-8"
				onMouseEnter={() => {
					handleMouseEnter("sustainability");
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
