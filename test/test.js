var Coinigy = require('../dist/index');
var config = require('../test-config.json');
var coinigy = new Coinigy(config.apiKey, config.apiSecret);
var chai = require('chai');
chai.should();
const child_process = require('child_process');

const sleep = (sec) => {
  child_process.execSync(`sleep ${sec}`);
}

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
          err.should.not.exist;
        });
      });
      sleep(1);
    });



    describe('activity', function () {
      it('should return many keys', function () {
        return coinigy.activity()
        .then(function (b) {
          b.should.have.all.keys('data', 'notifications');
          b.data.should.be.an('array');
          //console.log(b.data);
        })
        .catch(function (err) {
          err.should.not.exist;
          //console.log(err);
        });
      });
      sleep(1);
    });

    describe('accounts', function () {
      it('lists all accounts', function () {
        return coinigy.accounts()
        .then(function (b) {
          b.should.have.all.keys('data', 'notifications');
          b.notifications.should.be.an('array').with.length(0);
          //b.open_order.should.have.all.keys('exch_name');
        })
        .catch(function (err) {
          err.should.not.exist;
          //console.log(err);
        });
      });
      sleep(1);
    });

    describe('balances', function () {
      it('lists all account balance', function () {
        return coinigy.balances()
        .then(function (b) {
          b.should.have.all.keys('data', 'notifications');
          b.notifications.should.be.an('array').with.length(0);
        })
        .catch(function (err) {
          err.should.not.exist;
        });
      });
      sleep(1);
    });

    describe('balance history', function() {
      it('should have keys', function () {
        return coinigy.balanceHistory({date: '2017-12-01'})
        .then(function (b) {
          b.should.have.all.keys('data', 'notifications');
        })
        .catch(function (err) {
          err.should.not.exist;
          //console.log(err);
        });
      });
      sleep(1);
    });

    describe('orders', function () {
      it('lists all orders', function () {
        return coinigy.orders()
        .then(function (b) {
          b.should.have.all.keys('data', 'notifications');
          b.notifications.should.be.an('array').with.length(0);
        })
        .catch(function (err) {
          err.should.not.exist;
        });
      });
      sleep(1);
    });

    describe('alerts', function() {
      it('should have keys', function () {
        return coinigy.alerts()
        .then(function (b) {
          b.should.have.all.keys('data', 'notifications');
        })
        .catch(function (err) {
          err.should.not.exist;
          //console.log(err);
        });
      });
      sleep(1);
    });

    describe('user watch list', function() {
      it('should have keys', function () {
        return coinigy.userWatchList()
        .then(function (b) {
          b.should.have.all.keys('data', 'notifications');
        })
        .catch(function (err) {
          err.should.not.exist;
          //console.log(err);
        });
      });
      sleep(1);
    });

    describe('news feed', function() {
      it('should have keys', function () {
        return coinigy.newsFeed()
        .then(function (b) {
          b.should.have.all.keys('data', 'notifications');
        })
        .catch(function (err) {
          err.should.not.exist;
          //console.log(err);
        });
      });
      sleep(1);
    });

    //end account data
  });

  //accout functions
  describe('Account Functions', function() {

    //TODO update user
    //TODO save preferences
    //TODO update tickers
    //TODO order types

    describe('refreshBalance', function () {
      it('refresh balance of specific auth_ids, in this case coinbase', function () {
        return coinigy.refreshBalance({auth_id: '13605'})
        .then(function (b) {
          b.should.have.all.keys('data', 'notifications');
        })
        .catch(function (err) {
          err.should.not.exist;
        });
      });
      sleep(1);
    });

    //TODO add alert
    //TODO delete alert
    //TODO add api key
    //TODO delete api key
    //TODO activate api key
    //TODO activate trading key
    //TODO add order
    //TODO cancel order
    //TODO refreshOrders

    describe('refreshOrders', function () {
      it('refresh orders of specific auth_ids, in this case coinbase', function () {
        this.timeout(5000);
        return coinigy.refreshOrders({auth_id: '13605'})
        .then(function (b) {
          b.should.have.all.keys('data', 'notifications');
        })
        .catch(function (err) {
          err.should.not.exist;
        });
      });
      sleep(1);
    });
  });

  describe.skip('Market Data', function() {
    describe('exchanges', function () {
      it('should get the exchanges', function () {
        return coinigy.exchanges()
        .then(function (b) {
          b.should.have.all.keys('data', 'notifications');
        })
        .catch(function (err) {
          err.should.not.exist;
        });
      });
      sleep(1);
    });

    describe('markets', function () {
      it('should get the markets', function () {
        return coinigy.markets()
        .then(function (b) {
          b.should.have.all.keys('data', 'notifications');
        })
        .catch(function (err) {
          err.should.not.exist;
        });
      });
      sleep(1);
    });

    describe('data', function () {
      it('should get the data', function () {
        return coinigy.data({exchange_code: 'GDAX', exchange_market: 'BTC/USD', type: 'history'})
        .then(function (b) {
          b.should.have.all.keys('data', 'notifications');
        })
        .catch(function (err) {
          err.should.not.exist;
        });
      });
      sleep(1);
    });

    describe('ticker', function () {
      it('should get the ticker', function () {
        return coinigy.ticker({
          exchange_code: 'GDAX',
          exchange_market: 'BTC/USD'
        })
        .then(function (b) {
          b.should.have.all.keys('data', 'notifications');
        })
        .catch(function (err) {
          err.should.not.exist;
        });
      });
      sleep(1);
    });
  });


  //How do I test post with a specific body? IE: auth_ids = 1234 in post for Refresh Balance
  //http://docs.coinigy.apiary.io/#reference/account-functions/refresh-balance/refreshbalance
});
