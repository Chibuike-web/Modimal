import { useState, useRef } from "react";

export function useDropdownHover() {
	const [hover, setHover] = useState("");
	const timeoutRef = useRef<number | null>(null);

	const handleMouseEnter = (item: string) => {
		if (timeoutRef.current) clearTimeout(timeoutRef.current);
		setHover(item);
	};

	const handleMouseLeave = () => {
		timeoutRef.current = setTimeout(() => {
			setHover("");
		}, 150);
	};

	return { hover, handleMouseEnter, handleMouseLeave };
}

export const useClicked = () => {
	const [isClicked, setIsClicked] = useState(false);
	return {
		isClicked,
		setIsClicked,
	};
};

export const useForm = () => {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { id, value } = e.target;
		if (id === "firstName") {
			setFirstName(value);
		} else if (id === "lastName") {
			setLastName(value);
		} else if (id === "email") {
			setEmail(value);
		} else if (id === "password") {
			setPassword(value);
		}
	};

	return {
		firstName,
		lastName,
		email,
		password,
		handleChange,
	};
};
