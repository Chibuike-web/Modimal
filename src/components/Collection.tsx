import Collection1 from "../assets/Collection/Collection1.png";
import Collection2 from "../assets/Collection/Collection2.png";
import Collection3 from "../assets/Collection/Collection3.png";
import Collection4 from "../assets/Collection/Collection4.png";

export default function Collection() {
	return (
		<section className="mx-auto max-w-[76.5rem] mt-[5.5rem]">
			<h1 className="font-semibold text-[2rem] mb-6">Collection</h1>
			<div className="grid grid-cols-2 gap-4">
				<div className="flex flex-col gap-16">
					<figure className="relative">
						<img
							src={Collection1}
							alt="Spring Collection - Model in floral dress"
							className="w-full"
						/>
						<button className="bg-white px-[67px] py-[0.5rem] mt-[27px] absolute bottom-[1rem] right-[1rem]">
							Blouses
						</button>
					</figure>

					<figure className="relative">
						<img
							src={Collection3}
							alt="Summer Collection - Woman in light outfit"
							className="w-full"
						/>
						<button className="bg-white px-[67px] py-[0.5rem] mt-[27px] absolute bottom-[1rem] right-[1rem]">
							Dresses
						</button>
					</figure>
				</div>

				<div className="flex flex-col gap-[9rem]">
					<figure className="relative">
						<img
							src={Collection2}
							alt="Autumn Collection - Model in cozy sweater"
							className="w-full"
						/>
						<button className="bg-white px-[67px] py-[0.5rem] mt-[27px] absolute bottom-[1rem] left-[1rem]">
							Pants
						</button>
					</figure>
					<figure className="relative">
						<img
							src={Collection4}
							alt="Winter Collection - Woman in warm coat"
							className=" leading-0 w-full"
						/>
						<button className="bg-white px-[67px] py-[0.5rem] mt-[27px] absolute bottom-[1rem] right-[1rem]">
							Outwear
						</button>
					</figure>
				</div>
			</div>
		</section>
	);
}
