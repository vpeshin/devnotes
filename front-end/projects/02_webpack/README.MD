## Basic Setup

- `npm init`

- `npm install -D webpack webpack-dev-server@2.7.1`

Newer webpack doesn't work correctly with UglifyJs.

- *package.json*: 

```json
...
"scripts": {
    "build": "webpack-dev-server --entry ./src/js/app.js --output-filename ./dist/bundle.js",
    // -p is production mode: minifying code etc.
    "build:prod": "webpack src/js/app.js dist/bundle.js -p"
},
...
```

- *app.js*:

```js
import { secretParagraph, secretButton } from './dom-loader';
...
```

- export variables or functions from *dom-loader.js*:

```js
export var secretButton = document.querySelector('#secret-button');
export var secretParagraph = document.querySelector('#secret-paragraph');
```

- *index.html*:

```html
...
  <script src="dist/bundle.js"></script>
</body>
</html>
```

- `npm run build`


## Advanced Setup: Config File, Module Loaders, Plugins

Loaders are aplied on a per-file basis, plugins are applied to a whole code.

- `npm install -D css-loader style-loader` 

- *webpack.config.js*:

```js
var path = require('path');

module.exports = {
  entry: './src/js/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      // ...
    })
  ]
};
```

Warning: webpack loads loaders in reverse order, and `css-loader` should be loaded first.

- *app.js*:

```js
import '../css/main.css';
import '../css/input-elements.css';
...
```

- Clean up *package.json*:

```json
  ...
  "scripts": {
    "build": "webpack-dev-server"
  },
  ...
```