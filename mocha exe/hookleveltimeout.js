/*describe('a suite of tests', function() {
  beforeEach(function(done) {
    this.timeout(3000); // A very long environment setup.
    setTimeout(done, 2500);
  });
});*/
var expect = require('chai').expect;

describe('Math', function() {  
    describe('#abs()', function() {
        it('should return positive value of given negative number', function() {
            expect(Math.abs(-5)).to.be.equal(5);
        });
    });
});



describe('a suite of tests', function() {
    this.timeout(500);
  
    it('should take less than 500ms', function(done){
      setTimeout(done, 300);
    });
  
    it('should take less than 500ms as well', function(done){
      setTimeout(done, 250);
    });
  })