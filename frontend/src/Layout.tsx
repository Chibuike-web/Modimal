import { Outlet } from "react-router-dom";
import Navbar from "./sections/Navbar/Navbar";
import Footer from "./sections/Footer";

export default function Layout() {
	return (
		<>
			<Navbar />
			<Outlet />
			<Footer />
		</>
	);
}
