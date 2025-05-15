export type DropdownType = {
	id: number;
	heading: string;
	subheading: string[];
};

export type DropdownProps = {
	handleMouseEnter: (value: string) => void;
	handleMouseLeave: () => void;
};
