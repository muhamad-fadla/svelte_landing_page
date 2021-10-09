const purgecss = require("@fullhuman/postcss-purgecss")({
   	content: ['./**/**/*.html', './**/**/*.svelte'],
  	whitelistPatterns: [/svelte-/],
  	defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
});

const dev = process.env.NODE_ENV == "production" ? false : true;


module.exports = {
  plugins: [
    require('autoprefixer'),

    ...(!dev ? [purgecss] : [])
  ]
}