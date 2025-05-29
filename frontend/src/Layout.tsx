import { Outlet } from "react-router-dom";
import Navbar from "./sections/Navbar/Navbar";
import Footer from "./sections/Footer";
import { useLocation } from "react-router";

export default function Layout() {
	const location = useLocation();
	const pathname = location.pathname;
	return (
		<>
			<Navbar />
			<Outlet />
			{pathname === "/success" || "/failed" ? "" : <Footer />}
		</>
	);
}
