<!-- TOC depthTo:2 orderedList:true -->

1. [Overview](#overview)
2. [Node.js and Node Package Manager](#nodejs-and-node-package-manager)
3. [webpack](#webpack)
4. [[ESLint](http://eslint.org/docs/user-guide/command-line-interface)](#eslinthttpeslintorgdocsuser-guidecommand-line-interface)
5. [Other Useful Tools](#other-useful-tools)
6. [Outdated](#outdated)

<!-- /TOC -->

## Overview

[Node, Grunt, Bower and Yeoman - A Modern web dev's Toolkit](http://juristr.com/blog/2014/08/node-grunt-yeoman-bower)

Tools for automation in web development:
- **webpack**: Module bundler
- **Bower**: Package manager for the web
- **Grunt** and **Gulp**: Task automation
- **Yo**: Web app scaffolding
- **Yeoman**: Workflow designed around using Yo, Bower and Grunt

Note: you can use npm scripts + webpack for all your webdev needs.


## Node.js and Node Package Manager

1. Install [Node.js](https://nodejs.org), put PATH variable ***C:\Program Files\nodejs\\*** above ***C:\Users\vpesh\AppData\Roaming\npm*** and check installation:  
`> node -v`  
`> npm -v`

2. `npm install -D node-sass postcss-cli autoprefixer`

3. package.json

```json
{
  ...
  "scripts": {
    "scss": "node-sass --output-style compressed -o css scss",
    "autoprefixer": "postcss css/**/*.css -u autoprefixer -r css/**/*.css",
    "build:css": "npm run scss && npm run autoprefixer"
  }
  ...
}
```

4. To run single task: `npm run scss`  
To run combined tasks: `npm run build:css`


## webpack



## [ESLint](http://eslint.org/docs/user-guide/command-line-interface)

[ESLint and React](http://www.zsoltnagy.eu/use-eslint-like-a-pro-with-es6-and-react/)


## Other Useful Tools

- [Postman](https://www.getpostman.com/): A powerful GUI platform to make your API development faster & easier
- [Stackshare](https://stackshare.io/): Discover technology stacks and find the best software tools


## Outdated

### Less

`> npm install -g less`  
`> lessc mystyles.less > mystyles.css`

### Grunt

Grunt is useful when you are automating multiple tasks that are done repeatedly.

1. Install grunt-cli globally:  
`> npm install -g grunt-cli`

2. Put `Gruntfile.js` or `Gruntfile.coffee` to project root folder.

3. Put `package.json` to project root folder. Template:

``` json
{
  "name": "my-project-name",
  "version": "0.1.0",
  "devDependencies": {
    "grunt": "~0.4.5",
    "grunt-contrib-jshint": "~0.10.0",
    "grunt-contrib-nodeunit": "~0.4.1",
    "grunt-contrib-uglify": "~0.5.0"
  }
}
```

4. Install Grunt and gruntplugins locally:  
`> npm install grunt --save-dev`  
`> npm install grunt-contrib-jshint --save-dev`


### Bower

[Bower 101](https://medium.com/@ZaidHanania/bower-101-c0b57322df8#.yzfz1dmas)

- Helps manage dependencies: frameworks, libraries, assets, utilities etc. that are required for building your web site
- e.g., Bootstrap, Font Awesome, JQuery etc.
- Fetches all the components required for building your website
- Used together with the remaining tools in our workﬂow

1. Installing Bower:  
`> npm install -g bower`

2. Creating `bower.json` File:  
`> bower init`

Example of `bower.json`:

``` json
{
  "name": "conFusion",
  "version": "1.0.0",
  "description": "Website for an awesome restaurant",
  "main": "index.html",
  "moduleType": [],
  "keywords": [
    "conFusion",
    "Fusion",
    "Restaurant"
  ],
  "authors": [
    "Jogesh Muppala"
  ],
  "license": "MIT",
  "homepage": "",
  "ignore": [
    "**/.*",
    "node_modules",
    "bower_components",
    "test",
    "tests"
  ],
  "dependencies": {
    "bootstrap": "~3.3.5",
    "font-awesome": "~4.4.0",
    "angular": "~1.4.7"
  }
}
```

3. Installing Bower Components:  
`> bower install`
or
`> bower install bootstrap -S`  
`> bower install font-awesome -S`  
The `-S` flag indicates that package should be saved as a dependency for our project in the `bower.json` file.

4. Update links in files:

``` html
<link href="bower_components/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet">
<link href="bower_components/bootstrap/dist/css/bootstrap-theme.min.css" rel="stylesheet">
<link href="bower_components/font-awesome/css/font-awesome.min.css" rel="stylesheet">
...
<script src="bower_components/jquery/dist/jquery.min.js"></script>
<script src="bower_components/bootstrap/dist/js/bootstrap.min.js"></script>
```

List globally installed packages:  
`> npm ls -g --depth=0`