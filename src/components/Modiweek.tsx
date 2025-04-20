import Modiweek1 from "../assets/Modiweek/Modiweek1.png";
import Modiweek2 from "../assets/Modiweek/Modiweek2.png";
import Modiweek3 from "../assets/Modiweek/Modiweek3.png";
import Modiweek4 from "../assets/Modiweek/Modiweek4.png";
import Modiweek5 from "../assets/Modiweek/Modiweek5.png";
import { LikeButton } from "./UiElements";

export default function Modiweek() {
	return (
		<section className="mx-auto max-w-[76.5rem] mt-[5.5rem]">
			<h1 className="font-semibold text-[2rem]">Modiweek</h1>
			<div className="flex gap-6 mt-6 pr-10 overflow-x-scroll">
				<Card image={Modiweek1} text="Sunday" />
				<Card image={Modiweek2} text="Monday" />
				<Card image={Modiweek3} text="Tuesday" />
				<Card image={Modiweek4} text="Wednesday" />
				<Card image={Modiweek5} text="Thursday" />
			</div>
		</section>
	);
}

const Card = ({ image, text }: { image: string; text: string }) => {
	return (
		<div>
			<figure className="relative w-full min-w-[288px]">
				<img src={image} alt="" />
				<LikeButton />
			</figure>
			<p className="font-bold pt-[38px]">{text}</p>
		</div>
	);
};
