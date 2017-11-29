<!-- TOC orderedList:false -->

- [Typing](#typing)
- [Classes](#classes)
- [Interfaces](#interfaces)
- [Generics](#generics)
- [Modules](#modules)

<!-- /TOC -->


## Typing

```ts
let myString: string;
myString = 'This is a string';

let anotherString = 'This is a string without :string';

let yetAnotherString; // = let yetAnotherString: any;

// Other basic types
let aString: string;
let aNumber: number;
let aBoolean: boolean;
let anArray: Array<string>; // This is a generic type => May only hold 'strings' in this case
let anything: any; // Any can be used if we don't know the actual type => Use it rarely!
// We also got void (=> nothing) and enums (a set of numeric values)
```


## Classes

Classes allow us to create 'blueprints' for objects.  
In Angular 2 we use classes a lot. For example to create Components, Services, Directives, Pipes, ...

```ts
class Car {
    engineName: string;
    gears: number;
    private speed: number;

    constructor(speed: number) {
        this.speed = speed || 0;
    }

    accelerate(): void {
        this.speed++;
    }

    throttle(): void {
        this.speed--;
    }

    getSpeed(): void {
        console.log(this.speed);
    }

    // static method is callable without instantiating new object
    static numberOfWheels(): number {
        return 4;
    }
}

// Instantiate (create) an object from a class
let car = new Car(5);
car.accelerate();
car.getSpeed(); // 6
console.log(Car.numberOfWheels()); // 4
```


## Interfaces

Interfaces allow us to create contracts other classes/objects have to implement.  
We can use them to define custom types without creating classes.  
Interfaces ARE NOT compiled to JavaScript. It's just for checking/validation done by our TypeScript compiler.

```ts
interface User {
    username: string;
    password: string;
    confirmPassword?: string; // Optional property => Does not have to be implemented
}

let user: User;

// This value does not satisfy the interface => Compilation error
// user = { anything: 'anything', anynumber: 5};

// This value does satisfy the interface
user = {username: 'max', password: 'supersecret'};
```

Interfaces can also contain functions (without the function body - as it only is a blueprint/requirement).

```ts
interface CanDrive {
    accelerate(speed: number): void;
}

let car:CanDrive = {
    accelerate: function (speed: number) {
        // ...
    }
};
```


## Generics

Generics are types which can hold/use several types.

```ts
// Consider the Array object
let numberArray: Array<number>; // This array will only accept numbers

// Try to initialize it with strings
numberArray = ['test']; // => Error

numberArray = [1,2,3]; // OK
```


## Modules

TypeScript is modular, we can divide our code up over several files.  
In Angular 2 we then use `import {} from ''` to access the code in these files.  
We export a class, interface, variable, ... by adding `export` keyword in front of it.

```ts
export class ExportedClass {
    // This class is exported
}
```