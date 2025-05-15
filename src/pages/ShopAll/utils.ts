import ShopAllProductImage1 from "../../assets/ShopAll/ShopAllProductImage1.png";
import ShopAllProductImage2 from "../../assets/ShopAll/ShopAllProductImage2.png";
import ShopAllProductImage3 from "../../assets/ShopAll/ShopAllProductImage3.png";
import ShopAllProductImage4 from "../../assets/ShopAll/ShopAllProductImage4.png";
import ShopAllProductImage5 from "../../assets/ShopAll/ShopAllProductImage5.png";
import ShopAllProductImage6 from "../../assets/ShopAll/ShopAllProductImage6.png";
import { v4 as uuidv4 } from "uuid";
import { Product } from "../../types";

export const productsShopAll: Product[] = [
	{
		id: uuidv4(),
		image: ShopAllProductImage1,
		name: "Chill Wrap top",
		description: "Turn it Up Top",
		price: 160,
		colors: [{ id: uuidv4(), label: "Olive", className: "bg-[#909225]" }],
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
	},
];
