<!-- TOC depthTo:2 orderedList:true -->

1. [Configure a Windows Service for MongoDB](#configure-a-windows-service-for-mongodb)
2. [Mongo Shell](#mongo-shell)
3. [Mongoose](#mongoose)
4. [RESTful Routing](#restful-routing)

<!-- /TOC -->

## Configure a Windows Service for MongoDB

- Open an Administrator command prompt.
- `mkdir c:\data\db`
- `mkdir c:\data\log`
- create a file C:\data\mongod.cfg:

```
systemLog:
    destination: file
    path: c:\data\log\mongod.log
storage:
    dbPath: c:\data\db
```

- `"C:\Program Files\MongoDB\Server\3.4\bin\mongod.exe" --config "C:\data\mongod.cfg" --install`
- `net start MongoDB`

To stop the MongoDB service:
- `net stop MongoDB`

To remove the MongoDB service:
- `"C:\mongodb\bin\mongod.exe" --remove`

To connect to MongoDB through the mongo.exe shell:
- `mongo.exe`


## Mongo Shell

Command           | Description 
------------------|------------------------
`show dbs`        | Show database names
`use dbname`      | Switch to database `dbname`
`db.dogs.insert()`| Insert dogs collection into current database
`db.dogs.insert({ name: "Rusty", breed: "Mutt })`|
`show collections`|
`db.dogs.find()`  |
`db.dogs.find({ breed: "Mutt" })`| Find all mutt dogs
`db.dogs.update({ name: "Lulu" }, { breed: "Poodle" })`| Update dog
`db.dogs.update({ name: "Rusty" }, { $set: { name: "Tater", isCute: true } })`| Update name and add new property `isCute` but preserve breed
`db.dogs.remove({ breed: "Poodle" })`|
`db.dogs.remove({ breed: "Poodle" }).limit(1)`|
`db.dogs.drop()| Delete collection


## Mongoose

`npm install mongoose --save`

```js
var mongoose = require('mongoose');
// connect to database or create a new one
mongoose.connect('mongodb://localhost/cat_app');

var catSchema = new mongoose.Schema({
  name: String,
  age: Number,
  temperament: String
});

// compile schema into model (so we can use Cat methods)
var Cat = mongoose.model('Cat', catSchema);

// add new cat to database
Cat.create({
  name: 'George',
  age: 11,
  temperament: "Grouchy"
}, function(err, cat) {
  if (err) {
    console.log('Something went wrong');
  } else {
    console.log('We just saved a cat to the db');
    console.log(cat);
  }
});

// retrieve all cats from database and console.log each one
Cat.find({}, function(err, cat) {
  if (err) {
    console.log("ERROR!");
    console.log(err);
  } else {
    console.log('All the cats:');
    console.log(cat);
  }
});
```


## RESTful Routing

**REST** - a mapping between HTTP routes and CRUD (Create-Read-Update-Destroy)

Action	| Method | URL | Description | Mongoose Method
--------|--------|-----|-------------|----------------
INDEX   | GET    | /dogs | List all dogs | Dog.find()
NEW	    | GET    | /dogs/new | Show new dog form | N/A
CREATE	| POST   | /dogs | Create a new dog, then redirect somewhere | Dog.create()
SHOW	  | GET    | /dogs/:id | Show info about one specific dog | Dog.findById()
EDIT	  | GET    | /dogs/:id/edit | Show edit form for one dog | Dog.findById()
UPDATE	| PUT    | /dogs/:id | Update particular dog, then redirect somewhere | Dog.findByIdAndUpdate()
DESTROY	| DELETE | /dogs/:id | Delete a particular dog, then redirect somewhere | Dog.findByIdAndRemove()