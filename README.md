# blog

This README outlines the details of collaborating on this Ember application.
A short introduction of this app could easily go here.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Bower](https://bower.io/)
* [Ember CLI](https://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* `cd blog`
* `npm install`
* `bower install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

## Planning

1. Configuration/dependencies
  * Bootstrap: package.json
  * jQuery: package.json
  * All other other dependencies are installed by Ember and located in package.json

2. Specs
  * Spec 1: User can create and save a new blog post
  * Spec 2: User can edit and delete blog posts
  * Spec 3: User can navigate to individual posts
  * Spec 4: User can add comments to post
  * Spec 5: User can edit and delete comments

3. Integration
  * Initial routes or index pages with all dependencies in Controller/index.html head
  * Template/html page for `index`
  * Template/html page for `about`
  * Template/html page for `contact`
  * Template/html page for `new-post`
  * Template/html page for `post`
  * Display all posts on index with `post-tile` component
  * Display individual post content with `post-detail` component
  * Display update post form with `update-post` component
  * Display comments with `comment-tile` component
  * Display new comment form with `new-comment` component
  * Display update post form with `update-comment` component

4. UX/UI
  * Include and modify bootstrap/materialize/Sass etc.
  * Develop custom style

5. Polish Sausage
  * Refactor minor portion of...
  * Delete unused...
  * Make README awesome
