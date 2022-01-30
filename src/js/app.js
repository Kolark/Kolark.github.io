let mainContent = document.querySelector(".main-content");

window.addEventListener("scroll", (e) => {
	if (window.screen.width > 1024) {
		mainContent.style.transform = `translate3d(-${window.scrollY}px,0px,0px)`;
	}
});
