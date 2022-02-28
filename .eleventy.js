module.exports = function (eleventyConfig) {
	// eleventyConfig.addPassthroughCopy("fonts/");
	// eleventyConfig.addPassthroughCopy("css/");
	// eleventyConfig.addPassthroughCopy("img/");
	// eleventyConfig.addPassthroughCopy("js/");
	eleventyConfig.addFilter("arrayToClasses", (values) => {
		return values.join(" ");
		// return "Unity";
	});

	// eleventyConfig.addFilter("alph", (values) => {
	// 	console.log(
	// 		"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"
	// 	);
	// 	return values
	// 		.slice()
	// 		.sort((a, b) => a.data.title.localeCompare(b.data.title));
	// });
	// eleventyConfig.addFilter("testfilter", (values) => {
	// 	return values.getAllSorted();
	// });

	// eleventyConfig.addCollection("posts", function (collectionApi) {
	// 	return collectionApi.getAllSorted();
	// });

	return {
		htmlTemplateEngine: "liquid",
		dir: { input: "src", output: "_site" },
	};
};
