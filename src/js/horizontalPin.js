import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
//offset 0, means animation will start when element hits left side of the screen

//To do generalize the function, lo importante es que puedo saber cuando el item entra en pantalla.
//y con eso hacer diferentes cosas como hacer play a animaciones, pinear elementos horizontalmente.

export default function horizontalPin(selector, length, offset = 0) {
	const elementPos = document
		.querySelector(selector)
		.getBoundingClientRect().x;

	const startPos = elementPos - offset + window.screen.height;
	const endPos = elementPos - offset + length;

	gsap.to(selector, {
		scrollTrigger: {
			trigger: selector,
			start: `${startPos}px bottom`,
			end: `${endPos}px top`,
			scrub: true,
			markers: true,
		},
		x: `${length}px`,
		ease: "linear",
	});
}
