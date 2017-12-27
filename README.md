# node-coinigy
Promise based Node wrapper for Coinigy's REST API

[Coinigy API Documentation](http://docs.coinigy.apiary.io/)

>Coinigy API doesn't support `application/json` body for certain endpoints and requires `application/x-www-form-urlencoded`
>Known endpoints to fail - addOrder, cancelOrder, newsFeed. I support them still, but change it back to json in the future.

# Install
```bash
npm install node-coinigy --save
```

# Use
```
var Coinigy = require('node-coinigy');
var coinigy = new Coinigy('your-api-key', 'your-api-secret');

coinigy.activity()
.then(function (body) {
  console.log(body.data);
  console.log(body.notifications);
})
.catch(function (err) {
  console.log(err);
});
```

# API
>? means optional

- userInfo
- activity
- accounts
- balances {show_nils?, auth_ids?}
- balanceHistory {date}
- orders
- alerts
- userWatchList
- newsFeed
- updateUser {first_name, last_name, company, phone, street1, street2, city, state, zip, country}
- savePrefs {alert_email, alert_sms, trade_email, trade_sms, balance_email}
- updateTickers {exch_mkt_ids}
- orderTypes
- refreshBalance {auth_id}
- addAlert
- deleteAlert {alert_id}
- addApiKey {api_key, api_secret, api_exch_id, api_nickname, api_optional1}
- deleteApiKey {auth_id}
- activateApiKey {auth_id, auth_active}
- activateTradingKey {auth_id, auth_trade}
- addOrder {auth_id, exch_id, mkt_id, order_type_id, price_type_id, limit_price, stop_price?, order_quantity}
- cancelOrder {internal_order_id}
- refreshOrders {auth_id}
- exchanges
- markets {exchange_code}
- data {exchange_code, exchange_market, type}
- ticker {exchange_code, exchange_market}

# Test

Test coverage is very small, so there are no guarantees that all endpoints work.

To run tests, create test-config.json using test-config-example.json.

```bash
npm test
```

# Contributing

I made this very quickly so if anyone would like to help, please feel free to make a PR

TODO:

1. Increase test coverage
2. Documentation
