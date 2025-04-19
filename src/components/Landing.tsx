import BestSellers from "./BestSellers";
import Collection from "./Collection";
import Grid from "./Grid/Grid";
import Hero from "./Hero/Hero";
import Modiweek from "./Modiweek";
import Navbar from "./Navbar/Navbar";
import Sustain from "./Sustain/Sustain";

export default function Landing() {
	return (
		<>
			<Navbar />
			<Hero />
			<BestSellers />
			<Collection />
			<Modiweek />
			<Sustain />
			<Grid />
		</>
	);
}
