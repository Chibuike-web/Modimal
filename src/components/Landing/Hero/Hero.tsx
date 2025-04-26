import styles from "./Hero.module.css";

export default function Hero() {
	return (
		<section className={styles.section}>
			<div className="w-full max-w-[76.5rem] mx-auto">
				<div className=" pt-[18.75rem] max-xl:px-6 max-md:pt-[24rem]">
					<h1 className="font-primary italic text-[34px] max-md:text-[20px] w-full max-w-[295px] max-md:max-w-[180px] leading-[1.8]">
						Elegance in simplicity, Earth’s harmony
					</h1>
					<button className="bg-white px-[67px] py-[0.5rem] mt-[27px] w-fit max-md:px-6">
						New In
					</button>
				</div>
			</div>
		</section>
	);
}
