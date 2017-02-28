<!-- TOC depthTo:2 orderedList:true -->

1. [Node.js](#nodejs)
2. [IntelliSense for Node.js modules](#intellisense-for-nodejs-modules)
3. [Tasks](#tasks)

<!-- /TOC -->

## Node.js

1. Install [Node.js](https://nodejs.org/en/)
2. `mkdir nodehttp`
3. `cd nodehttp`
4. `npm init`
5. `npm install express -S`
6. Create `server.js`. Example: 

```js
var express = require('express');
var app = express();
 
app.get('/', function(req, res) {
 res.send('Hello Express');
});
 
app.listen(3000, function() {
 console.log("Server is running at 3000 port!");
});
```

7. `node server`


## IntelliSense for Node.js modules

1. [Optional?] Create `jsconfig.json` file at the root of your JavaScript project:

``` json
{
    "compilerOptions": {
        "target": "ES6"
    },
    "exclude": [
        "node_modules"
    ]
}
```

2. `npm install typings -g`
3. `typings search jquery` or `typings search --name jquery`
4. `typings install dt~jquery -Sg`  
`typings install dt~express -Sg`


## Tasks

### npm Tasks

- Ctrl+Shift+P => Tasks: Configure Task Runner => npm
- Add npm tasks in `tasks.json`. Example :

``` json
"tasks": [
		{
			"taskName": "lint",
			"args": ["run", "lint"]
		}
]
```

- Ctrl+P => task task_name

### Grunt Tasks

- Ctrl+Shift+P => Tasks: Configure Task Runner => Grunt
- Ctrl+P => task task_name
