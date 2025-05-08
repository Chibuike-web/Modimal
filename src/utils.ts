import { v4 as uuidv4 } from "uuid";
import ShopAllProductImage1 from "./assets/ShopAll/ShopAllProductImage1.png";
import ShopAllProductImage2 from "./assets/ShopAll/ShopAllProductImage2.png";
import ShopAllProductImage3 from "./assets/ShopAll/ShopAllProductImage3.png";
import ShopAllProductImage4 from "./assets/ShopAll/ShopAllProductImage4.png";
import ShopAllProductImage5 from "./assets/ShopAll/ShopAllProductImage5.png";
import ShopAllProductImage6 from "./assets/ShopAll/ShopAllProductImage6.png";

export type DropdownType = {
	id: number;
	heading: string;
	subheading: string[];
};

export const collectionContent: DropdownType[] = [
	{
		id: 1,
		heading: "Category",
		subheading: [
			"Shop all",
			"Top & Blouses",
			"Pants",
			"Dresses & Jumpsuits",
			"Outwear & Jackets",
			"Pullovers",
			"Tees",
			"Shorts & Skirts",
		],
	},

	{
		id: 2,
		heading: "Featured",
		subheading: ["New in", "Modiweek", "Plus Size", "Best Seller"],
	},

	{
		id: 3,
		heading: "More",
		subheading: ["Bundles", "Occasion Wear", "Matching Set", "Suiting"],
	},
];

export const newInContent: DropdownType[] = [
	{
		id: 1,
		heading: "Category",
		subheading: [
			"Shop all",
			"Tops & Blouses",
			"Tees",
			"Pants",
			"Jackets & Outwears",
			"Pullovers",
			"Dresses & Jumpsuits",
			"Shorts & Skirts",
		],
	},

	{
		id: 2,
		heading: "Trending",
		subheading: ["Plus Size", "Fall Collection", "Modiweek"],
	},
];

export const plusSizeContent: DropdownType[] = [
	{
		id: 1,
		heading: "Category",
		subheading: [
			"Shop all",
			"Tops & Blouses",
			"Tees",
			"Pants",
			"Jackets & Outwears",
			"Pullovers",
			"Dresses & Jumpsuits",
			"Shorts & Skirts",
		],
	},
];

export const sustainContent: DropdownType[] = [
	{
		id: 1,
		heading: "Sustainability",
		subheading: [
			"Mission",
			"Processing",
			"Materials",
			"Packaging",
			"Product Care",
			"Our Suppliers",
		],
	},
];

export const filterList = [
	{
		id: uuidv4(),
		title: "Sort By",
		list: [
			{ id: uuidv4(), label: "Featured" },
			{ id: uuidv4(), label: "Best Seller" },
			{ id: uuidv4(), label: "Price: Low To High" },
			{ id: uuidv4(), label: "Price: High To Low" },
		],
	},
	{
		id: uuidv4(),
		title: "Size",
		list: [
			{ id: uuidv4(), label: "XS / US (0-4)" },
			{ id: uuidv4(), label: "S / US (4-6)" },
			{ id: uuidv4(), label: "M / US (6-10)" },
			{ id: uuidv4(), label: "L / US (10-14)" },
			{ id: uuidv4(), label: "XL / US (12-16)" },
		],
	},
	{
		id: uuidv4(),
		title: "Color",
		list: [
			{ id: uuidv4(), label: "Black", colorCode: "#000000" },
			{ id: uuidv4(), label: "Red", colorCode: "#FF0000" },
			{ id: uuidv4(), label: "Green", colorCode: "#00FF00" },
			{ id: uuidv4(), label: "Yellow", colorCode: "#FFFF00" },
			{ id: uuidv4(), label: "Dark Blue", colorCode: "#00008B" },
			{ id: uuidv4(), label: "Purple", colorCode: "#800080" },
			{ id: uuidv4(), label: "Pink", colorCode: "#FFC0CB" },
			{ id: uuidv4(), label: "Light Blue", colorCode: "#ADD8E6" },
			{ id: uuidv4(), label: "Orange", colorCode: "#FFA500" },
			{ id: uuidv4(), label: "White", colorCode: "#FFFFFF" },
		],
	},
	{
		id: uuidv4(),
		title: "Collection",
		list: [
			{ id: uuidv4(), label: "In Stock" },
			{ id: uuidv4(), label: "Out Of Stock" },
		],
	},
	{
		id: uuidv4(),
		title: "Fabric",
		list: [
			{ id: uuidv4(), label: "Cotton" },
			{ id: uuidv4(), label: "Linen" },
			{ id: uuidv4(), label: "Wool" },
			{ id: uuidv4(), label: "Silk" },
			{ id: uuidv4(), label: "Cashmere" },
		],
	},
];

export type Product = {
	id: number;
	image: string;
	name: string;
	description: string;
	price: number;
	colors?: string[];
	search?: boolean;
	tag?: string;
};

export const productsShopAll: Product[] = [
	{
		id: 1,
		image: ShopAllProductImage1,
		name: "Chill Wrap top",
		description: "Turn it Up Top",
		price: 160,
		colors: ["bg-[#909225]"],
	},
	{
		id: 2,
		image: ShopAllProductImage2,
		name: "Essential T-shirt",
		description: "Turn it Up T-Shirt",
		price: 95,
		colors: ["bg-[#0C0C0C]", "bg-[#7DC3EB]", "bg-[#748C70]"],
		tag: "New",
	},
	{
		id: 3,
		image: ShopAllProductImage3,
		name: "Shirt Dress",
		description: "Turn It Up Dress",
		price: 245,
		colors: ["bg-[#0C0C0C]", "bg-[#7DC3EB]", "bg-[#748C70]"],
	},
	{
		id: 4,
		image: ShopAllProductImage4,
		name: "Rule Zip Jacket",
		description: "Turn It Up Jacket",
		price: 199,
		colors: ["bg-[#909225]", "bg-[#CA6D29]"],
	},
	{
		id: 5,
		image: ShopAllProductImage5,
		name: "New Age Linen",
		description: "Turn It Up Pants",
		price: 180,
		colors: ["bg-[#0C0C0C]", "bg-[#19418E]", "bg-[#748C70]"],
	},
	{
		id: 6,
		image: ShopAllProductImage6,
		name: "Boss Pullover",
		description: "Turn It Up Pullover",
		price: 280,
		colors: ["bg-[#0C0C0C]", "bg-[#748C70]"],
		tag: "New",
	},
];
