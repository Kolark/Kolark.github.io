import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import horizontalPin from "./horizontalPin";
import verticalMove from "./verticalMove";

gsap.registerPlugin(ScrollTrigger);

let mainContent = document.querySelector(".main-content");

window.addEventListener("scroll", (e) => {
	if (window.screen.width > 1024) {
		mainContent.style.transform = `translate3d(-${window.scrollY}px,0px,0px)`;
	}
});

horizontalPin(
	".skills",
	window.screen.width * 1.5,
	true,
	window.screen.width * 0.05
);
horizontalPin(
	".projects",
	window.screen.width * 1.5,
	true,
	window.screen.width * 0.45
);
verticalMove(".projects-container", -200, -window.screen.height * 0.5);
