<img src="data/logo.png"/>

[![Build Status](https://travis-ci.org/paulondc/enum-support.svg?branch=master)](https://travis-ci.org/paulondc/enum-support)

This modules provides a very simple interface for enums in javascript. Enum objects in this implementation are created through a plain object where the key is validated as a string in "Capital" and the value is validated as a number. Also, this module makes sure the enum does not duplicated values among its members.

#### Requirement
This module requires support for [ES6](http://es6-features.org)

#### Install
```
npm install enum-support --save
```

#### Usage
Creating an Enum
```javascript
const Enum = require('enum-support');

var Enum = new Enum({"A": 1, "B": 2});
```
---
Accessing the enum
```javascript
// returns the value of A (1)
MyEnum.A;

// returns the value of B (2)
MyEnum.B;
```
---
Checking if key or value are part of the enum
```javascript
// C is not part of the enum, returns false
MyEnum.has("C");

// Also, the value can be used to check if that is part of the enum, returns true
MyEnum.has(1);
```
---
Querying key and value from the enum
```javascript
// querying key from a value, returns "A"
MyEnum.key(1);

// querying value from a key, returns 1
MyEnum.value("A");
```
---
Querying enum contents
```javascript
// Retuns a list containing the keys, returns ["A", "B"]
MyEnum.keys;

// Retuns a list containing the values, returns [1, 2]
MyEnum.values;
```

#### Example
```javascript
const assert = require("assert");
const Enum = require('enum-support');

class Pet {
  constructor(specie){
    assert(Pet.Specie.has(specie), "Invalid Specie!");
    
    // printing the name of the specie
    console.log(Pet.Specie.key(specie));
  }
}

// adding the enum as static member of the class
Pet.Specie = new Enum({"Dog": 1, "Cat": 2});

// using it
var myPet = new Pet(Pet.Specie.Dog);
```

#### Licensing
enum-support is free software; you can redistribute it and/or modify it under the terms of the MIT License
