import BestSellers from "../sections/BestSellers";
import Collection from "../sections/Collection";
import Grid from "../sections/Grid";
import Hero from "../sections/hero/Hero";
import Modiweek from "../sections/Modiweek";
import Sustain from "../sections/sustain/Sustain";

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
