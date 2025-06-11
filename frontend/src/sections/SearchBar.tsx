import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { useNavigate, useSearchParams } from "react-router";
import { useSearch } from "../store/useSearch";

export const SearchBar = () => {
	const inputRef = useRef<HTMLInputElement>(null);
	const [searchTerm, setSearchTerm] = useState("");
	const [searchParams, setSearchParams] = useSearchParams();
	const { setIsSearch } = useSearch();
	const navigate = useNavigate();

	interface SearchEvent extends React.ChangeEvent<HTMLInputElement> {}

	const handleSearch = (e: SearchEvent) => {
		const value = e.target.value;
		setSearchTerm(value);
	};

	const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === "Enter") {
			const trimmed = searchTerm.trim().toLowerCase();
			if (trimmed) {
				setSearchParams({ q: trimmed });
				navigate(`/search/results/?q=${trimmed}`);
				setIsSearch();
			}
		}
	};

	useEffect(() => {
		inputRef.current?.focus();
	}, []);

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0, y: -20 }}
			transition={{ duration: 0.2 }}
			className="fixed top-[8rem] max-lg:top-[5rem] justify-items-center bg-black/40 inset-0 backdrop-blur-[0.5rem] w-full"
			onClick={(e) => {
				setIsSearch();
			}}
		>
			<motion.div
				initial={{ opacity: 0, height: 0 }}
				animate={{ opacity: 1, height: "auto" }}
				exit={{ opacity: 0, height: 0 }}
				transition={{ duration: 0.2 }}
				className="justify-items-center content-center w-full pt-8 pb-16 max-lg:px-6 bg-white overflow-hidden"
				onClick={(e) => e.stopPropagation()}
			>
				<input
					type="text"
					ref={inputRef}
					value={searchTerm}
					name="search-input"
					onChange={handleSearch}
					onKeyDown={handleKeyDown}
					placeholder="Search"
					className="block w-full max-w-[76.5rem] border-b"
				/>{" "}
			</motion.div>
		</motion.div>
	);
};
