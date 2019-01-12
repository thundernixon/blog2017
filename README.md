Built on top of [gatsby-blog-starter-kit](https://github.com/DSchau/gatsby-blog-starter-kit), because that had most of what I was looking for: 
1. Blog post listing with previews for each blog post
1. Navigation between posts with a previous/next post button
1. Tags and tag navigation
1. Responsive images (via [gatsby-remark-images][gatsby-remark-images])

I am currently deploying this via [Netlify](https://netlify.com) and I have been surprised at how painless the deploy experience has been so far.

## Set up

1. You can either clone this repo or start your own blog from [gatsby-blog-starter-kit](https://github.com/DSchau/gatsby-blog-starter-kit)
1. `yarn`
1. `yarn start`

[gatsby]: https://www.gatsbyjs.org/
[gatsby-remark-images]: https://www.gatsbyjs.org/docs/packages/gatsby-remark-images/

## Troubleshooting

Sometimes, if you build after a time away, then come back and run `gatsby develop`, you get an error like this:

```
error Plugin gatsby-transformer-remark returned an error

    Error: The module '/Users/stephennixon/code/blog2017-gatsby/node_modules/sharp/build/Release/sharp.node'
    was compiled against a different Node.js version using
    NODE_MODULE_VERSION 64. This version of Node.js requires
    NODE_MODULE_VERSION 67. Please try re-compiling or re-installing
    the module (for instance, using `npm rebuild` or `npm install`).
```

This probably means that you should reinstall the mentioned node module, like:

`npm uninstall sharp`

`npm install sharp`

---

```
Node Sass does not yet support your current environment: OS X 64-bit
```

You can fix this with:

`npm rebuild node-sass`