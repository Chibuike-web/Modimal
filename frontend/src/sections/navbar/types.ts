export type DropdownType = {
	id: string;
	heading: string;
	subheading: string[];
};

export type DropdownProps = {
	handleMouseEnter: (value: string) => void;
	handleMouseLeave: () => void;
};

export type CartItemsTypes = {
	id: string;
	image: string;
	name: string;
	size: string;
	price: number;
	color: string;
	quantity: number;
};
