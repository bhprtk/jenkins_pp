const assert = require('assert')
describe('Array', function() {
  describe('#indexOf()', function() {
    it('test 1', function(done){
      let product = 1, limit = 10000000000000, primes = 0
      for (num = 1; num <= limit; num++) { 
        let i = 2; 
        while(i <= num) { 
            if(num % i == 0)
                break;
            i++; 
        }
        if(i == num)
            primes++;
      }
      // while(true){
      //   assert.equal(-1, [1,2,3].indexOf(4))
      //   done()

      // }
    })
    it('test 2', function(done){
        assert.equal(-1, [1,2,3].indexOf(4))
        done()
    })
  })
})