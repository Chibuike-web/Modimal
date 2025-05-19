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
import Checkout from "./pages/Checkout/Checkout";

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
				</Route>
				<Route path="/checkout" element={<Checkout />} />
			</Routes>
		</Router>
	);
}
