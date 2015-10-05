// This is a test file for: FizzBuzzer.js
// run with mocha testing framework
var assert = require("assert");
var FizzBuzzer = require('./FizzBuzzer.js');

describe('FizzBuzzer', function() {
  var fbz = new FizzBuzzer();
  describe('#getSequence()', function (){
    it('should return "FizzBuzz" instead number 15', function () {
      var sequence = fbz.getSequence();
      assert.equal("FizzBuzz", sequence[14]);
    });
  });
  describe('#setFizzValue()', function (){
    it('should not set fizzValue to a string value', function () {
      fbz.setFizzValue("x");
      assert.equal(3, fbz.getFizzValue());
    });
    it('should not set fizzValue to a negative value', function () {
      fbz.setFizzValue(-5);
      assert.equal(5, fbz.getFizzValue());
    });
    it('should set fizzValue to a positive integer', function () {
      fbz.setFizzValue(-5.8);
      assert.equal(5, fbz.getFizzValue());
    });
  });
  describe('#setBuzzValue()', function (){
    it('should not set buzzValue to undefined', function () {
      fbz.setBuzzValue();
      assert.equal(false, fbz.setBuzzValue());
    });
    it('should not set buzzValue to NaN', function () {
      fbz.setBuzzValue(NaN);
      assert.equal(false, fbz.setBuzzValue());
    });
    it('should set buzzValue to an integer', function () {
      fbz.setBuzzValue(5);
      assert.equal(5, fbz.getBuzzValue());
    });
  });
});
