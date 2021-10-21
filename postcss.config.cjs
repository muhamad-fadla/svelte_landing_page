const purgecss = require("@fullhuman/postcss-purgecss")({
   	content: ['./**/**/*.html', './**/**/*.svelte'],
  	whitelistPatterns: [/svelte-/],
  	defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
});

const prod = process.env.NODE_ENV == "production"


module.exports = {
  plugins: [
    require('autoprefixer'),

    ...(prod ? [purgecss] : [])
  ]
}