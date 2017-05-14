<!-- TOC depthTo:2 orderedList:true -->

1. [IntelliSense for Node.js modules](#intellisense-for-nodejs-modules)
2. [Tasks](#tasks)
3. [Git](#git)
4. [Bootstrap code completion](#bootstrap-code-completion)

<!-- /TOC -->

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


## Git

`git config --global user.name vpeshin`
`git config --global user.email 'vl.peshin@gmail.com'`

Retrieve existing repository  
`git clone https://github.com/vpeshin/bookmarks.git`

Push local repository  
Ctrl+Shift+G => Initialize Git Repository  

Open github.com and create a Repo. Copy the path to the .git for later use.

Using the terminal, navigate to the location where your vscode project is and type the following:  
`git remote add origin https://github.com/vpeshin/SampleProject.git`  
Add another remote repository:  
`git remote set-url --add --push origin https://gitlab.com/vpeshin/SampleProject.git`

Create a .gitignore file in your project's root directory.  
`copy NUL .gitignore`

Example of .gitignore:  
#ignore everything  
*.*  
#except .c source  
!*.c

### Console git workflow:  
- `git config --global user.name vpeshin`
- `git config --global user.email 'vl.peshin@gmail.com'`
- `git clone https://github.com/vpeshin/bookmarks.git`
- `git init`
- `git status`
- `git add .`
- `git commit -m 'initial commit'`
- `git push -u origin master`
- `git log`


## Bootstrap code completion

1. `ext install vscode-html-css`
2. Add an resource.json file inside your .vscode or project root folder, you can configure paths to your used style sheets.
3. Example of resource.json file:

```json
{
  "css": {
    "site": [
      "node_modules/bootstrap/dist/css/bootstrap.css",
      "node_modules/font-awesome/css/font-awesome.css",
      "node_modules/awesome-bootstrap-checkbox/awesome-bootstrap-checkbox.css",
      "node_modules/select2/dist/css/select2.css",
      "node_modules/select2-bootstrap-theme/dist/select2-bootstrap.css"
    ],
    "style": [
      "src/main/resources/main/css/style.css"
    ]
  }
}
```