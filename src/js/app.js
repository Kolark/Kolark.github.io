import ASScroll from "@ashthornton/asscroll";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import barba from "@barba/core";
import ASScrollerController from "./ASScrollerController";
import Swiper, { Navigation, Pagination } from "swiper";

import instanceSwiper from "./instanceSwiper";

gsap.registerPlugin(ScrollTrigger);

export default class App {
	constructor(options) {
		if (window.innerWidth > 1024) {
			this.asscrollController = new ASScrollerController();

			this.asscrollController.firstTime();

			if (document.body.classList.contains("b-inside")) {
				this.instanceProjectAnimations(document);
			} else {
				this.instanceGsapAnimations(document);
			}
			this.onMouseOverEvents(document);
			this.barba();
		} else {
			this.mobile();
		}

		window.addEventListener("resize", function () {
			window.location.href = window.location.href;
		});

		this.render();
	}

	barba() {
		let that = this;
		barba.init({
			transitions: [
				{
					name: "from-home",
					from: {
						namespace: ["home"],
					},
					leave(data) {
						that.onBeforeLeaveHome(that, data);
						return gsap
							.timeline()
							.to(data.current.container, {
								opacity: 0,
								duration: 0.5,
							})
							.fromTo(
								document.querySelector(".curtain"),
								{
									xPercent: -100,
									duration: 0.75,
								},
								{
									xPercent: 100,
									duration: 0.75,
								}
							);
					},
					beforeEnter(data) {
						ScrollTrigger.getAll().forEach((t) => t.kill());
					},
					enter(data) {
						that.onEnterProject(that, data);
						return gsap
							.timeline()
							.fromTo(
								document.querySelector(".curtain"),
								{
									xPercent: 100,
									duration: 0.75,
								},
								{
									xPercent: 200,
									duration: 0.75,
								}
							)
							.from(data.next.container, {
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
						that.onBeforeProject(that, data);
						return gsap
							.timeline()
							.to(data.current.container, {
								opacity: 0,
								duration: 0.5,
							})
							.fromTo(
								document.querySelector(".curtain"),
								{
									xPercent: 200,
									duration: 0.75,
								},
								{
									xPercent: 100,
									duration: 0.75,
								}
							);
					},
					beforeEnter(data) {
						ScrollTrigger.getAll().forEach((t) => t.kill());
					},
					enter(data) {
						that.onEnterHome(that, data);
						return gsap.timeline().fromTo(
							document.querySelector(".curtain"),
							{
								xPercent: 100,
								duration: 0.75,
							},
							{
								xPercent: -100,
								duration: 0.75,
							}
						);
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

		const footer = container.querySelector(".footer");

		const footerResume = container.querySelector(".footer__resume");
		const resume_download = container.querySelector("#resume_download");
		const widthToTravel =
			footerResume.getBoundingClientRect().left -
			resume_download.getBoundingClientRect().left +
			resume_download.style.marginLeft;

		const projectsEnd =
			view2.getBoundingClientRect().width -
			window.innerWidth * 0.6 -
			window.innerHeight;
		gsap.to(skills, {
			scrollTrigger: {
				horizontal: true,
				start: `${-window.innerWidth * 0.025} top`,
				end: `${view2.getBoundingClientRect().width}px center`,
				trigger: skills,
				pin: true,
				// markers: true,
			},
		});
		gsap.to(projects, {
			scrollTrigger: {
				horizontal: true,
				start: `${-window.innerWidth * 0.475} top`,
				end: `${projectsEnd}px center`,
				trigger: projects,
				pin: true,
			},
		});
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
		});

		gsap.to(footer, {
			scrollTrigger: {
				horizontal: true,
				start: `${-window.innerWidth * 0.03}px top`,
				end: `${projectsEnd + window.innerWidth}px center`,
				trigger: footer,
				pin: true,
				// markers: true,
			},
		});
		gsap.to(resume_download, {
			scrollTrigger: {
				horizontal: true,
				start: `${-window.innerWidth * 0.03}px center`,
				end: `${800}px center`,
				trigger: resume_download,
				scrub: true,
			},
			x: widthToTravel,
		});

		gsap.timeline({ repeat: -1 })
			.fromTo(
				container.querySelector(".scroll-arrow"),
				{
					xPercent: -600,
					scale: 1,
				},
				{
					xPercent: 100,
					duration: 4,
				}
			)
			.to(container.querySelector(".scroll-arrow"), {
				scale: 0,
				duration: 0.25,
			});
	}

	instanceProjectAnimations(container) {
		const header = container.querySelector(".header");
		// gsap.to(header, {
		// 	scrollTrigger: {
		// 		trigger: header,
		// 		pin: true,
		// 		start: "0px center",
		// 		end: "2000px center",
		// 		markers: true,
		// 		horizontal: false,
		// 	},
		// });
	}

	onBeforeLeaveHome(that, data) {
		that.asscrollController.disableASScroller();
	}

	onEnterHome(that, data) {
		that.asscrollController.enableASScroller(true, data.next.container);
		that.instanceGsapAnimations(data.next.container);
		that.onMouseOverEvents(data.next.container);
	}

	onBeforeProject(that, data) {
		that.asscrollController.disableASScroller();
	}

	onEnterProject(that, data) {
		that.asscrollController.enableASScroller(false, data.next.container);
		that.instanceProjectAnimations(data.next.container);
	}

	onMouseOverEvents(container) {
		const projects = container.querySelectorAll(".project_instance");
		const skills = container.querySelectorAll(".skill");
		projects.forEach((element) => {
			const usedSkills = element.dataset.used_skills.split(" ");
			element.addEventListener("mouseenter", (e) => {
				skills.forEach((sk) => {
					if (usedSkills.includes(sk.dataset.skill)) {
						sk.classList.add("selected");
						sk.classList.remove("notselected");
					}
				});
			});
			element.addEventListener("mouseleave", (e) => {
				skills.forEach((sk) => {
					sk.classList.remove("selected");
					sk.classList.add("notselected");
				});
			});
		});
	}

	offMouseOverEvents() {}

	//MOBILE
	mobile() {
		const swiperSlides = document.querySelectorAll(".swiper-slide");
		const skills = document.querySelectorAll(".skill");
		this.swiperInstance = instanceSwiper();
		const sw = this.swiperInstance;
		let that = this;
		this.swiperInstance.on("slideChange", function () {
			that.swiperUpdate(sw, skills, swiperSlides);
		});
		this.swiperUpdate(sw, skills, swiperSlides);

		gsap.fromTo(
			document.querySelector(".skills"),
			{
				opacity: 0,
				duration: 0.5,
			},
			{
				opacity: 1,
				duration: 0.5,
				scrollTrigger: {
					start: "top center",
					end: "top center",
					trigger: document.querySelector(".skills"),
					toggleActions: "play none none reverse",
				},
			}
		);
	}

	swiperUpdate(swiper, skills, swiperSlides) {
		const usedSkills =
			swiperSlides[swiper.activeIndex].dataset.used_skills.split(" ");
		skills.forEach((sk) => {
			if (usedSkills.includes(sk.dataset.skill)) {
				sk.classList.add("selected");
				sk.classList.remove("notselected");
			} else {
				sk.classList.remove("selected");
				sk.classList.add("notselected");
			}
		});
	}
	render() {
		if (this.asscrollController !== undefined) {
			this.asscrollController.updateASScroller();
		}
		requestAnimationFrame(this.render.bind(this));
	}
}
