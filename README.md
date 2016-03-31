# js-typecheck
Use enums in javascript

#### About
This modules provides a very simple interface for creating safe enums in javascript that are based in pairs of key & value.

```javascript
const Enum = require('js-enum');

class Pet {
  constructor(specie){
    console.log(Pet.Specie.has(specie));
  }
};

// creating the enum
Pet.Specie = new Enum({"Dog": 1, "Cat": 2});

var myPet = new Pet(Pet.Specie.Dog);
```

#### Requirements
This module requires support for es6+

#### Install
npm install js-enum --save

Please feel free to contact me if you have any questions.
