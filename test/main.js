(function(){
  'use strict';

  const assert = require('assert');
  const Enum = require("../index");

  describe('Enum:', function(){

    it("Enum should accept a dictionary (object) as input", function(){
      new Enum({"A":1, "B": 2});
    });

    it("Enum should have only three members", function(){
      let foo = new Enum({"A":1, "B": 2, "C": 3});
      assert.equal(foo.keys.length, 3);
    });

    it("Enum keys should be available as object members", function(){
      let foo = new Enum({"A":1, "B": 2});
      assert(foo.A == 1 && foo.B == 2);
    });

    it("Enum should have two members: A and B", function(){
      let foo = new Enum({"A":1, "B": 2});
      assert(foo.has("A") && foo.has("B"));
      assert(!foo.has("C"));

      let members = foo.keys;
      assert(members.indexOf("A") != -1);
      assert(members.indexOf("B") != -1);
      assert.equal(members.indexOf("C"), -1);
    });

    it("Enum should have two values: 1 and 2", function(){
      let foo = new Enum({"A":1, "B": 2});
      assert(foo.has(1) && foo.has(2));
      assert(!foo.has(3));

      let values = foo.values;
      assert(values.indexOf(1) != -1);
      assert(values.indexOf(2) != -1);
      assert.equal(values.indexOf(3), -1);
    });
  });

})();
