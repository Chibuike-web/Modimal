import "./globals.css";
import Landing from "./pages/Landing";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import SearchResults from "./pages/SearchResults";
import Layout from "./Layout";
import NotFound from "./pages/NotFound";
import Favourites from "./pages/Favourites";
import SignUp from "./pages/auth/SignUp";
import SignIn from "./pages/auth/SignIn";
import ShopAll from "./pages/ShopAll";
import Cart from "./pages/checkout/Cart";
import Container from "./pages/checkout/Container";
import Info from "./pages/checkout/Info";
import Shipping from "./pages/checkout/Shipping";
import Payment from "./pages/checkout/Payment";
import PaymentSuccess from "./pages/checkout/PaymentSuccess";
import PaymentFailed from "./pages/checkout/PaymentFailed";
import FAQs from "./pages/FAQs";
import ContactUs from "./pages/ContactUs";
import SustainabilityMission from "./pages/SustainabilityMisson";
import SustainabilityMaterials from "./pages/SustainabilityMaterials";
import ProductDetails from "./pages/ProductDetails";
import ScrollRestoration from "./ScrollRestoration";

export default function App() {
	return (
		<Router>
			<ScrollRestoration />
			<Routes>
				<Route element={<Layout />}>
					<Route path="/" element={<Landing />} />
					<Route path="/search/results" element={<SearchResults />} />
					<Route path="/favourites" element={<Favourites />} />
					<Route path="*" element={<NotFound />} />
					<Route path="/signup" element={<SignUp />} />
					<Route path="/signin" element={<SignIn />} />
					<Route path="/shopall" element={<ShopAll />} />
					<Route path="/collection/:id" element={<ProductDetails />} />
					<Route path="/success" element={<PaymentSuccess />} />{" "}
					<Route path="/failed" element={<PaymentFailed />} />
					<Route path="faqs" element={<FAQs />} />
					<Route path="/contactus" element={<ContactUs />} />
					<Route path="/sustainability/mission" element={<SustainabilityMission />} />
					<Route path="/sustainability/materials" element={<SustainabilityMaterials />} />
				</Route>
				<Route path="/checkout/cart" element={<Cart />} />
				<Route element={<Container />}>
					<Route path="/checkout/info" element={<Info />} />
					<Route path="/checkout/shipping" element={<Shipping />} />
					<Route path="/checkout/payment" element={<Payment />} />
				</Route>
			</Routes>
		</Router>
	);
}
