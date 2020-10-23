import {describe, it} from "mocha";

describe('TestingTest', function() {
  describe('ifTestsWork()', function() {
    it('should return -1 when the value is not present', function() {
      global.chai.expect([1, 2, 3].indexOf(4)).to.equal(-1);
    });
  });
});