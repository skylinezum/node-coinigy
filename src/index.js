import axios from 'axios';
import querystring from 'querystring';

class Coinigy {
  constructor(apiKey, apiSecret) {
    this.apiKey = apiKey;
    this.apiSecret = apiSecret;
    this.url = 'https://api.coinigy.com/api/v2';
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

  _get(endpoint) {
    return axios.get(endpoint, {
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

  ordersHistory(p) {
    return _get('')
  }
}

module.exports = Coinigy;
