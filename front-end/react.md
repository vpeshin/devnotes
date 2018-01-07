<!-- TOC depthTo:2 orderedList:true -->

1. [Installing](#installing)
2. [Components](#components)
3. [State](#state)

<!-- /TOC -->

## Installing

`> npm i -g create-react-app`  
`> create-react-app project_name`  
`> cd project_name`  
`> npm start`


## Components

Start with functional components. When you need added functionality, refactor to class components.

index.js:

```js
import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}
```

### Using Functional Components

search_bar.js:

```js
import React from 'react';

const SearchBar = () => {
  return <input />;
};

export default SearchBar;
```

### Using Class Components

search_bar.js:

```js
import React, { Component } from 'react';

class SearchBar extends Component {   // class SearchBar extends React.Component
  // Define method
  render() {
    return <input />;
  }
}

export default SearchBar;
```

or:

```js
class SearchBar extends Component {
  render() {
    return <input onChange={(event) => console.log(event.target.value)} />;
  }
}
```


## State

State is plain JavaScript object that is used to record and react to user events. Each class-based component has its own state object.  
All JS classes have a special function called constructor. The constructor is the first and only function called automatically whenever new instance of class is created.

```js
class SearchBar extends Component {
  // initialize state
  constructor(props) {
    super(props);
    this.state = { searchTerm: '' };
  }
  
  render() {
    return (
      <div>
        value={this.state.searchTerm}
        <input onChange={(event) => this.setState({ searchTerm: event.target.value })} />
      </div>
    );
  }
}
```
