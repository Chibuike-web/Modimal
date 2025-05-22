import styles from "./Hero.module.css";
import { motion } from "motion/react";

const fadeIn = {
	initial: { opacity: 0, x: -100 },
	animate: (i: number) => ({
		opacity: 1,
		x: 0,
		transition: {
			delay: i * 0.5,
			duration: 1,
			ease: "easeOut",
		},
	}),
};

export default function Hero() {
	return (
		<section className={styles.section}>
			<div className="w-full max-w-[76.5rem] mx-auto">
				<div className=" pt-[18.75rem] max-xl:px-6 max-md:pt-[24rem]">
					<motion.h1
						variants={fadeIn}
						initial="initial"
						whileInView="animate"
						viewport={{ once: true, amount: 0.3 }}
						className="font-primary italic text-[34px] max-md:text-[20px] w-full max-w-[295px] max-md:max-w-[180px] leading-[1.8]"
					>
						Elegance in simplicity, Earth’s harmony
					</motion.h1>
					<motion.button
						variants={fadeIn}
						initial="initial"
						whileInView="animate"
						custom={1}
						viewport={{ once: true, amount: 0.3 }}
						className="bg-white px-[67px] py-[0.5rem] mt-[27px] w-fit max-md:px-6"
					>
						New In
					</motion.button>
				</div>
			</div>
		</section>
	);
}
