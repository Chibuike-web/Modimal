import "./globals.css";
import Landing from "./pages/Landing";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchResults from "./pages/SearchResults";
import Layout from "./Layout";
import NotFound from "./pages/NotFound";
import Favourites from "./pages/Favourites";
import SignUp from "./pages/SignUp";

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
				</Route>
			</Routes>
		</Router>
	);
}
