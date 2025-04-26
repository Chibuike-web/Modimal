import { useSearchParams } from "react-router-dom";

export default function SearchResults() {
	const [searchParams] = useSearchParams();
	const query = searchParams.get("query");

	return (
		<div>
			<h1>Search Results</h1>
			<p>
				Showing results for: <strong>{query}</strong>
			</p>
		</div>
	);
}
