import ASScroll from "@ashthornton/asscroll";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default class ASScrollerController {
	constructor(opts) {
		this.elementSelector = opts.elementSelector;
		this.asscroll = null;
	}

	enableASScroller(isHorizontal, container) {
		console.log("[ENABLE SCROLLER START]");
		const asscroll = new ASScroll({
			disableRaf: true,
		});
		gsap.ticker.add(asscroll.update);

		ScrollTrigger.defaults({
			scroller: container.querySelector(this.elementSelector),
		});
		ScrollTrigger.scrollerProxy(
			container.querySelector(this.elementSelector),
			{
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
			}
		);

		asscroll.on("update", ScrollTrigger.update); //re add

		ScrollTrigger.addEventListener("refresh", asscroll.resize); //remove
		asscroll.enable({
			horizontalScroll: isHorizontal ? window.innerWidth > 1024 : false,
			newScrollElements: container.querySelectorAll(
				".gsap-marker-start, .gsap-marker-end, [asscroll]"
			),
			reset: true,
		});

		this.asscroll = asscroll;
		console.log("[ENABLE SCROLLER END]");
	}

	disableASScroller() {
		console.log("Disabled asscroller");
		gsap.ticker.remove(this.asscroll.update); //ticker.remove
		ScrollTrigger.removeEventListener("refresh", this.asscroll.resize); //remove

		this.asscroll.disable();
	}
}
