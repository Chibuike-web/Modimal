import "./globals.css";
import Landing from "./pages/Landing";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchResults from "./pages/SearchResults";
import Layout from "./Layout";
import NotFound from "./pages/NotFound";
import Favourites from "./pages/Favourites";
import SignUp from "./pages/Auth/SignUp";
import SignIn from "./pages/Auth/SignIn";
import ShopAll from "./pages/ShopAll/ShopAll";
import ProductDetails from "./pages/Products/ProductDetails";
import Cart from "./pages/Checkout/Cart";
import Container from "./pages/Checkout/Container";
import Info from "./pages/Checkout/Info";
import Shipping from "./pages/Checkout/Shipping";
import Payment from "./pages/Checkout/Payment";
import PaymentSuccess from "./pages/Checkout/PaymentSuccess";
import PaymentFailed from "./pages/Checkout/PaymentFailed";
import FAQs from "./pages/FAQs";

export default function App() {
	return (
		<Router>
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
