# enum-support
Support for enums in javascript

#### About
This modules provides a very simple interface for creating enums in javascript that are based in pairs of key & value where the key has to be defined in "Capital" and the value has be defined as a number. Also, this module makes sure that members of the enum don't have duplicated values, among other things.

#### Install
npm install enum-support --save

#### Usage
Creating an Enum
```javascript
const Enum = require('enum-support');

MyEnum = new Enum({"A": 1, "B": 2});
```

Accessing the enum
```javascript

// returns the value of A (1)
MyEnum.A;

// returns the value of B (2)
MyEnum.B;
```

Checking if key or value are part of the enum
```javascript

// C is not part of the enum, returns false
MyEnum.has("C");

// Also, the value can be used to check if that is part of the enum, returns true
MyEnum.has(1);
```

Querying key and value from the enum
```javascript

// querying key from a value, returns "A"
MyEnum.key(1);

// querying value from a key, returns 1
MyEnum.value("A");
```

Querying enum contents
```javascript
// Retuns a list containing the keys, returns ["A", "B"]
MyEnum.keys;

// Retuns a list containing the values, returns [1, 2]
MyEnum.values;
```

Example
```javascript
const assert = require("assert");
const Enum = require('enum-support');

class Pet {
  constructor(specie){
    assert(Pet.Specie.has(specie), "Invalid Pet Specie!");
    
    // printing the name of the specie
    console.log(Pet.Specie.key(specie));
  }
}

// creating the enum
Pet.Specie = new Enum({"Dog": 1, "Cat": 2});

var myPet = new Pet(Pet.Specie.Dog);
```

#### Requirements
This module requires support for es6+

Please feel free to contact me if you have any questions.
