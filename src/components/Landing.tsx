import BestSellers from "./BestSellers";
import Collection from "./Collection";
import Hero from "./Hero/Hero";
import Modiweek from "./Modiweek";
import Navbar from "./Navbar/Navbar";

export default function Landing() {
	return (
		<>
			<Navbar />
			<Hero />
			<BestSellers />
			<Collection />
			<Modiweek />
		</>
	);
}
