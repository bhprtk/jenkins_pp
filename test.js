const assert = require('assert')
describe('Array', function() {
  describe('#indexOf()', function() {
    it('test 1', function(done){
      let product = 1
      for(let i = 1; i < 9999999999999; i++){ 
        for(let j = 1; j < 99999999999; j++) {
          for(let k = 1; k < 9999999999; k++){ 
            product *= i
          }
        }
      }
        assert.equal(-1, [1,2,3].indexOf(4))
        done()
    })
    it('test 2', function(done){
        assert.equal(-1, [1,2,3].indexOf(4))
        done()
    })
  })
})