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
						console.log("[BEFORE LEAVE HOME START]");
						that.gsapTweens.forEach((tween) => {
							tween.kill();
						});
						that.gsapTweens = [];
						that.asscrollController.disableASScroller();
						console.log("[BEFORE LEAVE HOME END]");
					},
					afterEnter(data) {
						console.log("[AFTER ENTER HOME START]");
						that.asscrollController.enableASScroller(
							true,
							data.next.container
						);
						that.instanceGsapAnimations(data.next.container);
						console.log("[AFTER ENTER HOME END]");
					},
				},
				{
					namespace: "project",
					beforeLeave() {
						that.asscrollController.disableASScroller();
					},
					afterEnter(data) {
						that.asscrollController.enableASScroller(
							false,
							data.next.container
						);
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

	instanceGsapAnimations(container) {
		const wrapper = container.querySelector(".wrapper");
		const skills = container.querySelector(".skills");
		const projects = container.querySelector(".projects");
		const projects_container = container.querySelector(
			".projects_container"
		);

		this.gsapTweens.push(
			gsap.to(skills, {
				scrollTrigger: {
					horizontal: true,
					start: `${-window.innerWidth * 0.025} top`,
					end: `${wrapper.getBoundingClientRect().width}px center`,
					trigger: skills,
					pin: true,
				},
			})
		);

		this.gsapTweens.push(
			gsap.to(projects, {
				scrollTrigger: {
					horizontal: true,
					start: `${-window.innerWidth * 0.475} top`,
					end: `${wrapper.getBoundingClientRect().width}px center`,
					trigger: projects,
					pin: true,
				},
			})
		);

		this.gsapTweens.push(
			gsap.to(projects_container, {
				scrollTrigger: {
					horizontal: true,
					start: `${-window.innerWidth * 0.475} top`,
					end: `${wrapper.getBoundingClientRect().width}px center`,
					trigger: projects_container,
					scrub: 0.25,
				},
				yPercent: -100,
			})
		);
		console.log("INSTANCED ANIMATIONS");
	}
}
