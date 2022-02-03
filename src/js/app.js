import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HorizontalPin from "./horizontalPin";
import VerticalMove from "./verticalMove";
import { debounce } from "debounce";

gsap.registerPlugin(ScrollTrigger);

//------------------Fields---------------------------+
let mainContent = document.querySelector(".main-content");
let skillsHorizontalPin = new HorizontalPin(
	".skills",
	window.screen.width * 1.5,
	true,
	window.screen.width * 0.05
);
let projectsHorizontalPin = new HorizontalPin(
	".projects",
	window.screen.width * 1.5,
	true,
	window.screen.width * 0.45
);
let verticalScroll = new VerticalMove(
	".projects-container",
	-200,
	-window.screen.height * 0.5
);
window.onresize = debounce(onResize, 400);
window.addEventListener("scroll", onScroll);

function onResize() {
	if (window.screen.width) console.log("resized to " + window.screen.width);
}
function onScroll() {
	if (window.screen.width > 1024) {
		mainContent.style.transform = `translate3d(-${window.scrollY}px,0px,0px)`;
	}
}
ScrollTrigger.matchMedia({
	"(min-width: 1024px)": function () {},
});
