import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import horizontalPin from "./horizontalPin";

gsap.registerPlugin(ScrollTrigger);

let mainContent = document.querySelector(".main-content");

window.addEventListener("scroll", (e) => {
	if (window.screen.width > 1024) {
		mainContent.style.transform = `translate3d(-${window.scrollY}px,0px,0px)`;
	}
});

horizontalPin(".test3", 600, 200);

// const elementPos = document.querySelector(".test3").getBoundingClientRect().x;

// const projectWidth = document
// 	.querySelector(".projects")
// 	.getBoundingClientRect().width;

// const scrollPos = elementPos + window.screen.height;
// const offset = window.screen.width * 0.5;
// const startPos = elementPos - offset + window.screen.height;
// const endPos = elementPos - offset + projectWidth * 0.25;
// gsap.to(".test3", {
// 	scrollTrigger: {
// 		trigger: ".test3",
// 		start: `${startPos}px bottom`,
// 		end: `${endPos}px top`,
// 		scrub: true,
// 		markers: true,
// 	},
// 	x: `${projectWidth * 0.25}px`,
// 	// rotation: 360,
// 	duration: 3,
// 	ease: "linear",
// });
