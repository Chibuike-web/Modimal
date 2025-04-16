import BestSellers from "./components/BestSellers/BestSellers";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";

export default function LandingPage() {
	return (
		<>
			<Navbar />
			<Hero />
			<BestSellers />
		</>
	);
}
