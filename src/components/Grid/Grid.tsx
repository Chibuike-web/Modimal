import GridImage1 from "../../assets/Grid/GridImage1.png";
import GridImage2 from "../../assets/Grid/GridImage2.png";
import GridImage3 from "../../assets/Grid/GridImage3.png";
import GridImage4 from "../../assets/Grid/GridImage4.png";
import GridImage5 from "../../assets/Grid/GridImage5.png";

export default function Grid() {
	return (
		<section className="mx-auto max-w-[76.5rem] mt-[5.5rem] mb-12">
			<div className="grid grid-cols-4 grid-rows-2 max-md:grid-cols-2">
				<img src={GridImage1} alt="" className="w-full col-span-2 row-span-2" />
				<img src={GridImage2} alt="" className="w-full h-full object-cover" />
				<img src={GridImage3} alt="" className="w-full h-full object-cover" />
				<img src={GridImage4} alt="" className="w-full h-full object-cover" />
				<img src={GridImage5} alt="" className="w-full h-full object-cover" />
			</div>
		</section>
	);
}
