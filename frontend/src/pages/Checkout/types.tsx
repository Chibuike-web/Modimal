export type ProductInfoTypes = {
	id: string;
	image: string;
	name: string;
	size: string;
	color: string;
	quantity: number;
};
export type ProductPriceDetailsTypes = {
	id: string;
	price: number;
	quantity: number;
};

export type SummaryItem = {
	label: string;
	value: number | string;
};

export type OrderSummaryProps = {
	items: SummaryItem[];
	total: number;
};
