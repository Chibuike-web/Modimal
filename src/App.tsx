import "./globals.css";
import Landing from "./components/Landing/Landing";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchResults from "./components/SearchResults/SearchResults";
import Layout from "./Layout";
import NotFound from "./components/NotFound";

export default function App() {
	return (
		<Router>
			<Routes>
				<Route element={<Layout />}>
					<Route path="/" element={<Landing />} />
					<Route path="/search/results" element={<SearchResults />} />
				</Route>
				<Route path="*" element={<NotFound />} />
			</Routes>
		</Router>
	);
}
