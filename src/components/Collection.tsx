import Collection1 from "../assets/Collections/Collection1.png";
import Collection2 from "../assets/Collections/Collection2.png";
import Collection3 from "../assets/Collections/Collection3.png";
import Collection4 from "../assets/Collections/Collection4.png";

export default function Collection() {
	return (
		<section className="mx-auto max-w-[76.5rem] mt-[5.5rem]">
			<h1 className="font-semibold text-[2rem] mb-6">Collection</h1>
			<div className="grid grid-cols-2 gap-4">
				<figure className="flex flex-col gap-16">
					<img
						src={Collection1}
						alt="Spring Collection - Model in floral dress"
						className="w-full"
					/>

					<img
						src={Collection2}
						alt="Summer Collection - Woman in light outfit"
						className="w-full"
					/>
				</figure>

				<figure className="flex flex-col gap-[9rem]">
					<img
						src={Collection3}
						alt="Autumn Collection - Model in cozy sweater"
						className="w-full"
					/>

					<img
						src={Collection4}
						alt="Winter Collection - Woman in warm coat"
						className=" leading-0 w-full"
					/>
				</figure>
			</div>
		</section>
	);
}
