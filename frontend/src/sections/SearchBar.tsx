import { motion } from "motion/react";
import { useEffect, useRef } from "react";
import { useNavigate, useSearchParams } from "react-router";
import { useSearch } from "../store/useSearch";

export const SearchBar = () => {
	const inputRef = useRef<HTMLInputElement>(null);
	const [, setSearchParams] = useSearchParams();
	const { setIsSearch } = useSearch();
	const navigate = useNavigate();

	const handleSubmit = (formData: FormData) => {
		const query = formData.get("search-input")?.toString().trim().toLowerCase();
		if (query) {
			setSearchParams({ q: query });
			navigate(`/search/results/?q=${query}`);
			setIsSearch();
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
			onClick={() => setIsSearch()}
		>
			<motion.div
				initial={{ opacity: 0, height: 0 }}
				animate={{ opacity: 1, height: "auto" }}
				exit={{ opacity: 0, height: 0 }}
				transition={{ duration: 0.2 }}
				className="justify-items-center content-center w-full pt-8 pb-16 max-lg:px-6 bg-white overflow-hidden"
				onClick={(e) => e.stopPropagation()}
			>
				<form
					onSubmit={(e) => {
						e.preventDefault();
						handleSubmit(new FormData(e.currentTarget));
					}}
					className="w-full  max-w-[76.5rem]"
				>
					<input
						type="text"
						ref={inputRef}
						name="search-input"
						placeholder="Search"
						className="block w-full border-b"
					/>
				</form>
			</motion.div>
		</motion.div>
	);
};
