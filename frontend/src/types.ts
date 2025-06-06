export type Product = {
	id: string;
	image: string;
	name: string;
	description: string;
	price: number;
	colors?: Color[];
	search?: boolean;
	tag?: string;
	categories?: string[];
};

export type Color = {
	id: string;
	label: string;
	className: string;
};

export interface List {
	id: string;
	label: string;
	colorCode?: string;
}

export interface SelectButtonProps extends List {
	title: string;
}

export interface FilterButtonProps {
	id: string;
	title: string;
	list?: List[];
}
