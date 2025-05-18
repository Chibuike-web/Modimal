export type DropdownType = {
	id: number;
	heading: string;
	subheading: string[];
};

export type DropdownProps = {
	handleMouseEnter: (value: string) => void;
	handleMouseLeave: () => void;
};

export type BagItems = {
	id: string;
	image: string;
	name: string;
	size: string;
	price: number;
	color: string;
};
