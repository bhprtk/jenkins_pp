const assert = require('assert')
describe('Array', function() {
  describe('#indexOf()', function() {
    it('test 1', function(done){
      let product = 1
      for(let i = 0; i < 1000000000000000; i++) {
        assert.equal(-1, [1,2,3].indexOf(4))
        done()
        for(let j = 0; j < 10000000000000000; j++) {
          assert.equal(-1, [1,2,3].indexOf(4))
          done()
          for(let k = 0; k < 100000000000000; k++) {
            assert.equal(-1, [1,2,3].indexOf(4))
            done()
          }
        }
      }
    })
    it('test 2', function(done){
        assert.equal(-1, [1,2,3].indexOf(4))
        done()
    })
  })
})