var Coinigy = require('../dist/index');
var coinigy = new Coinigy('4f6e2e46ba11b3186dce6a085878b1bb', 'a24e9ade54d3407b4083f8dacfaaceae');
var chai = require('chai');
chai.should();

describe('Coinigy API', function () {
  //userInfo
  describe('userInfo', function () {
    it('should return many keys', function () {
      return coinigy.userInfo()
      .then(function (b) {
        b.should.have.any.keys('email');
      })
      .catch(function (err) {
        should.not.exist(err);
      });
    });
  });

  //activity log
  describe('activity', function () {
    it('should return many keys', function () {
      return coinigy.activity()
      .then(function (b) {
        b.should.have.all.keys('data', 'notifications');
      })
      .catch(function (err) {
        should.not.exist(err);
      });
    });
  });

  //


});
