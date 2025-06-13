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

export const allProducts = [
	{
		id: uuidv4(),
		name: "Elastic Waist",
		description: "Turn it Up Pants",
		image: ProductImage1,
		price: 110,
		colors: [
			{ id: uuidv4(), label: "Sky Blue", className: "bg-[#7DC3EB]" },
			{ id: uuidv4(), label: "Sage", className: "bg-[#748C70]" },
		],
		keywords: [
			"elastic waist",
			"turn it up",
			"pants",
			"casual pants",
			"comfortable",
			"relaxed fit",
		],
	},
	{
		id: uuidv4(),
		name: "Tailored Stretch",
		description: "Make A Splash",
		image: ProductImage2,
		price: 150,
		colors: [{ id: uuidv4(), label: "Black", className: "bg-black" }],
		keywords: ["tailored pants", "stretch pants", "fitted pants", "black pants", "formal pants"],
	},
	{
		id: uuidv4(),
		name: "Tailored Stretch",
		description: "Turn It Up Pants",
		image: ProductImage3,
		price: 140,
		colors: [
			{ id: uuidv4(), label: "Black", className: "bg-[#0C0C0C]" },
			{ id: uuidv4(), label: "Crimson", className: "bg-[#CA2929]" },
			{ id: uuidv4(), label: "Sage", className: "bg-[#748C70]" },
		],
		keywords: [
			"tailored",
			"stretch pants",
			"fitted trousers",
			"turn it up",
			"black pants",
			"crimson pants",
		],
	},
	{
		id: uuidv4(),
		name: "High Tillie",
		description: "Turn It Up Pants",
		image: ProductImage4,
		price: 110,
		colors: [
			{ id: uuidv4(), label: "Black", className: "bg-[#0C0C0C]" },
			{ id: uuidv4(), label: "Olive", className: "bg-[#909225]" },
			{ id: uuidv4(), label: "Sage", className: "bg-[#748C70]" },
		],
		keywords: [
			"high waist",
			"tillie pants",
			"turn it up",
			"elevated fit",
			"olive pants",
			"black trousers",
		],
	},
	{
		id: uuidv4(),
		name: "Casual Wild Leg",
		description: "Turn It Up Pants",
		image: ProductImage5,
		price: 130,
		colors: [
			{ id: uuidv4(), label: "Black", className: "bg-[#0C0C0C]" },
			{ id: uuidv4(), label: "Sage", className: "bg-[#748C70]" },
		],
		keywords: ["casual pants", "wide leg", "wild leg", "turn it up", "black pants", "sage pants"],
	},
	{
		id: uuidv4(),
		name: "Linen Wide Leg",
		description: "Turn It Up Pants",
		image: ProductImage6,
		price: 180,
		colors: [
			{ id: uuidv4(), label: "Black", className: "bg-[#0C0C0C]" },
			{ id: uuidv4(), label: "Lavender", className: "bg-[#D0A5EA]" },
		],
		keywords: [
			"linen pants",
			"wide leg",
			"breathable",
			"lavender pants",
			"relaxed fit",
			"summer pants",
		],
	},
	{
		id: uuidv4(),
		name: "Tailored Stretch",
		description: "Turn it Up Pants",
		image: BestSellers1,
		price: 180,
		colors: [
			{ id: uuidv4(), label: "Dark Grey", className: "bg-[#0C0C0C]" },
			{ id: uuidv4(), label: "Sky Blue", className: "bg-[#7DC3EB]" },
			{ id: uuidv4(), label: "Sage", className: "bg-[#748C70]" },
		],
		categories: ["Best Seller"],
		keywords: [
			"tailored",
			"stretch",
			"turn it up",
			"best seller",
			"sky blue",
			"sage pants",
			"dark grey pants",
		],
	},
	{
		id: uuidv4(),
		name: "Technical Silk",
		description: "Make A Splash",
		image: BestSellers2,

		price: 120,
		colors: [
			{ id: uuidv4(), label: "Olive", className: "bg-[#909225]" },
			{ id: uuidv4(), label: "Navy", className: "bg-[#19418E]" },
		],
		categories: ["Best Seller"],
		keywords: ["technical silk", "silky pants", "olive", "navy", "smooth fabric", "splash"],
	},
	{
		id: uuidv4(),
		name: "Cool Weave",
		description: "Anywhere Dress",
		image: BestSellers3,
		price: 210,
		colors: [
			{ id: uuidv4(), label: "Lavender", className: "bg-[#D0A5EA]" },
			{ id: uuidv4(), label: "Black", className: "bg-[#0C0C0C]" },
			{ id: uuidv4(), label: "Sage", className: "bg-[#748C70]" },
		],
		tag: "",
		categories: ["Best Seller"],
		keywords: [
			"cool weave",
			"dress",
			"anywhere dress",
			"lavender dress",
			"sage",
			"breathable",
			"elegant dress",
		],
	},
	{
		id: uuidv4(),
		name: "Chill Wrap Top",
		description: "Turn it Up Top",
		image: ShopAllProductImage1,
		price: 160,
		colors: [{ id: uuidv4(), label: "Olive", className: "bg-[#909225]" }],
		tag: "New",
		categories: ["shopAll"],
		keywords: ["wrap top", "chill top", "turn it up", "olive", "casual top", "new arrival"],
	},
	{
		id: uuidv4(),
		name: "Essential T-shirt",
		description: "Turn it Up T-Shirt",
		image: ShopAllProductImage2,
		price: 95,

		colors: [
			{ id: uuidv4(), label: "Black", className: "bg-[#0C0C0C]" },
			{ id: uuidv4(), label: "Sky Blue", className: "bg-[#7DC3EB]" },
			{ id: uuidv4(), label: "Sage", className: "bg-[#748C70]" },
		],
		tag: "",
		categories: ["shopAll"],
		keywords: ["essential", "t-shirt", "turn it up", "black t-shirt", "sky blue", "casual wear"],
	},
	{
		id: uuidv4(),
		name: "Shirt Dress",
		description: "Turn It Up Dress",
		image: ShopAllProductImage3,
		price: 245,
		colors: [
			{ id: uuidv4(), label: "Black", className: "bg-[#0C0C0C]" },
			{ id: uuidv4(), label: "Sky Blue", className: "bg-[#7DC3EB]" },
			{ id: uuidv4(), label: "Sage", className: "bg-[#748C70]" },
		],
		tag: "New",
		categories: ["shopAll"],
		keywords: [
			"shirt dress",
			"turn it up",
			"new arrival",
			"sky blue dress",
			"elevated casual",
			"day dress",
		],
	},
	{
		id: uuidv4(),
		name: "Rule Zip Jacket",
		description: "Turn It Up Jacket",
		image: ShopAllProductImage4,
		price: 199,
		colors: [
			{ id: uuidv4(), label: "Olive", className: "bg-[#909225]" },
			{ id: uuidv4(), label: "Burnt Orange", className: "bg-[#CA6D29]" },
		],
		tag: "",
		categories: ["shopAll"],
		keywords: [
			"rule jacket",
			"zip jacket",
			"turn it up",
			"burnt orange",
			"olive jacket",
			"outerwear",
		],
	},
	{
		id: uuidv4(),
		name: "New Age Linen",
		description: "Turn It Up Pants",
		image: ShopAllProductImage5,
		price: 180,
		colors: [
			{ id: uuidv4(), label: "Black", className: "bg-[#0C0C0C]" },
			{ id: uuidv4(), label: "Navy", className: "bg-[#19418E]" },
			{ id: uuidv4(), label: "Sage", className: "bg-[#748C70]" },
		],
		tag: "",
		categories: ["shopAll"],
		keywords: [
			"new age",
			"linen pants",
			"black pants",
			"navy",
			"sage",
			"breathable",
			"modern trousers",
		],
	},
	{
		id: uuidv4(),
		name: "Boss Pullover",
		description: "Turn It Up Pullover",
		image: ShopAllProductImage6,
		price: 280,
		tag: "New",
		colors: [
			{ id: uuidv4(), label: "Black", className: "bg-[#0C0C0C]" },
			{ id: uuidv4(), label: "Sage", className: "bg-[#748C70]" },
		],
		categories: ["shopAll"],
		keywords: [
			"boss pullover",
			"turn it up",
			"new",
			"sage",
			"black pullover",
			"sweater",
			"comfortable",
		],
	},
];
