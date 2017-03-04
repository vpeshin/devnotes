## npm

- `npm install express`
- add to `app.js`:

```js
var express = require("express");
var app = express()
 
app.get('/', function (req, res) {
  res.send('Hello World')
})
 
app.listen(3000)
```

VSCode auto-completion:
- `npm install typings -g`
- `typings search express` or `typings search --name express`
- `typings install dt~express -Sg`
