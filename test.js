const assert = require('assert')
describe('Array', function() {
  describe('#indexOf()', function() {
    // Stress test to use 80% CPU
    if('test 1', function(done) {
      while(true) {
        assert.equal(-1, [1,2,3].indexOf(4))
      }
    })
    // Test to be scheduled after the stress test.
    it('test 2', function(done){
      assert.equal(-1, [1,2,3].indexOf(4))
      done()
    })
  })
})