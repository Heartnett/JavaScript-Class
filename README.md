# JavaScript-Class
A simple JavaScript class implementation.

## Basic Usage

Create a new instance of the Class object.
```sh
var instance = new Class();
```
Add some properties and functions to the new instance.
```sh
instance.value = "instance value - yay!";
instance.doSomething = function() {
    console.log('I wrote something on the console!');
};
```

## More Usage

Create a new instance of the Class object with its properties and functions.
```sh
var instance = new Class({
    value: "a new value!",
    someFunction: function() {
        console.log('I'm supposed to do something here...');
    }
});
```
Use the class instance like normal.
```sh
console.log( instance.value );    // a new value!
instance.someFunction();    // 'I'm supposed to do something here...'
```

## Advanced Usage

Here is where it gets interesting...

Create a new class type.
```sh
var JsObject = Class.define();
````

Create a new instance of this new class.
```sh
var instance = new JsObject({
    numberValue: 1234567,
    getNumberPlusOne: function() {
        return this.numberValue + 1;
    }
};
```
Ok, let's make sure `instance` is an actual instance of this `JsObject` class.
```sh
var isJsObject = typeof instance === "JsObject";
console.log( isJsObject );    // true
```
Use the `JsObject` instance like normal.
```sh
console.log( instance.numberValue );    // 1234567
console.log( instance.getNumberPlusOne() );    // 1234568
```
