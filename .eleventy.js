module.exports = function (eleventyConfig) {
	// eleventyConfig.addPassthroughCopy("fonts/");
	// eleventyConfig.addPassthroughCopy("css/");
	// eleventyConfig.addPassthroughCopy("img/");
	// eleventyConfig.addPassthroughCopy("js/");
	eleventyConfig.addFilter("arrayToClasses", (values) => {
		return values.join(" ");
	});

	return {
		htmlTemplateEngine: "liquid",
		dir: { input: "src", output: "_site" },
	};
};
