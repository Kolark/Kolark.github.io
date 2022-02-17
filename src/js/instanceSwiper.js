import Swiper, { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

export default function instanceSwiper() {
	swiper = new Swiper(".projects_slides", {
		modules: [Pagination],
		pagination: {
			el: ".swiper-pagination",
			dynamicBullets: true,
		},
	});
}
