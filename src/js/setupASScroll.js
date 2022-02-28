import ASScroll from "@ashthornton/asscroll";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export default function setupASScroll(elementSelector) {
	if (typeof elementSelector !== "string" || elementSelector === "") {
		throw new Error("Paramater has the wrong type | parameter is empty ");
	}
	const asscroll = new ASScroll({
		disableRaf: true,
		// ease: 0.05,
	});

	gsap.ticker.add(asscroll.update);
	ScrollTrigger.defaults({
		scroller: elementSelector,
	});

	ScrollTrigger.scrollerProxy(elementSelector, {
		scrollLeft(value) {
			return arguments.length
				? (asscroll.currentPos = value)
				: asscroll.currentPos;
		},
		getBoundingClientRect() {
			return {
				top: 0,
				left: 0,
				width: window.innerWidth,
				height: window.innerHeight,
			};
		},
	});

	asscroll.on("update", ScrollTrigger.update);

	ScrollTrigger.addEventListener("refresh", asscroll.resize);

	asscroll.enable({
		horizontalScroll: window.innerWidth > 1024,
		newScrollElements: document.querySelectorAll(
			".gsap-marker-start, .gsap-marker-end, [asscroll]"
		),
		reset: true,
	});
	return asscroll;
}
