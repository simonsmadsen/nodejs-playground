var assert = require('chai').assert;
var higherOrderFunctions = require('./../learning/higher-order-functions');

describe('higher order functions', function() {
  
    it('mapEmails return array of strings', function() {
    	higherOrderFunctions.mapEmails()
    		.forEach(email => assert.isString(email))
    });

    it('sumAge return an integer and is at least 1', function() {
    	assert.isNumber(higherOrderFunctions.sumAge())
    	assert.isAtLeast(higherOrderFunctions.sumAge(),1)
    });

    it('all retur at least 1 user',function(){
    	assert.isAtLeast(higherOrderFunctions.all().length,1)
    });

    it('filterOnlyFemales',function(){
    	higherOrderFunctions.filterOnlyFemales()
    		.forEach(user=>assert.equal(user.gender,'female'))
    });

});