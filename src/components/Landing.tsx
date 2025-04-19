import BestSellers from "./BestSellers";
import Collection from "./Collection";
import Footer from "./Footer/Footer";
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
			<Footer />
		</>
	);
}
