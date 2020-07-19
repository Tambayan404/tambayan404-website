module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('images')
  // eleventyConfig.addWatchTarget('./directory')

  return {
    passthroughFileCopy: true,
    templateFormats: ['md', 'css', 'html', 'yml', 'njk', 'pug']
  }
}