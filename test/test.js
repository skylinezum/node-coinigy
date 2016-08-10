var fs = require('fs');
var Coinigy = require('../dist/index');
var config = JSON.parse(fs.readFileSync('./test-config.json', 'utf8'));
var coinigy = new Coinigy(config.apiKey, config.apiSecret);
var chai = require('chai');
chai.should();

describe('Coinigy API', function () {
  //userInfo
  describe('userInfo', function () {
    it('should return many keys', function () {
      return coinigy.userInfo()
      .then(function (b) {
        b.should.have.all.keys('data', 'notifications');
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

});
