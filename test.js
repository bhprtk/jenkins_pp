const assert = require('assert')
describe('Array', function() {
  describe('#indexOf()', function() {
    it('test 1', function(done){
      let product = 1
      for(let i = 0; i < 100000000; i++) {
        assert.equal(-1, [1,2,3].indexOf(4))
      }
      done()
    })
  })
})