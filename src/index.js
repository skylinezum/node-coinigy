import axios from 'axios';
import querystring from 'querystring';

class Coinigy {
  constructor(apiKey, apiSecret) {
    this.apiKey = apiKey;
    this.apiSecret = apiSecret;
    this.url = 'https://www.coinigy.com/api/v1';
    this.endpoints = {
      //Account Data
      userInfo: '/userInfo',
      activity: '/activity',
      pushNotifications: '/pushNotifications',
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

  pushNotifications() {
    return this._post('pushNotifications');
  }

  accounts() {
    return this._post('accounts');
  }

  //0 or 1: return empty balances, string: comma-separated or underscore-separated list
  balances(show_nils, auth_ids) {
    let p = { show_nils, auth_ids };
    return this._post('balances', p);
  }

  //Datetime: "2016-07-01" format
  balanceHistory(date) {
    let p = { date };
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
    return this._post('newsFeed');
  }

  updateUser(first_name, last_name, company, phone, street1, street2, city, state, zip, country) {
    let p = {first_name, last_name, company, phone, street1, street2, city, state, zip, country};
    return this._post('updateUser', p);
  }

  savePrefs(alert_email, alert_sms, trade_email, trade_sms, balance_email) {
    let p = {alert_email, alert_sms, trade_email, trade_sms, balance_email};
    return this._post('savePrefs', p);
  }

  updateTickers(exch_mkt_ids) {
    let p = {exch_mkt_ids};
    return this._post('updateTickers', p);
  }

  orderTypes() {
    return this._post('orderTypes');
  }

  refreshBalance(auth_id) {
    let p = {auth_id};
    return this._post('refreshBalance', p);
  }

  addAlert(exch_code, market_name, alert_price, alert_note) {
    let p = {exch_code, market_name, alert_price, alert_note};
    return this._post('addAlert', p);
  }

  deleteAlert(alert_id) {
    let p = {alert_id};
    return this._post('deleteAlert', p);
  }

  addApiKey(api_key, api_secret, api_exch_id, api_nickname, api_optional1) {
    let p = {api_key, api_secret, api_exch_id, api_nickname, api_optional1};
    return this._post('addApiKey', p);
  }

  deleteApiKey(auth_id) {
    let p = {auth_id};
    return this._post('deleteApiKey', p);
  }

  activateApiKey(auth_id, auth_active) {
    let p = {auth_id, auth_active};
    return this._post('activateApiKey', p);
  }

  activateTradingKey(auth_id, auth_trade) {
    let p = {auth_id, auth_trade};
    return this._post('activateTradingKey', p);
  }

  addOrder(auth_id, exch_id, mkt_id, order_type_id, price_type_id, limit_price, stop_price, order_quantity) {
    let p = {auth_id, exch_id, mkt_id, order_type_id, price_type_id, limit_price, order_quantity};
    if (stop_price != null) p.stop_price = stop_price;
    return this._postEncoded('addOrder', p);
  }

  cancelOrder(internal_order_id) {
    let p = {internal_order_id};
    return this._postEncoded('cancelOrder', p);
  }

  exchanges() {
    return this._post('exchanges');
  }

  markets(exchange_code) {
    let p = {exchange_code};
    return this._post('markets', p);
  }

  //types = 'history, asks, bids, orders, all'
  data(exchange_code, exchange_market, type) {
    let p = {exchange_code, exchange_market, type};
    return this._post('data', p);
  }

  ticker(exchange_code, exchange_market) {
    let p = {exchange_code, exchange_market};
    return this._post('ticker', p);
  }
}

module.exports = Coinigy;
