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
        b.open_order.should.have.all.keys('exch_name');
      })
      .catch(function (err) {
        should.not.exist(err);
      });
    });
  });
  describe('accounts', function () {
    it('lists all accounts', function () {
      return coinigy.accounts()
      .then(function (b) {
        b.should.have.all.keys('data', 'notifications');
        should.not.exist(b.notifications);
        //b.open_order.should.have.all.keys('exch_name');
      })
      .catch(function (err) {
        should.not.exist(err);
      });
    });
  });
  describe('balances', function () {
    it('lists all account balance', function () {
      return coinigy.balances()
      .then(function (b) {
        b.should.have.all.keys('data', 'notifications');
        should.not.exist(b.notifications);
        //b.open_order.should.have.all.keys('exch_name');
      })
      .catch(function (err) {
        should.not.exist(err);
      });
    });
  });
  describe('orders', function () {
    it('lists all orders', function () {
      return coinigy.orders()
      .then(function (b) {
        b.should.have.all.keys('data', 'notifications');
        should.not.exist(b.notifications);
        //b.open_order.should.have.all.keys('exch_name');
      })
      .catch(function (err) {
        should.not.exist(err);
      });
    });
  });
  //How do I test post with a specific body? IE: auth_ids = 1234 in post for Refresh Balance
  //http://docs.coinigy.apiary.io/#reference/account-functions/refresh-balance/refreshbalance
});
