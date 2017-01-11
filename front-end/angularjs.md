<!-- TOC depthTo:6 orderedList:false -->

- [MVC Framework](#mvc-framework)
- [Getting Started using Angular](#getting-started-using-angular)
- [Angular Built-in Directives](#angular-built-in-directives)

<!-- /TOC -->

[Official Guide](https://docs.angularjs.org/guide)


## MVC Framework

**Model**
- manages the behavior and data of the application domain
- responds to requests for information about its state (usually from the view)
- responds to instructions to change state (usually from the controller)
- In event-driven systems, the model notifies observers (usually views) when the information changes so that they can react

**View**
- renders the model into a form suitable for interaction, typically a user interface element 
- Multiple views can exist for a single model for different purposes
- A viewport typically has a one to one correspondence with a display surface and knows how to render to it

**Controller**
- receives user input and initiates a response by making calls on model objects
- A controller accepts input from the user and instructs the model and viewport to perform actions based on that input


## Getting Started using Angular

``` html
<html lang="en" ng-app>
    <body>
        ...
        <script src="scripts/angular.min.js"></script>
    </body>
</html>
```

An Angular module is a collection of:

- Controllers
- Directives
- Filters
- Services
- Other configuration information


## Angular Built-in Directives

The `ng-app` directive is applied to specify the root of the application.  
Applying to `<html>` tag means entire page is under the control of the Angular application.

The `ng-init` directive is used to initialize a JavaScript variable or to evaluate an expression (No conditionals, loops or exceptions):

``` html
<p ng-init="index = 1"><p>
<div class="row row-content" ng-init="dish = { name:'Uthapizza', ... }"></div>
```

``` html
<p>6 + 5 = {{ 6 + 5 }}</p>
<div class="media-body">
    <h2	class="media-heading"> {{dish.name}} </h2>
    <p> {{dish.description}} </p>
</div>
```

The `ng-model` directive binds (two-way) the input value to a variable within the scope.  
*Two-way Data Binding* - Binding an HTML or CSS property to a JavaScript variable. When the value of the variable is updated, the HTML/CSS property is also updated. Also works vice-versa with `<input>` fields.

``` html
<div class="media-body">
    ...
    <p> {{dish.description}} </p>
    <p>Comment: {{dish.comment}} </p>
    <p>Type your comment:
        <input type="text" ng-model="dish.comment"></p>
</div>
```

The	`ng-repeat` directive is a looping construct.
- Loops over items in a collection
- Instantiates a template for each item

``` html
<ul class="media-list"
    <li class="media" ng-repeat="dish in dishes">
    ...
    </li>
</ul>
```