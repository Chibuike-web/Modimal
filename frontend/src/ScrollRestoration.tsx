import { useLayoutEffect, useRef } from "react";
import { useLocation } from "react-router";

type ScrollPos = { x: number; y: number };
export default function ScrollRestoration() {
	const { pathname } = useLocation();

	const scrollRef = useRef<Record<string, ScrollPos>>({});

	useLayoutEffect(() => {
		const saved = scrollRef.current[pathname];
		if (saved) {
			window.scrollTo(saved.x, saved.y);
		} else {
			window.scrollTo(0, 0);
		}

		return () => {
			scrollRef.current[pathname] = {
				x: window.scrollX,
				y: window.scrollY,
			};
		};
	}, [pathname]);

	return null;
}
