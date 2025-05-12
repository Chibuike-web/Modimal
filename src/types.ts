export type Product = {
	id: string;
	image: string;
	name: string;
	description: string;
	price: number;
	colors?: string[];
	search?: boolean;
	tag?: string;
};
