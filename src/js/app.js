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
			document.addEventListener("keydown", (event) => {
				const keyName = event.key;
				if (keyName == "d") {
					this.asscrollController.disableASScroller();
				}
				if (keyName == "e") {
					this.asscrollController.enableASScroller(true, document);
					this.instanceGsapAnimations(document);
					console.log(
						"SIZE " +
							document.querySelector("[asscroll-container]")
								.scrollHeight
					);
				}
				if (keyName == "r") {
					this.asscrollController.enableASScroller(false, document);
				}
				if (keyName == "t") {
					this.asscrollController.debugInfo();
					console.log(
						"SIZE " +
							document.querySelector("[asscroll-container]")
								.scrollHeight
					);
				}
			});
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
					beforeLeave(data) {
						that.onBeforeLeaveHome(that, data);
					},
					afterEnter(data) {
						that.onEnterHome(that, data);
					},
				},
				{
					namespace: "project",
					beforeLeave(data) {
						that.onBeforeProject(that, data);
					},
					afterEnter(data) {
						that.onEnterProject(that, data);
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

		const view1 = container.querySelector(".view_1");
		const view2 = container.querySelector(".view_2");

		const projectsEnd =
			view2.getBoundingClientRect().width -
			window.innerWidth * 0.6 -
			window.innerHeight;
		this.gsapTweens.push(
			gsap.to(skills, {
				scrollTrigger: {
					horizontal: true,
					start: `${-window.innerWidth * 0.025} top`,
					end: `${view2.getBoundingClientRect().width}px center`,
					trigger: skills,
					pin: true,
					// markers: true,
				},
			})
		);

		this.gsapTweens.push(
			gsap.to(projects, {
				scrollTrigger: {
					horizontal: true,
					start: `${-window.innerWidth * 0.475} top`,
					end: `${projectsEnd}px center`,
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
					end: `${projectsEnd}px center`,
					trigger: projects_container,
					scrub: 0.25,
				},
				yPercent:
					-100 +
					(window.innerHeight /
						projects_container.getBoundingClientRect().height) *
						100,
			})
		);
		console.log("INSTANCED ANIMATIONS");
	}

	onBeforeLeaveHome(that, data) {
		that.gsapTweens.forEach((tween) => {
			tween.kill();
		});
		that.gsapTweens = [];
		that.asscrollController.disableASScroller();
	}

	onEnterHome(that, data) {
		console.log("ENTER HOOME");
		console.log(this);
		that.asscrollController.enableASScroller(true, data.next.container);
		that.instanceGsapAnimations(data.next.container);
	}

	onBeforeProject(that, data) {
		that.gsapTweens.forEach((tween) => {
			tween.kill();
		});
		that.gsapTweens = [];
		that.asscrollController.disableASScroller();
	}

	onEnterProject(that, data) {
		that.asscrollController.enableASScroller(false, data.next.container);
		that.gsapTweens.push(
			gsap.to(data.next.container.querySelector(".testscrollt"), {
				scrollTrigger: {
					trigger: data.next.container.querySelector(".testscrollt"),
					scrub: 0.25,
					markers: true,
				},
				xPercent: 100,
			})
		);
	}
}
