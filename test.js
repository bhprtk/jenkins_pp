const assert = require('assert')
describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function(){
      let sum = 1;
      for(let i = 0; i < 999; i++) {
        sum = sum * i
        }
        
        assert.equal(-1, [1,2,3].indexOf(4))
    })
  })
})