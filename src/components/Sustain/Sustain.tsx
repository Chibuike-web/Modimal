import styles from "./Sustain.module.css";

export default function Sustain() {
	return (
		<section className={styles.section}>
			<div className="w-full relative max-w-[76.5rem] h-full mx-auto ">
				<div className="absolute right-0 bottom-[41px] flex flex-col items-end w-full max-xl:px-6">
					<h1 className=" text-[20px] w-full max-w-[495px] text-right leading-[1.8]">
						Stylish sustainability in clothing promotes eco-friendly choices for a greater future
					</h1>
					<button className="bg-white px-[67px] py-[0.5rem] mt-[27px]">Sustainability</button>
				</div>
			</div>
		</section>
	);
}
