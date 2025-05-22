import { Outlet } from "react-router";

export default function Container() {
	return (
		<div>
			<aside>
				maduabuchi
				<Outlet />
			</aside>
			<aside>Chibuike</aside>
		</div>
	);
}
