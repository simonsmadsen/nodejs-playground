var assert = require('chai').assert;
var factory = require('./../learning/factory-functions.js');

describe('factory functions', function() {
  
    it('return an user with a hallo prop and its a function', function() {
    	const simon = factory.user('Simon');
        assert.property(simon,'hallo');
        assert.isFunction(simon.hallo,'great, user has a hallo function');
    });

    it('return a dog with a sound prop and its a function', function(){
        const gus = factory.dog();
        assert.property(gus,'sound');
        assert.isFunction(gus.sound,'great, user has a hallo function');
    });

});