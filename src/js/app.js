import ASScroll from "@ashthornton/asscroll";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import barba from "@barba/core";
import ASScrollerController from "./ASScrollerController";

gsap.registerPlugin(ScrollTrigger);

export default class App {
	constructor(options) {
		this.gsapTweens = [];
		if (window.innerWidth > 1024) {
			this.asscrollController = new ASScrollerController({
				elementSelector: ".content",
				isHorizontal: true,
			});
			this.instanceGsapAnimations();
			this.barba();
		} else {
			instanceSwiper();
		}
	}

	barba() {
		let that = this;
		barba.init({
			views: [
				{
					namespace: "home",
					beforeLeave() {
						console.log("Before Leave");
						that.asscrollController.disableASScroller();
						that.gsapTweens.forEach((tween) => {
							tween.kill();
						});
						that.gsapTweens = 0;
					},
					afterEnter() {
						console.log("after Enteer");
						that.asscrollController.enableASScroller(true);
						instanceGsapAnimations();
					},
				},
				{
					namespace: "project",
					beforeLeave() {
						console.log("Before Leave");
						that.asscrollController.disableASScroller();
					},
					afterEnter() {
						console.log("after Enter");
						that.asscrollController.enableASScroller(false);
					},
				},
			],
			transitions: [
				{
					name: "from-home",
					from: {
						namespace: ["home"],
					},
					leave(data) {
						return gsap.timeline().to(data.current.container, {
							opacity: 0,
							duration: 0.5,
						});
					},
					enter(data) {
						return gsap.timeline().from(data.next.container, {
							opacity: 0,
						});
					},
				},
				{
					name: "from-projects",
					from: {
						namespace: ["project"],
					},
					leave(data) {
						return gsap.timeline().to(data.current.container, {
							opacity: 0,
							duration: 0.5,
						});
					},
					enter(data) {
						return gsap.timeline().from(data.next.container, {
							opacity: 0,
						});
					},
				},
			],
		});
	}

	instanceGsapAnimations() {
		const wrapper = document.querySelector(".wrapper");
		this.gsapTweens.push(
			gsap.to(".skills", {
				scrollTrigger: {
					horizontal: true,
					start: `${-window.innerWidth * 0.025} top`,
					end: `${wrapper.getBoundingClientRect().width}px center`,
					trigger: ".skills",
					pin: true,
				},
			})
		);

		this.gsapTweens.push(
			gsap.to(".projects", {
				scrollTrigger: {
					horizontal: true,
					start: `${-window.innerWidth * 0.475} top`,
					end: `${wrapper.getBoundingClientRect().width}px center`,
					trigger: ".projects",
					pin: true,
				},
			})
		);

		this.gsapTweens.push(
			gsap.to(".projects_container", {
				scrollTrigger: {
					horizontal: true,
					start: `${-window.innerWidth * 0.475} top`,
					end: `${wrapper.getBoundingClientRect().width}px center`,
					trigger: ".projects_container",
					scrub: 0.25,
				},
				yPercent: -100,
			})
		);
	}
}
