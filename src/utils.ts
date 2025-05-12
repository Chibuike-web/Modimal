import { v4 as uuidv4 } from "uuid";
import ProductImage1 from "./assets/Search/ProductImage1.png";
import ProductImage2 from "./assets/Search/ProductImage2.png";
import ProductImage3 from "./assets/Search/ProductImage3.png";
import ProductImage4 from "./assets/Search/ProductImage4.png";
import ProductImage5 from "./assets/Search/ProductImage5.png";
import ProductImage6 from "./assets/Search/ProductImage6.png";

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
	id: string;
	image: string;
	name: string;
	description: string;
	price: number;
	colors?: string[];
	search?: boolean;
	tag?: string;
};

export const productsSearchResult: Product[] = [
	{
		id: uuidv4(),
		image: ProductImage1,
		name: "Elastic Waist",
		description: "Turn it Up Pants",
		price: 110,
		colors: ["bg-[#7DC3EB]", "bg-[#748C70]"],
	},
	{
		id: uuidv4(),
		image: ProductImage2,
		name: "Tailored Stretch",
		description: "Make A Splash",
		price: 150,
		colors: ["bg-black"],
	},
	{
		id: uuidv4(),
		image: ProductImage3,
		name: "Tailored Stretch",
		description: "Turn It Up Pants",
		price: 140,
		colors: ["bg-[#0C0C0C]", "bg-[#CA2929]", "bg-[#748C70]"],
	},
	{
		id: uuidv4(),
		image: ProductImage4,
		name: "High Tillie",
		description: "Turn It Up Pants",
		price: 110,
		colors: ["bg-[#0C0C0C]", "bg-[#909225]", "bg-[#748C70]"],
	},
	{
		id: uuidv4(),
		image: ProductImage5,
		name: "Casual wild leg",
		description: "Turn It Up Pants",
		price: 130,
		colors: ["bg-[#0C0C0C]", "bg-[#748C70]"],
	},
	{
		id: uuidv4(),
		image: ProductImage6,
		name: "Linen Wide Leg",
		description: "Turn It Up Pants",
		price: 180,
		colors: ["bg-[#0C0C0C]", "bg-[#D0A5EA]"],
	},
];
