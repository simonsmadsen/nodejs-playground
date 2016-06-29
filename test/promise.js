var assert = require('chai').assert;
var promise = require('./../learning/promise.js');

describe('promise', function() {
  
    it('it reads file content', function(done) {
    	 promise.fileContent()
         .then(content=> {
            assert.isString(content)
            done();
        })
    });

    it('it catch erros', function(done){
        var thenFunc = content => {assert.isOk(false); done()}
        promise.fileContent()
            .then(thenFunc)
            .catch(done())
    });

});