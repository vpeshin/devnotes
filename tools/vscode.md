<!-- TOC depthTo:2 orderedList:true -->

1. [IntelliSense for jQuery](#intellisense-for-jquery)
2. [Tasks](#tasks)
3. [Git](#git)
4. [Bootstrap code completion](#bootstrap-code-completion)
5. [Sass](#sass)
6. [Keyboard Shortcuts](#keyboard-shortcuts)

<!-- /TOC -->

## IntelliSense for jQuery

If you use `npm` and have a `package.json` in your project and jQuery is listed there, it should already work.

If you do not use `npm`, you can create the file `jsconfig.json` in the project root:

```json
{
  "typeAcquisition": {
    "include": [
      "jquery"
    ]
  }
}
```


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
2. [obsolete?] Add an resource.json file inside your .vscode or project root folder, you can configure paths to your used style sheets.
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

Remote style sheets can be specified in VS Code settings:

```json
"css.remoteStyleSheets": [
  "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css"
]
```


## Sass

### Sass and npm Scripts

1. `npm install -D node-sass postcss-cli autoprefixer`

2. package.json:

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

3. To run single task:  
F1 -> Tasks: Run Task  
or
`npm run scss`

To run combined tasks:  
Ctrl+Chift+B  
or
`npm run build:css`

### Sass and VSCode Tasks

1. `npm install -g node-sass`

2. F1 -> Configure Task Runner -> Others. `tasks.json`:

```json
{
  "version": "2.0.0",
  "tasks": [
    {
      "taskName": "Sass Compile",
      "type": "shell",
      "command": "node-sass -o css scss",
      "group": "build",
      "problemMatcher": []
    }
  ]
}
```

3. Ctrl+Shift+B 

### Sass and Gulp

1. `npm install -g gulp`  
`npm install gulp gulp-sass gulp-autoprefixer`

2. F1 -> Configure Task Runner -> Others. `tasks.json`:

```json
{
    "version": "0.1.0",
    "command": "gulp",
    "isShellCommand": true,
    "echoCommand": true,
    "tasks": [{
        "taskName": "sass",
        "suppressTaskName": true,
        "args": [
            "default"
        ],
        "isBuildCommand": true,
        "showOutput": "always",
        "isBackground": true
    }]
}
```

3. Create `gulpfile.js` at the project's root:

```js
// Sass configuration
var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('default', function() {
    gulp.src('sass/**/*.scss')
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(sass())
        .pipe(autoprefixer())        
        .pipe(gulp.dest('css'));
});

// gulp.task('default', ['sass'], function() {
//   gulp.watch('sass/*.scss', ['sass']);
// });
```

4. Ctrl+Shift+B


## Keyboard Shortcuts

Basic Editing    |                |
-----------------|----------------
Ctrl+Shift+K     |Delete Line
Alt+Down         |Move Line Down
Shift+Alt+Down   |Copy Line Down
Ctrl+Shift+J     |Join Lines
Ctrl+D           |Select Word / Add Selection To Next Find Match
Ctrl+F2          |Select all occurrences of current word
Ctrl+Shift+L     |Select all occurrences of current selection
Ctrl+I           |Select Line
Ctrl+W			     |Expand Selection
Ctrl+Shift+W	   |Shrink Selection
Ctrl+U           |Undo last cursor operation
Ctrl+Alt+Down    |Insert Cursor Below (Multiple Cursors)
Alt+LMB          |Insert Cursor
Ctrl+Shift+\     |Jump to matching bracket
Ctrl+]           |Indent Line
Ctrl+/           |Toggle Line Comment
Ctrl+Shift+/     |Toggle Block Comment [edited Shift+Alt+A]
Shift+Alt+LMB	   |Column Selection
Alt+W            |Wrap selection with Abbreviation (Emmet)
Ctrl+Q           |Quick Documentation


Rich Languages Editing||
------------------|----------------
Shift+Alt+F       |Format Document
Ctrl+K Ctrl+F	    |Format Selection
F12               |Go to Definition
Alt+F12           |Peek Definition
Ctrl+F12          |Go to Implementation
Alt+F12           |Peek Definition
Ctrl+.            |Quick Fix
Shift+F12         |Show References
F2                |Rename Symbol
Ctrl+Shift+.      |Replace with Next Value
Ctrl+Shift+,      |Replace with Previous Value
Ctrl++      	    |Fold
Ctrl+-	          |Unfold
Ctrl+K Ctrl+0	    |Folds all regions in the editor
Ctrl+K Ctrl+J     |Unfolds all regions in the editor
Ctrl+K Ctrl+2 	  |Folds all regions of level 2, except the region at the current cursor position
Ctrl+Alt+D Ctrl+Alt+D |Document This (js and ts)

Navigation||
------------------|----------------
Ctrl+G            |Go to Line...
Ctrl+P            |Go to File...
Ctrl+Shift+O      |Go to Symbol in File
Ctrl+T            |Go to Symbol in Workspace
Ctrl+Shift+M      |Show Errors and Warnings
F8                |Go to Next Error or Warning
Shift+F8          |Go to Previous Error or Warning
Ctrl+Shift+P      |Show All Commands
Ctrl+Tab          |Navigate History
Alt+Left          |Go Back
Alt+Right         |Go Forward

Editor/Window Management||
------------------|----------------
Ctrl+\            |Split Editor
Ctrl+`            |Cycle Between Opened Editors
Ctrl+1            |Focus into Left Hand Editor
Ctrl+Alt+Right    |Focus into Next Editor on the Right

Display||
------------------|----------------
F11               |Toggle Full Screen
Ctrl+K Z          |Zen Mode
Ctrl+B            |Toggle Sidebar Visibility
Ctrl+J            |Toggle Panel
Ctrl+Shift+D      |Show Debug
Ctrl+Shift+E      |Show Explorer
Ctrl+Shift+F      |Show Search
Ctrl+Shift+J      |Toggle Search Details
Ctrl+Shift+C      |Open New Command Prompt
Ctrl+Shift+U      |Show Output
Ctrl+Shift+M      |Show Problems
Ctrl+Shift+V	    |Open Markdown Preview
Ctrl+K V		      |Open Markdown Preview to the Side

Debug||
------------------|----------------
F9                |Toggle Breakpoint
F5                |Continue / Pause
F11               |Step Into
Shift+F11         |Step Out
F10               |Step Over
Shift+F5          |Stop
Ctrl+Shift+F5	    |Restart
Ctrl+F5			      |Run Mode

Tasks||
------------------|----------------
Ctrl+Shift+B      |Run Build Task
Ctrl+Shift+T      |Run Test Task
Ctrl+Shift+R      |Run Task

Colonize Plugin||
------------------|----------------
Shift+Enter       |Insert semicolon at the end of line
Ctrl+Enter        |Insert semicolon at the end of line and continue on the new line (remapped)
Alt+Enter         |Continue on the new line (standard remapped)