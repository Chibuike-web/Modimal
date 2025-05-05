import GridImage1 from "../assets/Grid/GridImage1.png";
import GridImage2 from "../assets/Grid/GridImage2.png";
import GridImage3 from "../assets/Grid/GridImage3.png";
import GridImage4 from "../assets/Grid/GridImage4.png";
import GridImage5 from "../assets/Grid/GridImage5.png";

export default function Grid() {
	return (
		<section className="mx-auto max-w-[76.5rem] justify-items-center my-12">
			<div>
				<h1 className="font-semibold text-[2rem] max-md:text-[20px] mb-4 max-lg:px-6">
					Follow us @modimal
				</h1>
				<div className="grid grid-cols-4 grid-rows-2 max-md:grid-cols-2">
					<img src={GridImage1} alt="" className="w-full col-span-2 row-span-2" />
					<img src={GridImage2} alt="" className="w-full h-full object-cover" />
					<img src={GridImage3} alt="" className="w-full h-full object-cover" />
					<img src={GridImage4} alt="" className="w-full h-full object-cover" />
					<img src={GridImage5} alt="" className="w-full h-full object-cover" />
				</div>
			</div>
		</section>
	);
}
