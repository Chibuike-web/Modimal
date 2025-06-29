import type { DropdownType } from "./types";
import { v4 as uuidv4 } from "uuid";
import Bag1 from "../../assets/Bags/Bag1.png";
import Bag2 from "../../assets/Bags/Bag2.png";
import Bag3 from "../../assets/Bags/Bag3.png";

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
