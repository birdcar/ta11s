const collections = require("./utils/collections");
const filters = require("./utils/filters");
const transforms = require("./utils/transforms");

module.exports = (config) => {
  // Configure a "static" folder to pass through to production untouched
  config.addPassthroughCopy("src/static");

  // Filters
  Object.keys(filters).forEach((filterName) => {
    config.addFilter(filterName, filters[filterName]);
  });

  // Transforms
  Object.keys(transforms).forEach((transformName) => {
    config.addTransform(transformName, transforms[transformName]);
  });

  // Collections
  Object.keys(collections).forEach((collectionName) => {
    config.addCollection(collectionName, collections[collectionName]);
  });

  return {
    dir: {
      input: "src",
      output: "dist",
      includes: "_includes",
      layouts: "_layouts",
      data: "_data",
    },
    htmlTemplateEngine: "njk",

    // Ensure that our "static" folder is passed through as we'd like
    passthroughFileCopy: true,
  };
};
