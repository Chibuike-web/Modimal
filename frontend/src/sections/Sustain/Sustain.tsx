import styles from "./Sustain.module.css";
import { motion, Variants } from "motion/react";

const fadeIn: Variants = {
	initial: { opacity: 0, x: 100 },
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

export default function Sustain() {
	return (
		<section className={styles.section}>
			<div className="w-full relative max-w-[76.5rem] h-full mx-auto ">
				<div className="absolute right-0 bottom-[41px] flex flex-col items-end w-full max-xl:px-6">
					<motion.h1
						variants={fadeIn}
						initial="initial"
						whileInView="animate"
						viewport={{ once: true, amount: 0.3 }}
						className=" text-[20px] w-full max-w-[495px] text-right leading-[1.8]"
					>
						Stylish sustainability in clothing promotes eco-friendly choices for a greater future
					</motion.h1>
					<motion.button
						variants={fadeIn}
						initial="initial"
						custom={1}
						whileInView="animate"
						viewport={{ once: true, amount: 0.3 }}
						className="bg-white px-[67px] py-[0.5rem] mt-[27px]"
					>
						Sustainability
					</motion.button>
				</div>
			</div>
		</section>
	);
}
