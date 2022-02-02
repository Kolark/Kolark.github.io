import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
//offset 0, means animation will start when element hits left side of the screen

//To do generalize the function, lo importante es que puedo saber cuando el item entra en pantalla.
//y con eso hacer diferentes cosas como hacer play a animaciones, pinear elementos horizontalmente.

export default function verticalMove(selector, length, offset = 0) {
	const element = document.querySelector(selector);
	const elementPos = element.getBoundingClientRect().x;

	const startPos = elementPos - offset - element.getBoundingClientRect().x;
	const endPos = startPos + element.getBoundingClientRect().height;

	gsap.to(selector, {
		scrollTrigger: {
			trigger: selector,
			start: `${startPos}px top`,
			end: `${endPos}px top`,
			scrub: true,
			// markers: true,
		},
		y: `${-element.getBoundingClientRect().height + length}px`,
		ease: "linear",
	});
}
