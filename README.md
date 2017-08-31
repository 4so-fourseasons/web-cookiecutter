# 4so Webtemplate

This template should provide a quick and easy start for 4so web projects.
Here is an overview of all basic features, which are currently supported:
* Hot Module Replacement (no need to refresh the browser, when changing styles)
* Automatic Sass/Scss-compilation
* Autoprefixing of styles
* Creation of svg-sprites
* StandardJS-linting
* Flow-Type-Checking
* style-linting
* Unit testing with Jest
* Creation of test coverage via coveralls and jest
* Creation of uglified production builds
* Splitting application and vendor js files into separate bundles for production
* All current ES6-Syntax features as well as Stage-0 features


## Getting started

First clone the repository and install all dependencies via `npm install`.
It is recommended to change project title, author etc. inside the package.json and
index.tpl.html. In the future this might get automated by a cookiecutter process or
something comparable.

Now you are able to use all provided features, which are:

### Development
To start the development server simply type
```npm start``` 
into your CLI.
This will build a svg-sprite from svg images and spawn the webpack-dev-server and make the project available at
_localhost:8080_. Changes are then monitored by webpack.
This also includes:
* Standard-Linting
* Style-Linting
* Flow Type-Checking

To manually lint your JS files without running webpack, use

```npm run lint```

or

```npm run lint:fix```

to lint and automatically fix issues (if possible)



To lint your stylesheets, use

```npm run stylelint```

or

```npm run stylelint:fix```

to lint and automatically fix issues (if possible)


To run Flow type-checking

```npm run flow```


To run unittests, use

```npm run test```


To run jest in watch mode, use

```npm run test:watch```


To run unit tests as well as linters, run:

```npm run lintAndTest```


To compile _.svg_ files into sprites, use

```npm run svg-sprite```



### Production
Simply run

`npm run build`

to get a production ready build.
This will build a svg-sprite from svg-images and create a _dist/_ directory inside your project root, alongside
with all compiled javascript/css files as well as your assets and an index.html.
Note that the index.html file is created from the _index.tpl.html_ inside the
_src/_ directory.
It is technically possible to extract multiple html files from different entry points. To implement something like this, please refer to the [Webpack Documentation](https://webpack.js.org/configuration/) and the documentation of [HTMLWebpackPlugin](https://github.com/jantimon/html-webpack-plugin). (You would have to define additional entry points for each respective javascript bundle as well as another instance of the htmlwebpackplugin which makes use of the respective bundle. If every sub page makes use of the same js and css you can simply add anoterh htmlWebpackPlugin which will then automatically make use of those assets.)
