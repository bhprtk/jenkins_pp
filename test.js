const assert = require('assert')
describe('Array', function() {
  describe('#indexOf()', function() {
    it('test 1', function(done){
      while(true) {
        assert.equal(-1, [1,2,3].indexOf(4))
      }
      done()
    })
  })
})