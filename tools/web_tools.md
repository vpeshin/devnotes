<!-- TOC depthTo:2 orderedList:true -->

1. [Overview](#overview)
2. [Node.js and Node Package Manager](#nodejs-and-node-package-manager)
3. [Grunt](#grunt)
4. [Less and Sass](#less-and-sass)
5. [Bower](#bower)
6. [Other Useful Tools](#other-useful-tools)

<!-- /TOC -->

## Overview

[Node, Grunt, Bower and Yeoman - A Modern web dev's Toolkit](http://juristr.com/blog/2014/08/node-grunt-yeoman-bower)

Tools for automation in web development:
- **Bower**: Package Manager for the Web
- **Grunt** and **Gulp**: Task Automation
- **Yo**: Web App Scaffolding
- **Yeoman**: Workflow designed around using Yo, Bower and Grunt


## Node.js and Node Package Manager

1. Install [Node.js](https://nodejs.org) and check installation:  
`> node -v`  
`> npm -v`

2. `package.json` example:

``` json
{
  "name": "npm-scripts-example",
  "version": "1.0.0",
  "description": "An example of how to use npm scripts over a build tool like Grunt or Gulp",
  "main": "index.js",
  "author": "Keith Cirkel <npm@keithcirkel.co.uk> (http://keithcirkel.co.uk/)",
  "license": "MIT",
  "devDependencies": {
  },
  "scripts": {
    "lint": "jshint **.js"
  }
}
```

3. Run task:  
`> npm run lint`


## Grunt

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


## Less and Sass

Install less:  
`> npm install -g less`

Compile the Less file into a CSS file:  
`> lessc mystyles.less > mystyles.css`


## Bower

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


## Other Useful Tools

- [Postman](https://www.getpostman.com/): A powerful GUI platform to make your API development faster & easier
- [Stackshare](https://stackshare.io/): Discover technology stacks and find the best software tools