import BestSellers from "./BestSellers";
import Collection from "./Collection";
import Grid from "./Grid";
import Hero from "./Hero/Hero";
import Modiweek from "./Modiweek";
import Sustain from "./Sustain/Sustain";

export default function Landing() {
	return (
		<>
			<Hero />
			<BestSellers />
			<Collection />
			<Modiweek />
			<Sustain />
			<Grid />
		</>
	);
}
