const assert = require('assert')
describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function(){
      sum = 1;
        for(let i = 0; i < 99999999999999999999; i++) {
          for(let j = 1; j < 9999999999999999; j++ ) {
            for(let k = 2; k < 99999999999999; k++) {
              sum = sum * i * j * k

            }
          }
        }
        assert.equal(-1, [1,2,3].indexOf(4))
    })
  })
})