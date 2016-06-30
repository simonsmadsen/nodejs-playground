var assert = require('chai').assert;
var economic = require('./../learning/e-conomic.js');

describe('economic', function() {
  
    it('request all demo customers', function(done) {
        economic.getDemoCustomers((customers) => {
            assert.isArray(customers);
            done();
        })
    });
});