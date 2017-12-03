## SCSS and Babel

- `npm init -y`
- webpack: `npm i -D webpack webpack-dev-server`
- SCSS: `npm i -D sass-loader node-sass css-loader extract-text-webpack-plugin`
- ES6: `npm i -D babel-core babel-loader babel-preset-es2015`
- create and edit *webpack.config.js*
- import `RandomGenerator` and `main.scss` in *app.js*
- import `colors` in *main.scss*
- [without loaders] import `dist/main.css` and `dist/bundle.js` in *index.html*
- create `build` and `buld:prod` scripts in *package.json*


## HTML and Image Loaders

- *index.html*: add image and remove stylesheet and script (we want to include them dynamically)
- `npm i -D html-loader html-webpack-plugin file-loader`
- add `html-webpack-plugin`, `html-loader` and `file-loader` in *webpack.config.js*


## Clean Up

Automatically remove *dist* folder before each `build:prod` task:

- `npm i -D clean-webpack-plugin`
- add plugin to *webpack.config.js*