import { v4 as uuidv4 } from "uuid";
import ProductImage1 from "./assets/Search/ProductImage1.png";
import ProductImage2 from "./assets/Search/ProductImage2.png";
import ProductImage3 from "./assets/Search/ProductImage3.png";
import ProductImage4 from "./assets/Search/ProductImage4.png";
import ProductImage5 from "./assets/Search/ProductImage5.png";
import ProductImage6 from "./assets/Search/ProductImage6.png";
import ShopAllProductImage1 from "./assets/ShopAll/ShopAllProductImage1.png";
import ShopAllProductImage2 from "./assets/ShopAll/ShopAllProductImage2.png";
import ShopAllProductImage3 from "./assets/ShopAll/ShopAllProductImage3.png";
import ShopAllProductImage4 from "./assets/ShopAll/ShopAllProductImage4.png";
import ShopAllProductImage5 from "./assets/ShopAll/ShopAllProductImage5.png";
import ShopAllProductImage6 from "./assets/ShopAll/ShopAllProductImage6.png";
import BestSellers1 from "./assets/BestSellers/ProductImage1.png";
import BestSellers2 from "./assets/BestSellers/ProductImage2.png";
import BestSellers3 from "./assets/BestSellers/ProductImage3.png";
import { Product } from "./types";

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

export const productsSearchResult: Product[] = [
	{
		id: uuidv4(),
		image: ProductImage1,
		name: "Elastic Waist",
		description: "Turn it Up Pants",
		price: 110,
		colors: [
			{ id: uuidv4(), label: "Sky Blue", className: "bg-[#7DC3EB]" },
			{ id: uuidv4(), label: "Sage", className: "bg-[#748C70]" },
		],
	},
	{
		id: uuidv4(),
		image: ProductImage2,
		name: "Tailored Stretch",
		description: "Make A Splash",
		price: 150,
		colors: [{ id: uuidv4(), label: "Black", className: "bg-black" }],
	},
	{
		id: uuidv4(),
		image: ProductImage3,
		name: "Tailored Stretch",
		description: "Turn It Up Pants",
		price: 140,
		colors: [
			{ id: uuidv4(), label: "Black", className: "bg-[#0C0C0C]" },
			{ id: uuidv4(), label: "Crimson", className: "bg-[#CA2929]" },
			{ id: uuidv4(), label: "Sage", className: "bg-[#748C70]" },
		],
	},
	{
		id: uuidv4(),
		image: ProductImage4,
		name: "High Tillie",
		description: "Turn It Up Pants",
		price: 110,
		colors: [
			{ id: uuidv4(), label: "Black", className: "bg-[#0C0C0C]" },
			{ id: uuidv4(), label: "Olive", className: "bg-[#909225]" },
			{ id: uuidv4(), label: "Sage", className: "bg-[#748C70]" },
		],
	},
	{
		id: uuidv4(),
		image: ProductImage5,
		name: "Casual wild leg",
		description: "Turn It Up Pants",
		price: 130,
		colors: [
			{ id: uuidv4(), label: "Black", className: "bg-[#0C0C0C]" },
			{ id: uuidv4(), label: "Sage", className: "bg-[#748C70]" },
		],
	},
	{
		id: uuidv4(),
		image: ProductImage6,
		name: "Linen Wide Leg",
		description: "Turn It Up Pants",
		price: 180,
		colors: [
			{ id: uuidv4(), label: "Black", className: "bg-[#0C0C0C]" },
			{ id: uuidv4(), label: "Lavender", className: "bg-[#D0A5EA]" },
		],
	},
];

export const allProducts = [
	{
		id: uuidv4(),
		image: BestSellers1,
		name: "Tailored Stretch",
		description: "Turn it Up Pants",
		price: 180,
		colors: [
			{ id: uuidv4(), label: "Dark Grey", className: "bg-[#0C0C0C]" },
			{ id: uuidv4(), label: "Sky Blue", className: "bg-[#7DC3EB]" },
			{ id: uuidv4(), label: "Sage", className: "bg-[#748C70]" },
		],
		categories: ["bestSellers"],
	},
	{
		id: uuidv4(),
		image: BestSellers2,
		name: "Technical Silk",
		description: "Make A Splash",
		price: 120,
		colors: [
			{ id: uuidv4(), label: "Olive", className: "bg-[#909225]" },
			{ id: uuidv4(), label: "Navy", className: "bg-[#19418E]" },
			{ id: uuidv4(), label: "Olive", className: "bg-[#909225]" },
		],
		categories: ["bestSellers"],
	},
	{
		id: uuidv4(),
		image: BestSellers3,
		name: "Cool Weave",
		description: "Anywhere Dress",
		price: 210,
		colors: [
			{ id: uuidv4(), label: "Lavender", className: "bg-[#D0A5EA]" },
			{ id: uuidv4(), label: "Black", className: "bg-[#0C0C0C]" },
			{ id: uuidv4(), label: "Sage", className: "bg-[#748C70]" },
		],
		categories: ["bestSellers"],
	},
	{
		id: uuidv4(),
		image: ShopAllProductImage1,
		name: "Chill Wrap top",
		description: "Turn it Up Top",
		price: 160,
		colors: [{ id: uuidv4(), label: "Olive", className: "bg-[#909225]" }],
		categories: ["shopAll"],
	},
	{
		id: uuidv4(),
		image: ShopAllProductImage2,
		name: "Essential T-shirt",
		description: "Turn it Up T-Shirt",
		price: 95,
		colors: [
			{ id: uuidv4(), label: "Black", className: "bg-[#0C0C0C]" },
			{ id: uuidv4(), label: "Sky Blue", className: "bg-[#7DC3EB]" },
			{ id: uuidv4(), label: "Sage", className: "bg-[#748C70]" },
		],
		tag: "New",
		categories: ["shopAll"],
	},
	{
		id: uuidv4(),
		image: ShopAllProductImage3,
		name: "Shirt Dress",
		description: "Turn It Up Dress",
		price: 245,
		colors: [
			{ id: uuidv4(), label: "Black", className: "bg-[#0C0C0C]" },
			{ id: uuidv4(), label: "Sky Blue", className: "bg-[#7DC3EB]" },
			{ id: uuidv4(), label: "Sage", className: "bg-[#748C70]" },
		],
		categories: ["shopAll"],
	},
	{
		id: uuidv4(),
		image: ShopAllProductImage4,
		name: "Rule Zip Jacket",
		description: "Turn It Up Jacket",
		price: 199,
		colors: [
			{ id: uuidv4(), label: "Olive", className: "bg-[#909225]" },
			{ id: uuidv4(), label: "Burnt Orange", className: "bg-[#CA6D29]" },
		],
		categories: ["shopAll"],
	},
	{
		id: uuidv4(),
		image: ShopAllProductImage5,
		name: "New Age Linen",
		description: "Turn It Up Pants",
		price: 180,
		colors: [
			{ id: uuidv4(), label: "Black", className: "bg-[#0C0C0C]" },
			{ id: uuidv4(), label: "Navy", className: "bg-[#19418E]" },
			{ id: uuidv4(), label: "Sage", className: "bg-[#748C70]" },
		],
		categories: ["shopAll"],
	},
	{
		id: uuidv4(),
		image: ShopAllProductImage6,
		name: "Boss Pullover",
		description: "Turn It Up Pullover",
		price: 280,
		colors: [
			{ id: uuidv4(), label: "Black", className: "bg-[#0C0C0C]" },
			{ id: uuidv4(), label: "Sage", className: "bg-[#748C70]" },
		],
		tag: "New",
		categories: ["shopAll"],
	},
];
