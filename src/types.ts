export type Product = {
	id: string;
	image: string;
	name: string;
	description: string;
	price: number;
	colors?: Color[];
	search?: boolean;
	tag?: string;
};

export type Color = {
	id: string;
	label: string;
	className: string;
};
