export interface Product {
	id: string;
	image: string;
	name: string;
	description: string;
	price: number;
	colors: { id: string; label: string; className: string }[];
	tag?: string;
	categories?: string[];
	keywords?: string[];
	sizes: { value: string; label: string }[];
	fabric?: string;
}

export type Color = {
	id: string;
	label: string;
	className: string;
};

export interface List {
	id: string;
	label: string;
	className?: string;
}

export interface SelectButtonProps extends List {
	title: string;
}

export interface FilterButtonProps {
	id: string;
	title: string;
	list?: List[];
}
