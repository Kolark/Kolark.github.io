import ASScroll from "@ashthornton/asscroll";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import setupASScroll from "./setupASScroll";
import Swiper, { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
gsap.registerPlugin(ScrollTrigger);

window.addEventListener("load", () => {
	console.log("holla");
	if (window.innerWidth > 1024) {
		const asscroll = setupASScroll(".content");
		const wrapper = document.querySelector(".wrapper");
		gsap.to(".skills", {
			scrollTrigger: {
				horizontal: true,
				start: `${-window.innerWidth * 0.025} top`,
				end: `${wrapper.getBoundingClientRect().width}px center`,
				trigger: ".skills",
				pin: true,
			},
		});

		gsap.to(".projects", {
			scrollTrigger: {
				horizontal: true,
				start: `${-window.innerWidth * 0.475} top`,
				end: `${wrapper.getBoundingClientRect().width}px center`,
				trigger: ".projects",
				pin: true,
			},
		});

		gsap.to(".projects_container", {
			scrollTrigger: {
				horizontal: true,
				start: `${-window.innerWidth * 0.475} top`,
				end: `${wrapper.getBoundingClientRect().width}px center`,
				trigger: ".projects_container",
				scrub: 0.25,
			},
			yPercent: -100,
		});
	} else {
		instanceSwiper();
	}
});

function instanceSwiper() {
	swiper = new Swiper(".projects_slides", {
		modules: [Pagination],
		pagination: {
			el: ".swiper-pagination",
			dynamicBullets: true,
		},
	});
}
