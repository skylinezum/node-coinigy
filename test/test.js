var fs = require('fs');
var Coinigy = require('../dist/index');
var config = JSON.parse(fs.readFileSync('./test-config.json', 'utf8'));
var coinigy = new Coinigy(config.apiKey, config.apiSecret);
var chai = require('chai');
chai.should();

describe('Coinigy API', function () {
  describe.skip('Account Data', function() {
    //userInfo skip because not authorized to use this endpoint
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
          b.data.should.be.an('array');
          //console.log(b.data);
        })
        .catch(function (err) {
          should.not.exist(err);
          //console.log(err);
        });
      });
    });

    //TODO push notifications

    describe('accounts', function () {
      it('lists all accounts', function () {
        return coinigy.accounts()
        .then(function (b) {
          b.should.have.all.keys('data', 'notifications');
          b.notifications.should.be.an('array').with.length(0);
          //b.open_order.should.have.all.keys('exch_name');
        })
        .catch(function (err) {
          should.not.exist(err);
          //console.log(err);
        });
      });
    });

    describe('balances', function () {
      it('lists all account balance', function () {
        return coinigy.balances()
        .then(function (b) {
          b.should.have.all.keys('data', 'notifications');
          b.notifications.should.be.an('array').with.length(0);
        })
        .catch(function (err) {
          should.not.exist(err);
        });
      });
    });

    //TODO balance history

    describe('orders', function () {
      it('lists all orders', function () {
        return coinigy.orders()
        .then(function (b) {
          b.should.have.all.keys('data', 'notifications');
          b.notifications.should.be.an('array').with.length(0);
        })
        .catch(function (err) {
          should.not.exist(err);
        });
      });
    });

    //TODO alerts
    //TODO user watch list
    //TODO news feed

    //end account data
  });

  //accout functions
  describe.skip('Account Functions', function() {

    //TODO update user
    //TODO save preferences
    //TODO update tickers
    //TODO order types

    describe('refreshBalance', function () {
      it('refresh balance of specific auth_ids, in this case coinbase 8304', function () {
        return coinigy.refreshBalance(8304)
        .then(function (b) {
          b.should.have.all.keys('data', 'notifications');
        })
        .catch(function (err) {
          should.not.exist(err);
        });
      });
    });

    //TODO add alert
    //TODO delete alert
    //TODO add api key
    //TODO delete api key
    //TODO activate api key
    //TODO activate trading key
    //TODO add order
    //TODO cancel order
  });

  describe('Market Data', function() {
    describe('exchanges', function () {
      it('should get the exchanges', function () {
        return coinigy.exchanges()
        .then(function (b) {
          b.should.have.all.keys('data', 'notifications');
        })
        .catch(function (err) {
          should.not.exist(err);
        });
      });
    });

    //TODO markets
    //TODO data

    describe('ticker', function () {
      it('should get the ticker', function () {
        return coinigy.ticker('GDAX', 'BTC/USD')
        .then(function (b) {
          b.should.have.all.keys('data', 'notifications');
        })
        .catch(function (err) {
          should.not.exist(err);
        });
      });
    });
  });


  //How do I test post with a specific body? IE: auth_ids = 1234 in post for Refresh Balance
  //http://docs.coinigy.apiary.io/#reference/account-functions/refresh-balance/refreshbalance
});
