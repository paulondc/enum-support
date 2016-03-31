'use strict';

const assert = require('assert');
const TypeCheck = require('js-typecheck');

// Provides a simple Enum functionality, enums are defined as key & value, for example:
// FooClass.Modes = new Enum({'A': 1, 'B': 2});
class Enum {

  constructor(members){
    assert(TypeCheck.isObject(members), "members argument needs to be an object");
    assert(Object.keys(members).length > 0, "members cannot be empty!");

    this.__memberKeys = [];
    this.__memberValues = [];

    for (let member in members){
      let value = members[member];
      assert((TypeCheck.isString(member) && member.length), "member key needs to be defined as valid string!");
      assert(TypeCheck.isNumber(value), "member value needs to be defined as integer!");
      assert((this.__memberValues.indexOf(value) === -1), "member value cannot be duplicated!");
      assert((member.slice(0, 1) === member.slice(0, 1).toUpperCase()), "member key needs to start in Capital!");

      this.__memberKeys.push(member);
      this.__memberValues.push(value);

      // making the member also available as this.MemberName
      this[member] = value;
    }
  }

  // Returns if the input (either key or value) is part of the Enum
  has(input){
    if (TypeCheck.isString(input) && this.value(input) || TypeCheck.isNumber(input) && this.key(input)){
      return true;
    }

    return false;
  }

  // Returns the integer value of the input key
  value(key){

    assert(TypeCheck.isString(key), "key needs to be defined as string!");

    let index = this.__memberKeys.indexOf(key);

    if (index !== -1){
      return this.__memberValues[index];
    }
    else {
      return null;
    }
  }

  // Returns the string key for the input value
  key(value){

    assert(TypeCheck.isNumber(value), "value needs to be defined as integer!");

    let index = this.__memberValues.indexOf(value);

    if (index !== -1){
      return this.__memberKeys[index];
    }
    else {
      return null;
    }
  }

  // Returns a list of string key names
  get keys(){
    return this.__memberKeys;
  }

  // Returns a list of integer value names
  get values(){
    return this.__memberValues;
  }
}

module.exports = Enum;
