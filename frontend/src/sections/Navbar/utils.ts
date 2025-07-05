import type { DropdownType } from "./types";
import { v4 as uuidv4 } from "uuid";

export const collectionContent: DropdownType[] = [
	{
		id: uuidv4(),
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
		id: uuidv4(),
		heading: "Featured",
		subheading: ["New in", "Modiweek", "Plus Size", "Best Seller"],
	},

	{
		id: uuidv4(),
		heading: "More",
		subheading: ["Bundles", "Occasion Wear", "Matching Set", "Suiting"],
	},
];

export const newInContent: DropdownType[] = [
	{
		id: uuidv4(),
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
		id: uuidv4(),
		heading: "Trending",
		subheading: ["Plus Size", "Fall Collection", "Modiweek"],
	},
];

export const plusSizeContent: DropdownType[] = [
	{
		id: uuidv4(),
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
		id: uuidv4(),
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
