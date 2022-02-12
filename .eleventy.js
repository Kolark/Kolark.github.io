module.exports = function (eleventyConfig) {
	// eleventyConfig.addPassthroughCopy("fonts/");
	// eleventyConfig.addPassthroughCopy("css/");
	// eleventyConfig.addPassthroughCopy("img/");
	// eleventyConfig.addPassthroughCopy("js/");

	return {
		htmlTemplateEngine: "liquid",
		dir: { input: "src", output: "_site" },
	};
};
