import { motion } from "motion/react";
import { useEffect, useRef } from "react";

export const SearchBar = () => {
	const inputRef = useRef<HTMLInputElement>(null);

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
		>
			<motion.div
				initial={{ opacity: 0, height: 0 }}
				animate={{ opacity: 1, height: "auto" }}
				exit={{ opacity: 0, height: 0 }}
				transition={{ duration: 0.2 }}
				className="justify-items-center content-center w-full pt-8 pb-16 max-lg:px-6 bg-white overflow-hidden"
			>
				<input
					type="text"
					ref={inputRef}
					name=""
					id=""
					placeholder="Search"
					className="block w-full max-w-[76.5rem] border-b"
				/>{" "}
			</motion.div>
		</motion.div>
	);
};
