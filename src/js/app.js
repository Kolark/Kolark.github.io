import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HorizontalPin from "./horizontalPin";
import VerticalMove from "./verticalMove";
import setupASScroll from "./setupASScroll";
import { debounce } from "debounce";
import Swiper, { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

gsap.registerPlugin(ScrollTrigger);

//------------------Fields---------------------------+
let mainContent = document.querySelector(".main-content");

const asscroll = setupASScroll(".content");

let swiper = null;

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
	if (window.screen.width <= 1024) {
		if (swiper === null) {
			instanceSwiper();
		}
	} else {
		//TO Desktop
		instanceGsapAnimations();
	}
}

function instanceGsapAnimations() {}

function instanceSwiper() {
	swiper = new Swiper(".projects-slides", {
		modules: [Pagination],
		pagination: {
			el: ".swiper-pagination",
			dynamicBullets: true,
		},
	});
}
