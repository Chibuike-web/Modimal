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
			"Blouses & Top",
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
