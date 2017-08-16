<!-- TOC orderedList:false -->

- [Setup](#setup)
  - [Import Bootstrap](#import-bootstrap)
- [How an Angular Gets Loaded](#how-an-angular-gets-loaded)
- [Components](#components)

<!-- /TOC -->


## Setup

`> npm install -g @angular/cli`  
`> ng new my-app`  
`> cd my-app`  
`> ng serve`

### Import Bootstrap

- `> npm i --save bootstrap`
- .angular-cli.json:  

```json
"styles": [
  "../node_modules/bootstrap/dist/css/bootstrap.min.css",
  "styles.css"
],
```

Behind the scenes, the CLI uses ***Webpack***, a tool which bundles all your JS and CSS files and adds them to the `index.html`.


## How an Angular Gets Loaded

`app.component.ts`:

```ts
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
```

`index.html`:

```html
<body>
  <app-root></app-root>
</body>
```

The first code to be executed is the code in `main.ts`. It bootstraps (starts) our Angular application by passing `AppModule` to method `bootstrapModule()`.  
`AppModule` refers to file `app.module.ts`.


## Components

