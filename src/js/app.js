import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HorizontalPin from "./horizontalPin";
import VerticalMove from "./verticalMove";
import { debounce } from "debounce";
import Swiper, { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

gsap.registerPlugin(ScrollTrigger);

//------------------Fields---------------------------+
let mainContent = document.querySelector(".main-content");

let skillsHorizontalPin = null;
let projectsHorizontalPin = null;
let verticalScroll = null;

let swiper = null;

window.onresize = debounce(onResize, 400);
window.addEventListener("scroll", onScroll);

onStart();
//-------------------------------
function onStart() {
	if (window.screen.width > 1024) {
		instanceGsapAnimations();
	} else {
		instanceSwiper();
	}
}

function onResize() {
	window.scrollTo(0, 0);
	//
	if (window.screen.width <= 1024) {
		//TO Mobile
		if (
			projectsHorizontalPin !== null &&
			skillsHorizontalPin !== null &&
			verticalScroll !== null
		) {
			projectsHorizontalPin.killTween();
			skillsHorizontalPin.killTween();
			verticalScroll.killTween();
		}
		if (swiper === null) {
			instanceSwiper();
		}
	} else {
		//TO Desktop
		instanceGsapAnimations();
	}
}
function onScroll() {
	if (window.screen.width > 1024) {
		mainContent.style.transform = `translate3d(-${window.scrollY}px,0px,0px)`;
	}
}

function instanceGsapAnimations() {
	skillsHorizontalPin = new HorizontalPin(
		".skills",
		window.screen.width * 1.5,
		true,
		window.screen.width * 0.05
	);
	projectsHorizontalPin = new HorizontalPin(
		".projects",
		window.screen.width * 1.5,
		true,
		window.screen.width * 0.45
	);
	verticalScroll = new VerticalMove(
		".projects-container",
		-200,
		-window.screen.height * 0.5
	);
}

function instanceSwiper() {
	swiper = new Swiper(".projects-slides", {
		modules: [Pagination],
		pagination: {
			el: ".swiper-pagination",
			dynamicBullets: true,
		},
	});
}
