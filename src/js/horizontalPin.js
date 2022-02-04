import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
//offset 0, means animation will start when element hits left side of the screen

//To do generalize the function, lo importante es que puedo saber cuando el item entra en pantalla.
//y con eso hacer diferentes cosas como hacer play a animaciones, pinear elementos horizontalmente.

export default class HorizontalPin {
	#element;
	#selector;
	#length = 0;
	#scrub = false;
	#offset = 0;

	#tween = null;

	#elementPos;
	#startPos;
	#endPos;
	constructor(selector, length, scrub, offset = 0) {
		this.#element = document.querySelector(selector);
		this.#selector = selector;
		this.#length = length;
		this.#scrub = scrub;
		this.#offset = offset;
		this.createTween();
	}

	calculateValues() {
		this.#elementPos = this.#element.getBoundingClientRect().x;
		this.#startPos = this.#elementPos - this.#offset;
		this.#endPos = this.#startPos + this.#length;
	}

	createTween() {
		console.log("tween Created");
		this.calculateValues();
		this.#tween = gsap.to(this.#selector, {
			scrollTrigger: {
				trigger: this.#selector,
				start: `${this.#startPos}px top`,
				end: `${this.#endPos}px top`,
				scrub: this.#scrub,
				// markers: true,
			},
			x: `${this.#length}px`,
			ease: "linear",
		});
	}

	killTween() {
		this.#tween.kill();
		this.#tween = null;
	}
	isAlive() {
		return this.#tween !== null;
	}
}
