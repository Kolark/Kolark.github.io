import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
//offset 0, means animation will start when element hits left side of the screen

//To do generalize the function, lo importante es que puedo saber cuando el item entra en pantalla.
//y con eso hacer diferentes cosas como hacer play a animaciones, pinear elementos horizontalmente.

export default class VerticalMove {
	#element;
	#elementPos;
	#startPos;
	#endPos;

	#selector;
	#length;
	#offset = 0;

	#tween = null;
	constructor(selector, length, offset = 0) {
		this.#selector = selector;
		this.#length = length;
		this.#offset = offset;
		this.createTween();
	}

	calculateValues() {
		this.#element = document.querySelector(this.#selector);
		this.#elementPos = this.#element.getBoundingClientRect().x;

		this.#startPos =
			this.#elementPos -
			this.#offset -
			this.#element.getBoundingClientRect().x;
		this.#endPos =
			this.#startPos + this.#element.getBoundingClientRect().height;
	}

	createTween() {
		this.calculateValues();
		this.#tween = gsap.to(this.#selector, {
			scrollTrigger: {
				trigger: this.#selector,
				start: `${this.#startPos}px top`,
				end: `${this.#endPos}px top`,
				scrub: 0.5,
				// markers: true,
			},
			y: `${
				-this.#element.getBoundingClientRect().height + this.#length
			}px`,
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
