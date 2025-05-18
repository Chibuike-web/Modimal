import { Product } from "./types";
import { v4 as uuidv4 } from "uuid";
import ProductImage1 from "../assets/BestSellers/ProductImage1.png";
import ProductImage2 from "../assets/BestSellers/ProductImage2.png";
import ProductImage3 from "../assets/BestSellers/ProductImage3.png";
import Modiweek1 from "../assets/Modiweek/Modiweek1.png";
import Modiweek2 from "../assets/Modiweek/Modiweek2.png";
import Modiweek3 from "../assets/Modiweek/Modiweek3.png";
import Modiweek4 from "../assets/Modiweek/Modiweek4.png";
import Modiweek5 from "../assets/Modiweek/Modiweek5.png";
import Bag1 from "../assets/Bags/Bag1.png";
import Bag2 from "../assets/Bags/Bag2.png";
import Bag3 from "../assets/Bags/Bag3.png";
import { CardProps } from "./types";

export const products: Product[] = [
	{
		id: uuidv4(),
		image: ProductImage1,
		name: "Tailored Stretch",
		description: "Turn it Up Pants",
		price: 180,
		colors: [
			{ id: uuidv4(), label: "Dark Grey", className: "bg-[#0C0C0C]" },
			{ id: uuidv4(), label: "Sky Blue", className: "bg-[#7DC3EB]" },
			{ id: uuidv4(), label: "Sage", className: "bg-[#748C70]" },
		],
	},
	{
		id: uuidv4(),
		image: ProductImage2,
		name: "Technical Silk",
		description: "Make A Splash",
		price: 120,
		colors: [
			{ id: uuidv4(), label: "Olive", className: "bg-[#909225]" },
			{ id: uuidv4(), label: "Navy", className: "bg-[#19418E]" },
			{ id: uuidv4(), label: "Olive", className: "bg-[#909225]" },
		],
	},
	{
		id: uuidv4(),
		image: ProductImage3,
		name: "Cool Weave",
		description: "Anywhere Dress",
		price: 210,
		colors: [
			{ id: uuidv4(), label: "Lavender", className: "bg-[#D0A5EA]" },
			{ id: uuidv4(), label: "Black", className: "bg-[#0C0C0C]" },
			{ id: uuidv4(), label: "Sage", className: "bg-[#748C70]" },
		],
	},
];

export const cardData: CardProps[] = [
	{ text: "Sunday", image: Modiweek1 },
	{ text: "Monday", image: Modiweek2 },
	{ text: "Tuesday", image: Modiweek3 },
	{ text: "Wednesday", image: Modiweek4 },
	{ text: "Thursday", image: Modiweek5 },
];
