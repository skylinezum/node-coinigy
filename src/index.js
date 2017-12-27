import axios from 'axios';
import querystring from 'querystring';

class Coinigy {
  constructor(apiKey, apiSecret) {
    this.apiKey = apiKey;
    this.apiSecret = apiSecret;
    this.url = 'https://api.coinigy.com/api/v1';
    this.endpoints = {
      //Account Data
      userInfo: '/userInfo',
      activity: '/activity',
      accounts: '/accounts',
      balances: '/balances',
      balanceHistory: '/balanceHistory',
      orders: '/orders',
      alerts: '/alerts',
      userWatchList: '/userWatchList',
      newsFeed: '/newsFeed',
      //Account Functions
      updateUser: '/updateUser',
      savePrefs: '/savePrefs',
      updateTickers: '/updateTickers',
      orderTypes: '/orderTypes',
      refreshBalance: '/refreshBalance',
      addAlert: '/addAlert',
      deleteAlert: '/deleteAlert',
      addApiKey: '/addApiKey',
      deleteApiKey: '/deleteApiKey',
      activateApiKey: '/activateApiKey',
      activateTradingKey: '/activateTradingKey',
      addOrder: '/addOrder',
      cancelOrder: '/cancelOrder',
      refreshOrders: '/refreshOrders',
      //Market Data
      exchanges: '/exchanges',
      markets: '/markets',
      data: '/data',
      ticker: '/ticker',
    };
    this.errors = {
      '1055': 'INVALID API KEY',
      '1056': 'RETURN DATA NOT PROPERLY FORMATTED',
      '1057': 'POSTED PARAMETERS WERE EITHER MISSING OR NOT PROPERLY FORMATTED',
      '1061': 'TRY/CATCH EXCEPTION',
      '1062': 'NO API METHOD PROVIDED',
    };
  }

  _postEncoded(api, params) {
    return axios.post(this.endpoints[api], querystring.stringify(params), {
      baseURL: this.url,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'X-API-KEY': this.apiKey,
        'X-API-SECRET': this.apiSecret,
      },
    })
    .then(function (res) {
      if (!res.data.hasOwnProperty('data')) throw res.data;
      return res.data;
    });
  }

  _post(api, params) {
    return axios.post(this.endpoints[api], params, {
      baseURL: this.url,
      headers: {
        'Content-Type': 'application/json',
        'X-API-KEY': this.apiKey,
        'X-API-SECRET': this.apiSecret,
      },
    })
    .then(function (res) {
      if (!res.data.hasOwnProperty('data')) throw res.data;
      return res.data;
    });
  }

  userInfo() {
    return this._post('userInfo');
  }

  activity() {
    return this._post('activity');
  }

  accounts() {
    return this._post('accounts');
  }

  //0 or 1: return empty balances, string: comma-separated or underscore-separated list
  balances(p) {
    return this._post('balances', p);
  }

  //Datetime: "2016-07-01" format
  balanceHistory(p) {
    return this._post('balanceHistory', p);
  }

  orders() {
    return this._post('orders');
  }


  alerts() {
    return this._post('alerts');
  }

  userWatchList() {
    return this._post('userWatchList');
  }

  newsFeed() {
    return this._postEncoded('newsFeed');
  }

  updateUser(p) {
    return this._post('updateUser', p);
  }

  savePrefs(p) {
    return this._post('savePrefs', p);
  }

  updateTickers(p) {
    return this._post('updateTickers', p);
  }

  orderTypes() {
    return this._post('orderTypes');
  }

  refreshBalance(p) {
    return this._post('refreshBalance', p);
  }

  addAlert(p) {
    return this._post('addAlert', p);
  }

  deleteAlert(p) {
    return this._post('deleteAlert', p);
  }

  addApiKey() {
    return this._post('addApiKey', p);
  }

  deleteApiKey(p) {
    return this._post('deleteApiKey', p);
  }

  activateApiKey(p) {
    return this._post('activateApiKey', p);
  }

  activateTradingKey(p) {
    return this._post('activateTradingKey', p);
  }

  addOrder(p) {
    return this._postEncoded('addOrder', p);
  }

  cancelOrder(p) {
    return this._postEncoded('cancelOrder', p);
  }

  refreshOrders(p) {
    return this._post('refreshOrders', p);
  }

  exchanges() {
    return this._post('exchanges');
  }

  markets(p) {
    return this._post('markets', p);
  }

  //types = 'history, asks, bids, orders, all'
  data(p) {
    return this._post('data', p);
  }

  ticker(p) {
    return this._post('ticker', p);
  }
}

module.exports = Coinigy;
