<!-- TOC orderedList:false -->

- [Installation](#installation)
- [Simple Application](#simple-application)

<!-- /TOC -->


## Installation

```html
<script src='https://vuejs.org/js/vue.js'></script>
<!-- <script src='https://vuejs.org/js/vue.min.js'></script> -->
```

`NPM` is the recommended installation method when building large scale applications with Vue. It pairs nicely with module bundlers such as ***Webpack*** or ***Browserify***.

`$ npm install vue`


## Simple Application

`v-on` is event listener.

```html
<div id="app">
  <input type="text" v-on:input="changeTitle">
  <p>{{ title }}</p>
</div>
```

```js
new Vue({
  el: '#app',
  data: {
    title: 'Hello World!'
  },
  methods: {
    changeTitle: function(event) {
      this.title = event.target.value;
    }
  }
});
```