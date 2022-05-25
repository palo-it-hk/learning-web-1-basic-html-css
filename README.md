# Learning Web - 1 - HTML:CSS

## Prerequisites

- You have registered a Github account
- You have registered a Netlify account
- Your device is setup for web development according to the following instructions

```
# Install XCode dev tools. This should take up to 20 minutes.
xcode-select --install

# Install Homebrew for package management
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Run the following bootstrap script to setup your device
bash <(curl -s https://raw.githubusercontent.com/palo-it-hk/macbook-bootstrap/master/bootstrap.sh)
```

## Quickstart

Open up a terminal, from the project root

```
# Install dependencies
npm i

# Run Development
npm run dev

# Create build artifacts. They are output to the `dist` folder
npm run build
```

## Architecture

This section describes at a high level the way this project has been composed and fits together; a more concise version of this information can be found online from the official documentation.

* The environment for this project is provided by [NodeJS](https://nodejs.org/en/); a way to JavaScript outside of the browser. In this project, that capability has been extended to include TypeScript; a JavaScript language superset that results in higher quality code.
* The workflow for this project is managed by [vite](https://vitejs.dev/). Vite is a modern program that manages the building of our application from source code, including useful Quality-of-Life utilities such as automatically building and reloading the web page when we make changes.
* To make presentation of this starter project more palatable, the [Bulma CSS library](https://bulma.io/) has been included with the project. This provides us (through CSS alone) with a toolbox of components (navbar, cards) ready to use
* There are some possible configuration values that can be used to control behavior of the web app from beyond the code through environment variables. Copy the `.env.dist` file to `.env` and adjust the values to see how your app is affected
* The [vite handlebars plugin](https://www.npmjs.com/package/vite-plugin-handlebars) has been included to help us share template fragments across the two pages
* HTML, JS, and CSS linting is already integrated in to the project. [Linting](https://www.perforce.com/blog/qac/what-lint-code-and-why-linting-important#:~:text=Linting%20is%20the%20automated%20checking,a%20Unix%20utility%20for%20C.) is the process of automatically checking and enforcing code style / architecture guidelines.
* Complete template is built out from [this Bulma starter template](https://bulmatemplates.github.io/bulma-templates/templates/hero.html). 


### Files 

There is no single accepted way of organising project files; in theory an entire website can be included in the the `index.html` file. As a site grows however, keeping the code organised becomes more important; as the number of pages grows, the ability to reuse assets becomes very important.

This project attempts to keep things simple, inline with Vite expectations, and follow a layout that has proven to be convenient over time.  In alphabetical order, the files included with this project are:

* `.env.dist` - Copy the file to `.env` in order to directly inject configuration values in to the application.
* `.eslintrc.js` -  Configuration for the JavaScript code analyser
* `.gitignore` - Listing of paths / files that GIT should ignore 
* `.nvmrc` - Integration with [Node Version Manager](https://github.com/nvm-sh/nvm) so, we can control the exact installed version
* `.prettierignore` - Files that the prettier code formatter should ignore
* `.prettierrc.json` - Configuration for the prettier code formatter
* `.stylelintrec.json` - Configuration for CSS code analyzer
* `about` - Following the [vite practise for multi page app](https://vitejs.dev/guide/build.html#multi-page-app) - path to contain about assets
    * `about.ts` - About page specific script included
    * `index.html` - About page specific html
* `dist` - Only found once project built; used as output path for artifacts
* `index.html` - Our root HTML document, the homepage
* `index.ts` - Home page specific script
* `node_modules` - Only found once project initialized, contains external dependencies 
* `package-lock.json` - Auto-generated dependency map keeping exact track of packages installed for the project
* `package.json` - Project meta-data describing node environment and dependencies
* `public` - Assets to be included in build but, have no processing
* `src` - Path to contain application specific code. Not necessary but, good for file organisation
    * `App.ts` - Our site script "framework". Actions to be performed on all pages
    * `assets` - Path for storing multimedia assets that are to be processed as part of build
    * `partials` - Path for storing handlebar HTML snippets
    * `style.css` - The root style sheet file which gets processed during build. Vite has [styling features](https://vitejs.dev/guide/features.html#css) included out of the box
    * `utils` - Path for defining generic TypeScript utility functions 
    * `vite-env.d.ts` - Controls how [environment variables and modes](https://vitejs.dev/guide/env-and-mode.html) are managed. 
* `tsconfig.json` - Configuration for the TypeScript compiler
* `vite.config.ts` - Configuration for the Vite code manager

### Code explanation

Compared to the first web page most people will compile (a whole site contained within index.html), this starter template is very different. This section of the documentation aims to explain at the source code level behaviour that deviates from a non-standard HTML file

* `index.html` is the root of the site and contains the frame for a complete and standard HTML5 page
    * `{{> head }}` is syntax for a handlebars snippet. I.E. We are pulling in the contents of code from `src/partials/head.html` to construct the HTML metadata part of our page
* Within the html body, we wrap the entire page in an `app` container. This is typically used as an anchor for attaching JavaScript frameworks to the DOM
* the `<a>` tag provides a link to our second page resource
* The final `<script>` tag is used to include the root script file (which Vite will continue to operate on during build). As developers, even style is included in the project from within this script file as opposed to using the `<head>` area; this is part of building web apps with Vite
    * Within the script file, we start operations by waiting for the page contents to be ready for processing vua the `document.addEventListener("DOMContentLoaded"...)` event attach
    * Call the generic `App()` (our micro front-end framework) to perform common logic operations
        * Our micro front-end framework currently only processes the site logo, injecting it in to the DOM and minifying it at build time.
    * We are selecting (from the DOM) the welcome banner element for manipulation and replacing it's contents with the HTML banner.
    * We (through the `net utility function`) make a GET request to retrieve the source for an image. This is why on page load, there is a spinner that gets replaced with a random picture of a dog that is different every page load

## Appendix

For newcomers to web development, many of the terms and technologies may be unfamiliar. This section aims to provide a simple dictionary of terms to aid understanding.

* CSS - Cascading Style Sheet; the file format for defining presentation rules that get applied to a web page
* Environment Variable - A configuration value that is set outside of the program
* GIT - A distributed code management tool for handling storage of source code during the SDLC
* HTML - HyperText Markup Language; the file format for defining web documents
* Linting - Process of analyzing source code checking for problems that conform to predefined patterns
* Syntax - The way we write code for it to be meaningful to a code interpreter
* TypeScript - A superset of JavaScript that allows developers to write more solid code. When running projects with Node, TypeScript is transformed in to JavaScript

## Experiments and things you should tryh

* Swap the site favicon (icon that appears in your toolbar) for one you've generated from [this favicon generator](https://realfavicongenerator.net/). To change, you will need to replace the files located in `public`
* Personalize the site metadata (defined in `src/partials/head.html` to be relevant for you; currently it is relevant for Simon Ball
* Remove the placeholder logo (located in `src/assets/img` for a logo you want and update the `src/App.ts` to use your new logo
* Turn the home page in to a personal page and the second `about` page in to something meaningful (a hobby / photography) page
* Modify the social links section with content relevant to you
* Try modifying the welcome banner through environemnt variables. Rename `.env.dist` to `.env` and chang the `VITE_WELCOME_BANNER` configuration value. 
* Experiment switching out Bulma for a different UI toolkit or, remove it entirely and create a page design from scratch!

## Further Reading

* [The web browser request cycle simplified](https://www.codecademy.com/article/request-response-cycle-static)
* [Breakdown of what an HTML5 file is](https://www.sitepoint.com/a-minimal-html-document-html5-edition/)
* [What is the HTML DOM?](https://www.w3schools.com/whatis/whatis_htmldom.asp)
* [Why should I use Vite?](https://vitejs.dev/guide/why.html)
* [Why should i use TypeScript instead of JavaScript?](https://dzone.com/articles/what-is-typescript-and-why-use-it#:~:text=With%20TypeScript%2C%20we%20can%20make,by%20type%20checking%20the%20code.)
* [Vite static asset handling](https://vitejs.dev/guide/assets.html). The `src/assets/img/insert-logo-here.png` is an image asset managed by Vite injected in to the DOM at build time
* [What is Netlify actually doing to deploy my site?](https://docs.netlify.com/site-deploys/create-deploys/?_ga=2.209617106.1382140378.1653445168-1568087062.1652858906#deploy-with-git)