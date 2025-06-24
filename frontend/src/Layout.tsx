import { Outlet } from "react-router";
import Navbar from "./sections/navbar/Navbar";
import Footer from "./sections/Footer";
import { useLocation } from "react-router";

export default function Layout() {
	const location = useLocation();
	const pathname = location.pathname;
	return (
		<>
			<Navbar />
			<Outlet />
			{pathname === "/success" || pathname === "/failed" ? "" : <Footer />}
		</>
	);
}
