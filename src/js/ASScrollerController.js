import ASScroll from "@ashthornton/asscroll";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default class ASScrollerController {
	enableASScroller(isHorizontal, container) {
		this.asscroll = new ASScroll({
			disableRaf: true,
			containerElement: container.querySelector("[asscroll-container]"),
		});

		this.setupScrollTrigger(container);

		this.asscroll.enable({
			horizontalScroll: isHorizontal ? window.innerWidth > 1024 : false,
			newScrollElements: container.querySelector(".scroll-wrap"),
			// reset: true,
		});
	}

	firstTime() {
		this.asscroll = new ASScroll({
			disableRaf: true,
		});

		this.asscroll.enable({
			horizontalScroll: !document.body.classList.contains("b-inside"),
		});

		this.setupScrollTrigger(document);
		if (!document.body.classList.contains("b-inside")) {
		}
	}

	setupScrollTrigger(container) {
		const elementSelector = container.querySelector(".scroll-wrap");
		let that = this;

		ScrollTrigger.defaults({
			scroller: elementSelector,
		});

		ScrollTrigger.scrollerProxy(elementSelector, {
			scrollLeft(value) {
				return arguments.length
					? (that.asscroll.currentPos = value)
					: that.asscroll.currentPos;
			},
			scrollTop(value) {
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
	}

	updateASScroller() {
		if (this.asscroll.isScrollJacking) {
			this.asscroll.update();
		}
	}

	disableASScroller() {
		this.asscroll.off("update", ScrollTrigger.update);
		ScrollTrigger.removeEventListener("refresh", this.asscroll.resize); //remove
		this.asscroll.disable();
	}

	debugInfo() {
		if (this.asscroll == null) return;
		console.log(this.asscroll);
	}
}
