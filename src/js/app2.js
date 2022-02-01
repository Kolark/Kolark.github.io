import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

gsap.to(".box", {
	scrollTrigger: {
		trigger: ".box",
		start: "top",
		end: "+=500",
		markers: true,
	},
	x: 400,
	rotation: 360,
	duration: 3,
});
