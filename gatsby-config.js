const path = require('path')

require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
    siteMetadata: {
        title: "Raul Portfolio",
        description: "Web Developer Solutions",
        siteUrl: `https://sanzraul.com`
    },
    plugins: [
      "gatsby-plugin-sass"
    ]
};