const tailwindcss = require("tailwindcss");
// postcss.config.js
// const purgecss = require('@fullhuman/postcss-purgecss')({

//   // Specify the paths to all of the template files in your project
//   content: [
//     './src/**/*.html',
//     './src/**/*.js',
//   ],

//   defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []

// })

module.exports = {
  plugins: [
    tailwindcss("./tailwind.config.js"),
    require("autoprefixer")
    // ...process.env.NODE_ENV === 'production'
    //   ? [purgecss]
    //   : []
  ]
};