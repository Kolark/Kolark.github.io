import ASScroll from "@ashthornton/asscroll";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default class ASScrollerController {
	enableASScroller(isHorizontal, container) {
		console.log("[ENABLE SCROLLER START]");
		const asscroll = new ASScroll({
			disableRaf: true,
			containerElement: container.querySelector("[asscroll-container]"),
		});
		gsap.ticker.add(asscroll.update);

		ScrollTrigger.defaults({
			scroller: container.querySelector(this.elementSelector),
		});
		ScrollTrigger.scrollerProxy(
			container.querySelector(this.elementSelector),
			{
				scrollLeft(value) {
					// console.log("GET SCROLL LEFT");
					// console.log("Pos " + asscroll.currentPos);
					return arguments.length
						? (asscroll.currentPos = value)
						: asscroll.currentPos;
				},
				scrollTop(value) {
					// console.log("GET SCROLL TOP");
					// console.log("Pos " + asscroll.currentPos);
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

		asscroll.on("update", ScrollTrigger.update);

		ScrollTrigger.addEventListener("refresh", asscroll.resize);
		asscroll.enable({
			horizontalScroll: isHorizontal ? window.innerWidth > 1024 : false,
			newScrollElements: container.querySelector(".scroll-wrap"),
			// reset: true,
		});
		this.asscroll = asscroll;
		console.log("[ENABLE SCROLLER END]");
	}

	firstTime() {
		console.log("FIRST TIME");
		this.asscroll = new ASScroll({
			disableRaf: true,
		});

		this.asscroll.enable({
			horizontalScroll: !document.body.classList.contains("b-inside"),
		});

		this.setupScrollTrigger();
		if (!document.body.classList.contains("b-inside")) {
		}
		console.log("FIRST TIME END");
	}

	setupScrollTrigger() {
		console.log("Setup Scroll Trigger STart");
		const elementSelector = document.querySelector(".scroll-wrap");
		let that = this;

		ScrollTrigger.defaults({
			scroller: elementSelector,
		});

		ScrollTrigger.scrollerProxy(elementSelector, {
			scrollLeft(value) {
				// console.log("GET SCROLL LEFT");
				// console.log("Pos " + asscroll.currentPos);
				return arguments.length
					? (that.asscroll.currentPos = value)
					: that.asscroll.currentPos;
			},
			scrollTop(value) {
				// console.log("GET SCROLL TOP");
				// console.log("Pos " + asscroll.currentPos);
				return arguments.length
					? (that.asscroll.currentPos = value)
					: that.asscroll.currentPos;
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

		this.asscroll.on("update", ScrollTrigger.update);

		ScrollTrigger.addEventListener("refresh", this.asscroll.resize);
		console.log("Setup Scroll Trigger END");
	}

	updateASScroller() {
		this.asscroll.update();
	}

	disableASScroller() {
		console.log("Disabled asscroller");
		// this.asscroll.off("update", ScrollTrigger.update);
		// ScrollTrigger.removeEventListener("refresh", this.asscroll.resize); //remove
		this.asscroll.disable();
		// ScrollTrigger.clearScrollMemory();
	}

	debugInfo() {
		if (this.asscroll == null) return;
		console.log(this.asscroll);
	}
}
