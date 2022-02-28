import Swiper, { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

export default function instanceSwiper() {
	return new Swiper(".projects_slides", {
		modules: [Pagination],
		pagination: {
			el: ".swiper-pagination",
			dynamicBullets: true,
		},
	});
}
