import styles from "./Hero.module.css";

export default function Hero() {
	return (
		<section className={styles.section}>
			<div className="w-full max-w-[76.5rem] mx-auto">
				<div className=" pt-[18.75rem]  max-xl:px-6">
					<h1 className="font-primary italic text-[34px] w-full max-w-[295px] leading-[1.8]">
						Elegance in simplicity, Earth’s harmony
					</h1>
					<button className="bg-white px-[67px] py-[0.5rem] mt-[27px]">New In</button>
				</div>
			</div>
		</section>
	);
}
