module.exports = function (eleventyConfig) {
	eleventyConfig.addFilter("arrayToClasses", (values) => {
		return values.join(" ");
	});
	return {
		htmlTemplateEngine: "liquid",
		dir: { input: "src", output: "docs" },
	};
};
